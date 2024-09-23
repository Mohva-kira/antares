import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="widget border rounded-2xl bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">Recommandations</h3>
      <ul className="list-disc pl-5">
        {recommendations.map((rec, index) => (
          <li key={index} className="mb-2">
            <blockquote className="italic">
              "{rec.text}"
            </blockquote>
            <footer className="text-sm text-gray-600">
              - {rec.author}, {rec.position}
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
