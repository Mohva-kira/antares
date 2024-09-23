import React from "react";

const PopularCard = () => {
  return (
    <div className="widget popular-articles w-full max-w-md mx-auto p-4 bg-white border rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Articles Populaires</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="/article-populaire-1"
            className="text-blue-500 hover:underline hover:text-blue-600 transition-all">
            5 Conseils pour la Gestion de Projet Agile
          </a>
        </li>
        <li>
          <a
            href="/article-populaire-2"
            className="text-blue-500 hover:underline hover:text-blue-600 transition-all">
            Optimisez votre Productivité avec React.js
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PopularCard;
