import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

const ArticleSection = ({ id, title, text, sousSections }) => (
  <div className="mb-8">
    <h2 id={id} className="text-2xl font-bold text-gray-800 mb-4">
      {title}
    </h2>
    <p className="text-gray-700 mb-4">{text}</p>
    {sousSections &&
      sousSections.map((sousSection) => (
        <div key={sousSection.id} className="ml-4">
          <h3
            id={sousSection.id}
            className="text-xl font-semibold text-gray-700 mb-2">
            {sousSection.title}
          </h3>
          <p className="text-gray-600">{sousSection.text}</p>
        </div>
      ))}
  </div>
);

const ReadingProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200">
      <div
        className="h-2 bg-blue-500"
        style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

const ArticleContent = ({ titre, auteur, date, contenu }) => {
  return (
    <div className="bg-white w-full shadow-lg rounded-2xl p-8 m-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{titre}</h1>
      <div className="text-gray-600 text-sm mb-8">
        <p>
          Par <span className="font-semibold">{auteur}</span>
        </p>
        <p>{date}</p>

        <Feedback />
      </div>
      <div className="text-gray-700 leading-relaxed space-y-6">
        {contenu.map((section) => (
          <ArticleSection
            key={section.id}
            id={section.id}
            title={section.title}
            text={section.text}
            sousSections={section.sousSections}
          />
        ))}
      </div>
    </div>
  );
};

const TableOfContents = ({ headings }) => (
  <div className="lg:fixed w-full left-5 top-30 bg-white shadow-lg p-4 rounded-2xl">
    <h3 className="text-lg font-bold mb-2">Sommaire</h3>
    <ul className="space-y-2">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`} className="text-blue-500 hover:underline">
            {heading.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialShare = () => (
  <div className="fixed bottom-10 left-5 flex  space-x-2">
    <a href="#" className="p-2 bg-blue-500 rounded-full text-white">
      Twitter
    </a>
    <a href="#" className="p-2 bg-blue-600 rounded-full text-white">
      LinkedIn
    </a>
    <a href="#" className="p-2 bg-green-500 rounded-full text-white">
      WhatsApp
    </a>
  </div>
);

const Feedback = () => (
  <div className="flex justify-center items-center space-x-4 mt-6">
    <button className="bg-green-500 text-white p-2 rounded-full">👍</button>
    <button className="bg-red-500 text-white p-2 rounded-full">👎</button>
  </div>
);

const article = {
  titre: "Les Fondamentaux de JavaScript",
  auteur: "Alice Martin",
  date: "25 Septembre 2024",
  contenu: [
    {
      id: "introduction",
      title: "Introduction à JavaScript",
      text: `JavaScript est l'un des langages de programmation les plus populaires et essentiels pour le développement web. Il permet de créer des pages web interactives et dynamiques. Dans cet article, nous explorerons les concepts de base de JavaScript.`,
    },
    {
      id: "variables",
      title: "Variables et Types de Données",
      text: `Les variables sont utilisées pour stocker des données qui peuvent être modifiées ou réutilisées plus tard dans un programme. JavaScript prend en charge plusieurs types de données, y compris les chaînes, les nombres, les booléens, et plus encore.`,
      sousSections: [
        {
          id: "declaration-variables",
          title: "Déclaration des Variables",
          text: `Il existe trois manières de déclarer une variable en JavaScript : avec var, let, et const.
          \n- \`var\` : Utilisé historiquement mais a des problèmes de portée.
          \n- \`let\` : Utilisé pour des variables dont la valeur peut changer.
          \n- \`const\` : Utilisé pour des variables dont la valeur ne doit pas changer.`,
        },
        {
          id: "types-donnees",
          title: "Types de Données",
          text: `JavaScript gère plusieurs types de données : 
          \n- **Nombres** : Représentent des valeurs numériques, qu'elles soient entières ou à virgule flottante.
          \n- **Chaînes de caractères (Strings)** : Utilisées pour représenter du texte. Les chaînes sont entourées de guillemets simples ou doubles.
          \n- **Booléens** : Représentent des valeurs logiques, soit \`true\`, soit \`false\`.`,
        },
      ],
    },
    {
      id: "fonctions",
      title: "Les Fonctions",
      text: `Les fonctions sont des blocs de code qui peuvent être réutilisés à travers votre programme. Elles permettent de structurer le code, d'éviter la répétition, et d'améliorer la lisibilité.`,
      sousSections: [
        {
          id: "declaration-fonction",
          title: "Déclaration d'une Fonction",
          text: `Il existe deux façons principales de déclarer une fonction en JavaScript : 
          \n1. **Déclaration de fonction** : 
          \n\`\`\`
          function maFonction() {
            console.log("Hello, world!");
          }
          \`\`\`
          \n2. **Expression de fonction** :
          \n\`\`\`
          const maFonction = function() {
            console.log("Hello, world!");
          };
          \`\`\``,
        },
        {
          id: "fonctions-fléchées",
          title: "Les Fonctions Fléchées",
          text: `Les fonctions fléchées sont une syntaxe plus concise pour déclarer des fonctions en JavaScript. Elles utilisent la flèche \`=>\` au lieu du mot-clé \`function\`.
          \n\`\`\`
          const maFonction = () => {
            console.log("Hello, world!");
          };
          \`\`\`
          Elles ont aussi un comportement différent concernant \`this\`, ce qui les rend utiles dans certaines situations.`,
        },
      ],
    },
    {
      id: "boucles",
      title: "Les Boucles",
      text: `Les boucles permettent d'exécuter un bloc de code plusieurs fois de manière répétée. JavaScript supporte plusieurs types de boucles.`,
      sousSections: [
        {
          id: "boucle-for",
          title: "La Boucle for",
          text: `La boucle \`for\` est l'une des boucles les plus courantes en JavaScript. Elle permet d'itérer un nombre fixe de fois.
          \n\`\`\`
          for (let i = 0; i < 5; i++) {
            console.log(i);
          }
          \`\`\`
          Cela affichera les nombres de 0 à 4.`,
        },
        {
          id: "boucle-while",
          title: "La Boucle while",
          text: `La boucle \`while\` continue à s'exécuter tant qu'une condition donnée est vraie.
          \n\`\`\`
          let i = 0;
          while (i < 5) {
            console.log(i);
            i++;
          }
          \`\`\`
          Comme avec la boucle \`for\`, cela affichera les nombres de 0 à 4.`,
        },
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      text: `JavaScript est un langage puissant avec des fonctionnalités riches qui permettent de créer des applications interactives. En maîtrisant les concepts de base comme les variables, les fonctions et les boucles, vous serez bien équipé pour continuer à explorer JavaScript plus en profondeur.`,
    },
  ],
};

const ArticlePage = () => {
  const headings = article.contenu.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row  w-full">
        <ReadingProgress />

        <div className="lg:w-1/4 w-full p-2  justify-around lg:h-full ">
          <TableOfContents headings={headings} />
          <SocialShare />
        </div>

        <div className="min-h-screen bg-gray-100 py-10 p-2">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Lecture de l'article
            </h1>
            <p className="text-gray-600 mt-4">
              Explorez les bases de JavaScript à travers cet article.
            </p>
          </div>

          {/* Table of Contents */}

          {/* Article Content */}
          <ArticleContent
            titre={article.titre}
            auteur={article.auteur}
            date={article.date}
            contenu={article.contenu}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
