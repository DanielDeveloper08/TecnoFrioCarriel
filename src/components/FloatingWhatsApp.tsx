import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/593993048158?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20t%C3%A9cnicos." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center animate-bounce-slow group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-10 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Contáctanos!
      </span>
    </a>
  );
}
