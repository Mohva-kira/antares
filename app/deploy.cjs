require("dotenv").config();
const { execSync, spawn } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const readline = require("readline");
const os = require("os");

const remoteUser = process.env.DEPLOY_USER;
const remoteHost = process.env.DEPLOY_HOST;
const remotePath = process.env.DEPLOY_PATH;
const remotePort = process.env.DEPLOY_PORT || "22";
const localBuildPath = "./dist";
const hashFile = "build-hash.txt";

// Couleurs pour l'affichage
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

if (!remoteUser || !remoteHost || !remotePath) {
  console.error(
    `${colors.red}❌ Erreur : Variables DEPLOY_USER, DEPLOY_HOST ou DEPLOY_PATH manquantes dans .env${colors.reset}`
  );
  process.exit(1);
}

// Détecter l'environnement d'exécution
function detectEnvironment() {
  const platform = os.platform();

  if (platform === "win32") {
    // Vérifier si on est dans WSL
    try {
      const release = fs.readFileSync("/proc/version", "utf8");
      if (release.toLowerCase().includes("microsoft")) {
        return "wsl";
      }
    } catch {
      return "windows";
    }
  }

  return platform; // linux, darwin, etc.
}

// Vérifier les dépendances système
function checkDependencies() {
  console.log(
    `${colors.cyan}🔧 Vérification des dépendances...${colors.reset}`
  );

  const env = detectEnvironment();

  try {
    if (env === "windows") {
      // Essayer d'utiliser sshpass via WSL
      execSync("wsl sshpass -V", { stdio: "pipe" });
      console.log(`${colors.green}✅ sshpass trouvé via WSL${colors.reset}`);
      return "wsl";
    } else {
      // Vérifier sshpass localement
      execSync("sshpass -V", { stdio: "pipe" });
      console.log(`${colors.green}✅ sshpass trouvé localement${colors.reset}`);
      return "local";
    }
  } catch (error) {
    if (env === "windows") {
      console.error(
        `${colors.red}❌ sshpass n'est pas installé dans WSL. Installez-le avec:${colors.reset}`
      );
      console.error(
        `${colors.cyan}   wsl -e bash -c "sudo apt install sshpass"${colors.reset}`
      );
    } else if (env === "wsl" || env === "linux") {
      console.error(
        `${colors.red}❌ sshpass n'est pas installé. Installez-le avec:${colors.reset}`
      );
      console.error(`${colors.cyan}   sudo apt install sshpass${colors.reset}`);
    }
    process.exit(1);
  }
}

// Demander le mot de passe SSH
function askPassword() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Masquer la saisie du mot de passe
    rl.stdoutMuted = true;
    rl._writeToOutput = function (stringToWrite) {
      if (rl.stdoutMuted) {
        rl.output.write("*");
      } else {
        rl.output.write(stringToWrite);
      }
    };

    rl.question(
      `${colors.cyan}🔐 Mot de passe SSH pour ${remoteUser}@${remoteHost}: ${colors.reset}`,
      (password) => {
        rl.close();
        console.log(); // Nouvelle ligne après la saisie
        resolve(password);
      }
    );
  });
}

// Progress bar
function showProgress(message, duration = 3000) {
  return new Promise((resolve) => {
    console.log(`${colors.blue}${message}...${colors.reset}`);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      const bar = "█".repeat(progress / 10) + "░".repeat(10 - progress / 10);
      process.stdout.write(
        `\r${colors.cyan}[${bar}] ${progress}%${colors.reset}`
      );

      if (progress >= 100) {
        clearInterval(interval);
        console.log(`\n${colors.green}✅ ${message} terminé${colors.reset}`);
        resolve();
      }
    }, duration / 10);
  });
}

// Jouer un son de notification
function playNotificationSound() {
  try {
    console.log("\u0007"); // Beep sonore simple et universel
    console.log(`${colors.yellow}🔔 Notification sonore${colors.reset}`);
  } catch {
    console.log(
      `${colors.yellow}🔔 Son de notification non disponible${colors.reset}`
    );
  }
}

// Fonction pour générer un hash
function generateBuildHash(dirPath) {
  const hash = crypto.createHash("sha256");

  function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fse.readdirSync(dir, { withFileTypes: true });
    files.forEach((file) => {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        processDirectory(filePath);
      } else {
        const content = fs.readFileSync(filePath);
        hash.update(content);
      }
    });
  }

  processDirectory(dirPath);
  return hash.digest("hex");
}

// Tester la connexion SSH
// Tester la connexion SSH
async function testSSHConnection(password, sshMethod) {
  try {
    console.log(`${colors.cyan}🔍 Test de la connexion SSH...${colors.reset}`);

    // Tenter d'abord avec une commande simple pour vérifier l'authentification
    const testCommand = `ssh -o StrictHostKeyChecking=no -p ${remotePort} ${remoteUser}@${remoteHost} "whoami"`;

    if (sshMethod === "wsl") {
      execSync(`wsl sshpass -p "${password}" ${testCommand}`, {
        stdio: "pipe",
      });
    } else {
      execSync(`sshpass -p "${password}" ${testCommand}`, { stdio: "pipe" });
    }

    console.log(`${colors.green}✅ Connexion SSH validée${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.red}❌ Échec de la connexion SSH${colors.reset}`);
    console.error(`${colors.yellow}💡 Vérifiez:${colors.reset}`);
    console.error(`   - Le mot de passe est correct`);
    console.error(
      `   - L'authentification par mot de passe est activée sur le serveur`
    );
    console.error(`   - L'utilisateur ${remoteUser} existe sur ${remoteHost}`);
    console.error(`   - Le port ${remotePort} est accessible`);

    // Proposer de réessayer avec un nouveau mot de passe
    const retry = await askRetry();
    if (retry) {
      playNotificationSound();
      const newPassword = await askPassword();
      return await testSSHConnection(newPassword, sshMethod);
    }

    return false;
  }
}

// Fonction pour demander si on veut réessayer
function askRetry() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `${colors.cyan}🔄 Voulez-vous réessayer avec un autre mot de passe ? (o/N): ${colors.reset}`,
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "o" || answer.toLowerCase() === "oui");
      }
    );
  });
}

// Améliorer la fonction askPassword pour éviter les erreurs de saisie
function askPassword() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Masquer la saisie du mot de passe
    rl.stdoutMuted = true;
    rl._writeToOutput = function (stringToWrite) {
      if (rl.stdoutMuted) {
        rl.output.write("*");
      } else {
        rl.output.write(stringToWrite);
      }
    };

    console.log(
      `${colors.yellow}⚠️  Assurez-vous que l'authentification par mot de passe est activée sur le serveur SSH${colors.reset}`
    );
    rl.question(
      `${colors.cyan}🔐 Mot de passe SSH pour ${remoteUser}@${remoteHost}: ${colors.reset}`,
      (password) => {
        rl.close();
        console.log(); // Nouvelle ligne après la saisie

        if (!password || password.trim() === "") {
          console.log(
            `${colors.red}❌ Mot de passe vide, veuillez réessayer${colors.reset}`
          );
          resolve(askPassword()); // Récursion pour redemander
        } else {
          resolve(password.trim());
        }
      }
    );
  });
}

// Ajouter une fonction de diagnostic avant le déploiement
async function diagnoseDeployment(password, sshMethod) {
  try {
    console.log(`${colors.cyan}🔍 Diagnostic du serveur...${colors.reset}`);

    // Vérifier le répertoire de destination
    const checkDirCommand = `ssh -p ${remotePort} -o StrictHostKeyChecking=no ${remoteUser}@${remoteHost} "ls -la ${remotePath} && pwd && whoami"`;

    if (sshMethod === "wsl") {
      execSync(`wsl sshpass -p "${password}" ${checkDirCommand}`, {
        stdio: "inherit",
      });
    } else {
      execSync(`sshpass -p "${password}" ${checkDirCommand}`, {
        stdio: "inherit",
      });
    }

    // Vérifier les permissions du répertoire parent
    const parentDir = path.dirname(remotePath);
    const checkParentCommand = `ssh -p ${remotePort} -o StrictHostKeyChecking=no ${remoteUser}@${remoteHost} "ls -la ${parentDir}"`;

    if (sshMethod === "wsl") {
      execSync(`wsl sshpass -p "${password}" ${checkParentCommand}`, {
        stdio: "inherit",
      });
    } else {
      execSync(`sshpass -p "${password}" ${checkParentCommand}`, {
        stdio: "inherit",
      });
    }
  } catch (error) {
    console.error(
      `${colors.red}❌ Erreur lors du diagnostic: ${error.message}${colors.reset}`
    );
  }
}

