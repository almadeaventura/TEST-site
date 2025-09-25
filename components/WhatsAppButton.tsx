
import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = "Hola, estoy interesado en sus servicios." }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
