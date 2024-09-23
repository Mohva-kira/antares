// util.js

import { useState } from 'react';

// --------- 1. Recherche ---------
/**
 * Fonction de recherche dans un tableau de données.
 * @param {Array} data - Le tableau de données à rechercher.
 * @param {string} query - La chaîne de recherche.
 * @param {string} key - La clé sur laquelle rechercher.
 * @returns {Array} - Les éléments correspondant à la recherche.
 */
export function searchItems(data, query, key) {
  if (!query) return data;
  const lowerCaseQuery = query.toLowerCase();
  return data.filter(item =>
    item[key] && item[key].toLowerCase().includes(lowerCaseQuery)
  );
}

// --------- 2. Filtrage ---------
/**
 * Fonction de filtrage dans un tableau de données.
 * @param {Array} data - Le tableau de données à filtrer.
 * @param {Object} filters - Les filtres à appliquer.
 * @returns {Array} - Les éléments correspondant aux filtres.
 */
export function filterItems(data, filters) {
  return data.filter(item => {
    return Object.keys(filters).every(key => {
      if (filters[key] === undefined || filters[key] === null) return true;
      if (typeof item[key] === 'string') {
        return item[key].toLowerCase().includes(filters[key].toLowerCase());
      }
      return item[key] === filters[key];
    });
  });
}

// --------- 3. Envoi de Formulaire ---------
export function submitForm(formData, callback) {
  // Simuler un appel API ou traiter les données du formulaire
  // Utiliser un callback pour gérer la réponse ou l'état après soumission
  setTimeout(() => {
    console.log('Form submitted:', formData);
    if (callback) callback(formData);
  }, 1000);
}

// --------- 4. Contrôle des Inputs ---------
export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validateRequired(value) {
  return value.trim() !== '';
}

// --------- 5. Autres Fonctionnalités ---------
// Fonction pour trier des items par un champ spécifique
export function sortItems(items, key, order = 'asc') {
  return items.sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

// Fonction pour paginer les résultats
export function paginate(items, pageSize, pageNumber) {
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

// Fonction pour obtenir le nombre total de pages pour la pagination
export function getTotalPages(totalItems, pageSize) {
  return Math.ceil(totalItems / pageSize);
}

// Fonction pour formater les dates
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Fonction pour vérifier si un nombre est dans une plage donnée
export function isInRange(value, min, max) {
  return value >= min && value <= max;
}