// Modifier la fonction executeDeployment
async function executeDeployment(password, sshMethod) {
  try {
    console.log(`${colors.cyan}🚀 Déploiement avec SCP...${colors.reset}`);

    // Diagnostic préalable
    await diagnoseDeployment(password, sshMethod);

    // Vérifier que le dossier de build existe et contient des fichiers
    if (!fs.existsSync(localBuildPath)) {
      throw new Error(`Le dossier de build n'existe pas: ${localBuildPath}`);
    }

    const buildFiles = fs.readdirSync(localBuildPath);
    if (buildFiles.length === 0) {
      throw new Error(`Le dossier de build est vide: ${localBuildPath}`);
    }

    console.log(
      `${colors.green}✅ Fichiers trouvés dans ${localBuildPath}: ${buildFiles.length} éléments${colors.reset}`
    );

    // 1. Copie directe du contenu de ./dist vers le serveur
    console.log(
      `${colors.cyan}📤 Copie directe des fichiers vers le serveur...${colors.reset}`
    );
    
    // Nettoyer et copier directement
    const cleanAndCopyCommand = `ssh -p ${remotePort} -o StrictHostKeyChecking=no ${remoteUser}@${remoteHost} \
"mkdir -p ${remotePath} && \
rm -rf ${remotePath}/* ${remotePath}/.[!.]* ${remotePath}/..?*"`;

    if (sshMethod === "wsl") {
      execSync(`wsl sshpass -p "${password}" ${cleanAndCopyCommand}`, {
        stdio: "inherit",
      });
    } else {
      execSync(`sshpass -p "${password}" ${cleanAndCopyCommand}`, {
        stdio: "inherit",
      });
    }

    // Copie directe avec rsync pour plus d'efficacité
    const rsyncCommand = `rsync -avz --delete -e "ssh -p ${remotePort} -o StrictHostKeyChecking=no" ${localBuildPath}/ ${remoteUser}@${remoteHost}:${remotePath}/`;

    if (sshMethod === "wsl") {
      execSync(`wsl sshpass -p "${password}" ${rsyncCommand}`, {
        stdio: "inherit",
      });
    } else {
      execSync(`sshpass -p "${password}" ${rsyncCommand}`, { stdio: "inherit" });
    }

    // 2. Créer une archive de sauvegarde dans le dossier archive
    const archiveDir = "./archive";
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true });
      console.log(`${colors.cyan}📁 Dossier archive créé${colors.reset}`);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const archiveName = `${archiveDir}/build-${timestamp}.tar.gz`;
    
    console.log(`${colors.cyan}📦 Création de l'archive de sauvegarde...${colors.reset}`);
    
    const tarOptions = [
      "-czf",
      archiveName,
      "-C",
      localBuildPath,
      "--no-same-owner",
      "--no-same-permissions",
      "--exclude=.*",
      ".",
    ].join(" ");

    if (sshMethod === "wsl") {
      execSync(`wsl tar ${tarOptions}`, { stdio: "inherit" });
    } else {
      execSync(`tar ${tarOptions}`, { stdio: "inherit" });
    }

    console.log(
      `${colors.green}✅ Archive sauvegardée: ${archiveName}${colors.reset}`
    );

    console.log(
      `${colors.green}✅ Déploiement terminé avec succès${colors.reset}`
    );
    return true;
  } catch (error) {
    console.error(
      `${colors.red}❌ Erreur lors du déploiement: ${error.message}${colors.reset}`
    );
    return false;
  }
}
// Fonction principale
async function deploy() {
  const env = detectEnvironment();
  console.log(
    `${colors.bright}${
      colors.blue
    }🚀 DÉPLOIEMENT ANTARES - ${env.toUpperCase()}${colors.reset}\n`
  );

  // Vérifier les dépendances et déterminer la méthode SSH
  const sshMethod = checkDependencies();

  // Générer les hashs
  console.log(
    `${colors.cyan}🔍 Vérification des changements...${colors.reset}`
  );
  const [srcHash, publicHash] = ["src", "public"].map(generateBuildHash);
  const fullHash = srcHash + publicHash;
  let previousHash = "";

  if (fs.existsSync(hashFile)) {
    previousHash = fs.readFileSync(hashFile, "utf8").trim();
  }

  if (fullHash === previousHash) {
    console.log(
      `${colors.green}✅ Aucun changement détecté. Déploiement annulé.${colors.reset}`
    );
    return;
  }

  try {
    // Build de l'application
    await showProgress("📦 Build de l'application React", 2000);
    execSync("npx cross-env CI=false npm run build", { stdio: "pipe" });

    // Demander le mot de passe
    playNotificationSound();
    const password = await askPassword();

    // Tester la connexion SSH
    const connectionOK = await testSSHConnection(password, sshMethod);
    if (!connectionOK) {
      throw new Error("Connexion SSH échouée");
    }

    // Exécuter le déploiement
    const deploymentOK = await executeDeployment(password, sshMethod);
    if (!deploymentOK) {
      throw new Error("Déploiement échoué");
    }

    // Sauvegarder le hash
    fs.writeFileSync(hashFile, fullHash);

    console.log(
      `\n${colors.green}${colors.bright}🎉 DÉPLOIEMENT TERMINÉ !${colors.reset}`
    );
    console.log(
      `${colors.cyan}📄 Hash sauvegardé: ${fullHash.substring(0, 16)}...${
        colors.reset
      }`
    );

    playNotificationSound();
  } catch (error) {
    console.error(
      `\n${colors.red}${colors.bright}❌ ERREUR DE DÉPLOIEMENT${colors.reset}`
    );
    console.error(`${colors.red}${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// Lancer le déploiement
deploy();
