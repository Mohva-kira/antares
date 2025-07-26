import React from 'react';
import { FaUsers, FaCoins, FaCalendarAlt, FaLink } from 'react-icons/fa';

const DaoCard = ({ dao }) => {
  const attributes = dao.attributes;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{attributes.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{attributes.description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center">
          <FaUsers className="text-blue-500 mr-2" />
          <span className="text-sm text-gray-700">{attributes.members_count || 0} membres</span>
        </div>

        <div className="flex items-center">
          <FaCoins className="text-yellow-500 mr-2" />
          <span className="text-sm text-gray-700">{attributes.token_symbol || 'N/A'}</span>
        </div>

        <div className="flex items-center">
          <FaCalendarAlt className="text-green-500 mr-2" />
          <span className="text-sm text-gray-700">
            {new Date(attributes.createdAt).toLocaleDateString('fr-FR')}
          </span>
        </div>

        {attributes.website && (
          <div className="flex items-center">
            <FaLink className="text-purple-500 mr-2" />
            <a 
              href={attributes.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 truncate"
            >
              {attributes.website}
            </a>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t flex space-x-2 border-gray-200">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          attributes.status 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {attributes.status ? 'Actif' : 'Inactif'}
        </span>

        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          attributes.createdAt
            ? 'bg-blue-100 text-blue-800'
            : 'bg-gray-100 text-gray-800'
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {new Date(attributes.createdAt).toLocaleDateString('fr-FR')}
        </span>
      </div>
    </div>
  );
};

export default DaoCard;
