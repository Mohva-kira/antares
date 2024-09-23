import React from "react";
import Layout from "../components/Layout";
import ArticlesCard from "../components/ArticlesCard";
import NewsLetter from "../components/NewsLetter";
import PopularCard from "../components/PopularCard";

const Community = () => {
  const contentArray = [
    {
      title: "Développement Web",
      description:
        "Créer des applications web modernes avec React.js et TailwindCSS pour une expérience utilisateur optimale.",
      bgImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769", // Développement Web - bureau avec code
    },
    {
      title: "Optimisation SEO",
      description:
        "Améliorer le référencement de votre site pour attirer plus de trafic organique à travers des stratégies SEO avancées.",
      bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0", // SEO - recherche Google, graphique
    },
    {
      title: "Transformation Digitale",
      description:
        "Accompagner les entreprises dans leur passage au numérique en automatisant les processus et optimisant l'efficacité.",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", // Transformation digitale - bureau moderne, technologies numériques
    },
    {
      title: "Cybersécurité",
      description:
        "Mettre en place des solutions de sécurité informatique pour protéger vos données et celles de vos clients.",
      bgImage: "https://images.unsplash.com/photo-1506111583091-becfd4bfa6a6", // Cybersécurité - cadenas numérique, protection des données
    },
    {
      title: "Analyse de Données",
      description:
        "Exploiter la puissance des données pour des insights business et améliorer la prise de décision.",
      bgImage: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd", // Analyse de données - graphiques et statistiques
    },
    {
      title: "Mobile Development",
      description:
        "Concevoir des applications mobiles performantes et fluides pour iOS et Android.",
      bgImage: "https://images.unsplash.com/photo-1538336712274-f1a232f6dfd4", // Développement mobile - téléphone avec code
    },
    {
      title: "UX/UI Design",
      description:
        "Créer des interfaces utilisateur intuitives et attractives pour maximiser l'engagement des utilisateurs.",
      bgImage: "https://images.unsplash.com/photo-1523475496153-3d6ccf52f709", // UX/UI - design d'interface, wireframes
    },
    {
      title: "Cloud Computing",
      description:
        "Migrer vos infrastructures sur le cloud pour bénéficier de la scalabilité et de la flexibilité des services cloud.",
      bgImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", // Cloud Computing - nuages et réseaux
    },
    {
      title: "Gestion de Projet Agile",
      description:
        "Appliquer des méthodologies agiles pour assurer la bonne gestion de vos projets et livrer à temps.",
      bgImage: "https://images.unsplash.com/photo-1581091012184-904c3e44f8a5", // Gestion de projet Agile - tableau Kanban, post-its
    },
    {
      title: "Marketing Digital",
      description:
        "Mettre en place des stratégies de marketing digital pour augmenter la visibilité de votre marque.",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475", // Marketing Digital - médias sociaux, publicité en ligne
    },
  ];

  return (
    <Layout>
      <div className="w-1/3 m-2 p-2">
        <NewsLetter />
      </div>
      <div className="w-full h-full flex flex-wrap ">
        {contentArray.map((article) => (
          <ArticlesCard article={article} />
        ))}
      </div>
      <div className="w-1/3 m-2 p-2">
        <PopularCard />
      </div>
    </Layout>
  );
};

export default Community;
