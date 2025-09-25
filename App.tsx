
import React from 'react';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Replace with your actual WhatsApp number including country code without '+' or '00'
  const whatsappNumber = "5491112345678"; 

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        <div className="mb-8 w-full max-w-sm md:max-w-md">
          <img 
            src="/hero-image.jpg" 
            alt="Dos personas haciendo paracaidismo tándem sobre una zona costera."
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>

        <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          PRÓXIMAMENTE
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
          Sitio en Construcción
        </h1>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          Estamos trabajando intensamente para traerte una experiencia increíble. ¡Mantente atento!
        </p>
        <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
      </div>
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </div>
  );
};

export default App;
