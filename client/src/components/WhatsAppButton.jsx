import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '22320292040'; // Numéro sans le +
  const message = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 z-50 group animate-bounce hover:animate-none"
      aria-label="Contacter Antarès RH sur WhatsApp"
      style={{
        boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)'
      }}
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton

