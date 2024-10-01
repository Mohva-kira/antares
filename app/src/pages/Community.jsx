import React from "react";
import Layout from "../components/Layout";
import ArticlesCard from "../components/ArticlesCard";
import NewsLetter from "../components/NewsLetter";
import PopularCard from "../components/PopularCard";

const Community = () => {
  const contentArray = [
    {
      title: "Comment se préparer pour un entretien d'embauche",
      description:
        "Cet article propose des conseils sur la préparation avant un entretien. Il recommande de bien comprendre l'entreprise, de pratiquer des questions d'entretien courantes et d'être prêt à parler de ses réalisations professionnelles.",
      bgImage:
        "https://www.letecode.com/storage/articles/June2021/I1PF2FjDhjEygfb5CM6d.jpeg", // Développement Web - bureau avec code
    },
    {
      title: "Optimisation de votre CV et profil LinkedIn",
      description:
        "Il est essentiel d'avoir un CV et un profil LinkedIn bien optimisés pour attirer l'attention des recruteurs. Cet article donne des conseils pratiques pour mettre en valeur tes compétences et ton expérience.",
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yfXuL2jjVbP-Q_7ptDNDjToZ-oeLoYUtwQ&s", // Optimisation SEO - tableau SEO
    },
    {
      title: "Transformation Digitale",
      description:
        "Accompagner les entreprises dans leur passage au numérique en automatisant les processus et optimisant l'efficacité.",
      bgImage: "https://unsplash.com/photos/SYTO3xs06fU", // Transformation digitale - technologies numériques
    },
    {
      title: "Les meilleurs moyens de réseauter pour décrocher un emploi",
      description:
        " Le réseautage est un moyen puissant de trouver un emploi. Cet article explique comment utiliser les réseaux sociaux professionnels, participer à des événements et développer des connexions pour maximiser tes chances.",
      bgImage: "https://unsplash.com/photos/ivfeOa1KTQU", // Cybersécurité - protection des données
    },
    {
      title: "Analyse de Données",
      description:
        "Les compétences les plus recherchées par les recruteurs en 2024",
      bgImage: "https://unsplash.com/photos/qwtCeJ5cLYs", // Analyse de données - graphiques et statistiques
    },
    {
      title:
        "Techniques pour réussir les tests d’évaluation lors d’un recrutement",
      description:
        "Certains processus de recrutement incluent des tests d'évaluation techniques ou comportementaux. Cet article donne des astuces pour s'y préparer, comme l'entraînement sur des plateformes comme HackerRank pour les développeurs, ou la préparation aux tests psychométriques.",
      bgImage: "https://unsplash.com/photos/s9CC2SKySJM", // Développement mobile - téléphone avec code
    },
    // {
    //   title: "UX/UI Design",
    //   description:
    //     "Créer des interfaces utilisateur intuitives et attractives pour maximiser l'engagement des utilisateurs.",
    //   bgImage: "https://unsplash.com/photos/2zZp12ChxhU", // UX/UI Design - wireframes
    // },
    // {
    //   title: "Cloud Computing",
    //   description:
    //     "Migrer vos infrastructures sur le cloud pour bénéficier de la scalabilité et de la flexibilité des services cloud.",
    //   bgImage: "https://unsplash.com/photos/YIW0bCuU7zU", // Cloud Computing - nuages et infrastructure cloud
    // },
    // {
    //   title: "Gestion de Projet Agile",
    //   description:
    //     "Appliquer des méthodologies agiles pour assurer la bonne gestion de vos projets et livrer à temps.",
    //   bgImage: "https://unsplash.com/photos/oLqUgxagwHQ", // Gestion de Projet Agile - tableau Kanban
    // },
    // {
    //   title: "Marketing Digital",
    //   description:
    //     "Mettre en place des stratégies de marketing digital pour augmenter la visibilité de votre marque.",
    //   bgImage: "https://unsplash.com/photos/8K62atzbulI", // Marketing Digital - publicité en ligne, réseaux sociaux
    // },
  ];
  return (
    <Layout>
      <div className="flex w-full flex-col lg:flex-row lg:space-x-6 p-4 space-y-6 lg:space-y-0">
        {/* Newsletter Section */}
        <div className="w-full lg:w-1/4">
          <NewsLetter />
        </div>

        {/* Articles Section */}
        <div className="w-full lg:w-full flex flex-wrap gap-4">
          {contentArray.map((article, index) => (
            <ArticlesCard key={index} article={article} />
          ))}
        </div>

        <div className="w-full lg:w-1/4 mt-6 lg:mt-0 mx-auto p-4">
          <PopularCard />
        </div>
      </div>

      {/* Popular Card Section */}
    </Layout>
  );
};

export default Community;
