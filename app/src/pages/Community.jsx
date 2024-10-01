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
      bgImage:
        "https://www.letecode.com/storage/articles/June2021/I1PF2FjDhjEygfb5CM6d.jpeg", // Développement Web - bureau avec code
    },
    {
      title: "Optimisation SEO",
      description:
        "Améliorer le référencement de votre site pour attirer plus de trafic organique à travers des stratégies SEO avancées.",
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
      title: "Cybersécurité",
      description:
        "Mettre en place des solutions de sécurité informatique pour protéger vos données et celles de vos clients.",
      bgImage: "https://unsplash.com/photos/ivfeOa1KTQU", // Cybersécurité - protection des données
    },
    {
      title: "Analyse de Données",
      description:
        "Exploiter la puissance des données pour des insights business et améliorer la prise de décision.",
      bgImage: "https://unsplash.com/photos/qwtCeJ5cLYs", // Analyse de données - graphiques et statistiques
    },
    {
      title: "Mobile Development",
      description:
        "Concevoir des applications mobiles performantes et fluides pour iOS et Android.",
      bgImage: "https://unsplash.com/photos/s9CC2SKySJM", // Développement mobile - téléphone avec code
    },
    {
      title: "UX/UI Design",
      description:
        "Créer des interfaces utilisateur intuitives et attractives pour maximiser l'engagement des utilisateurs.",
      bgImage: "https://unsplash.com/photos/2zZp12ChxhU", // UX/UI Design - wireframes
    },
    {
      title: "Cloud Computing",
      description:
        "Migrer vos infrastructures sur le cloud pour bénéficier de la scalabilité et de la flexibilité des services cloud.",
      bgImage: "https://unsplash.com/photos/YIW0bCuU7zU", // Cloud Computing - nuages et infrastructure cloud
    },
    {
      title: "Gestion de Projet Agile",
      description:
        "Appliquer des méthodologies agiles pour assurer la bonne gestion de vos projets et livrer à temps.",
      bgImage: "https://unsplash.com/photos/oLqUgxagwHQ", // Gestion de Projet Agile - tableau Kanban
    },
    {
      title: "Marketing Digital",
      description:
        "Mettre en place des stratégies de marketing digital pour augmenter la visibilité de votre marque.",
      bgImage: "https://unsplash.com/photos/8K62atzbulI", // Marketing Digital - publicité en ligne, réseaux sociaux
    },
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
