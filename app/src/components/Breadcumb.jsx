import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcumb = ({ customPath = null }) => {
  const location = useLocation();
  const pathnames = customPath ? customPath : location.pathname.split('/').filter(x => x);

  // Configuration des icônes et labels pour chaque route
  const routeConfig = {
    'dashboard': { label: 'Dashboard', icon: '📊' },
    'cvs': { label: 'CVs', icon: '📄' },
    'offers': { label: 'Offres', icon: '💼' },
    'employers': { label: 'Employeurs', icon: '🏢' },
    'dao': { label: 'DAOs', icon: '🔗' },
    'profile': { label: 'Profil', icon: '👤' },
    'settings': { label: 'Paramètres', icon: '⚙️' },
    'bulletins': { label: 'Bulletins', icon: '📊' },
    'companies': { label: 'Entreprises', icon: '🏭' },
  };

  const formatLabel = (path) => {
    // Si c'est un ID numérique, retourner "Détails"
    if (!isNaN(path)) return 'Détails';
    
    // Utiliser la configuration ou formater le nom
    return routeConfig[path]?.label || 
           path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  const getIcon = (path) => {
    return routeConfig[path]?.icon || '📁';
  };

  return (
    <nav className="flex items-center py-4 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
        {/* Home Link */}
        <Link 
          to="/" 
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <FaHome className="w-5 h-5" />
        </Link>

        {/* Path segments */}
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={index}>
              {/* Separator */}
              <FaChevronRight className="w-3 h-3 text-gray-900 mx-2" />
              
              {/* Breadcrumb item */}
              {isLast ? (
                <span className="flex items-center text-blue-600 font-medium">
                  <span className="text-sm mr-2">{getIcon(path)}</span>
                  <span className="text-sm">{formatLabel(path)}</span>
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="text-sm mr-2">{getIcon(path)}</span>
                  <span className="text-sm hover:underline">{formatLabel(path)}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcumb;