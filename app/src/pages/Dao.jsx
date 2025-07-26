import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import { useGetDaosQuery } from '../redux/daoService';
import DaoCard from '../components/DaoCard';
import Modal from '../components/Modal';
import Form from '../components/Form';
import { daoField } from '../constants';
import { useCreateDaoMutation } from '../redux/daoService';
import { toast } from 'react-toastify';
import { FaDatabase } from 'react-icons/fa';

const Dao = () => {
  const { data: daosData, isLoading, error } = useGetDaosQuery();
  const [createDao] = useCreateDaoMutation();
  const [showForm, setShowForm] = useState(false);
  
  // États pour les filtres
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    token_symbol: "",
    minMembers: 0,
    maxMembers: Infinity,
  });

  // Gestion des changements de filtre
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name.includes('Members') ? (value === '' ? (name === 'minMembers' ? 0 : Infinity) : parseInt(value)) : value
    }));
  };

  // Filtrage des DAOs
  const filteredDaos = useMemo(() => {
    if (!daosData?.data) return [];
    
    return daosData.data.filter(dao => {
      const attributes = dao.attributes;
      const membersCount = attributes.members_count || 0;
      
      return (
        attributes.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        (filters.status === "" || attributes.status === filters.status) &&
        (filters.token_symbol === "" || attributes.token_symbol?.toLowerCase().includes(filters.token_symbol.toLowerCase())) &&
        membersCount >= filters.minMembers &&
        membersCount <= filters.maxMembers
      );
    });
  }, [daosData, filters]);

  const sendDao = async (data) => {
    try {
      const result = await createDao(data).unwrap();
      toast.success("DAO créé avec succès!");
      setShowForm(false);
    } catch (error) {
      toast.error("Erreur lors de la création du DAO");
      console.error(error);
    }
  };

  if (isLoading) return <Layout><div>Chargement...</div></Layout>;
  if (error) return <Layout><div>Erreur: {error.message}</div></Layout>;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-3xl mb-8 font-bold text-gray-800">Dossiers d'appel d'offre</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Créer un DAO
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filtre à gauche */}
          <div className="w-full lg:w-1/3 h-fit flex flex-col p-4 rounded-lg bg-white shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtres</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom du DAO</label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  placeholder="Rechercher par nom..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Tous les statuts</option>
                  <option value="active">Actif</option>
                  <option value="inactive">Inactif</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Token</label>
                <input
                  type="text"
                  name="token_symbol"
                  value={filters.token_symbol}
                  onChange={handleFilterChange}
                  placeholder="Symbole du token..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de membres</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="minMembers"
                    value={filters.minMembers === 0 ? '' : filters.minMembers}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    min="0"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    name="maxMembers"
                    value={filters.maxMembers === Infinity ? '' : filters.maxMembers}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    min="0"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                onClick={() => setFilters({
                  name: "",
                  status: "",
                  token_symbol: "",
                  minMembers: 0,
                  maxMembers: Infinity,
                })}
                className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="w-full lg:w-2/3">
            {filteredDaos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredDaos.map((dao) => (
                  <DaoCard key={dao.id} dao={dao} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg shadow-lg">
                <FaDatabase className="text-6xl text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun DAO disponible</h3>
                <p className="text-gray-500 mb-6">
                  {daosData?.data?.length === 0 
                    ? "Il n'y a actuellement aucun DAO dans la base de données."
                    : "Aucun DAO ne correspond à vos critères de recherche."}
                </p>
                {daosData?.data?.length === 0 && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Créer le premier DAO
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <Modal isVisible={showForm} setIsVisible={setShowForm}>
          <Form
            fields={daoField}
            setIsVisible={setShowForm}
            post={sendDao}
            title="Créer un nouveau DAO"
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default Dao;