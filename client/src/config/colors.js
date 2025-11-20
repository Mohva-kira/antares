// Configuration des couleurs du thème Antarès RH
// Ces couleurs peuvent être facilement modifiées pour changer l'apparence globale

export const colors = {
  // Couleur principale
  primary: '#2529d8',
  primaryHover: '#1d20b0',
  primaryLight: '#e0e1f5',
  
  // Couleurs de fond
  background: '#ffffff',
  backgroundLight: '#f8f9fa',
  backgroundGray: '#f3f4f6',
  
  // Couleurs de texte
  textPrimary: '#1f2937',
  textSecondary: '#6b7280',
  textLight: '#9ca3af',
  
  // Couleurs de bordure
  border: '#e5e7eb',
  borderFocus: '#2529d8',
  
  // Couleurs d'état
  success: '#10b981',
  successHover: '#059669',
  error: '#ef4444',
  errorHover: '#dc2626',
  warning: '#f59e0b',
  info: '#3b82f6',
  
  // Couleurs neutres
  white: '#ffffff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  
  // Couleurs pour modals et overlays
  overlay: 'rgba(0, 0, 0, 0.75)',
  modalBackground: '#ffffff',
};

// Styles prédéfinis pour les composants
export const styles = {
  // Styles pour les inputs
  input: {
    base: `w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-[#2529d8] focus:ring-2 focus:ring-[#2529d8] focus:ring-opacity-20 transition-all duration-200`,
    error: `w-full px-4 py-3 rounded-lg bg-white border border-red-500 placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20 transition-all duration-200`,
  },
  
  // Styles pour les boutons
  button: {
    primary: `px-6 py-3 bg-[#2529d8] text-white rounded-lg hover:bg-[#1d20b0] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#2529d8] focus:ring-opacity-50`,
    secondary: `px-6 py-3 bg-white text-[#2529d8] border-2 border-[#2529d8] rounded-lg hover:bg-[#2529d8] hover:text-white transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#2529d8] focus:ring-opacity-50`,
    success: `px-6 py-3 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-opacity-50`,
    danger: `px-6 py-3 bg-[#ef4444] text-white rounded-lg hover:bg-[#dc2626] transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:ring-opacity-50`,
    outline: `px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50`,
  },
  
  // Styles pour les formulaires
  form: {
    container: `bg-white rounded-lg shadow-sm border border-gray-200 p-6`,
    section: `bg-white rounded-lg p-6`,
    label: `block text-sm font-semibold text-gray-700 mb-2`,
  },
  
  // Styles pour les modals
  modal: {
    overlay: `fixed inset-0 bg-black bg-opacity-75 transition-opacity z-40`,
    container: `fixed inset-0 z-50 overflow-y-auto`,
    content: `bg-white rounded-lg shadow-xl transition-all transform relative`,
    header: `px-6 py-4 border-b border-gray-200`,
    body: `px-6 py-4`,
    footer: `px-6 py-4 border-t border-gray-200 bg-gray-50`,
  },
};

export default colors;

