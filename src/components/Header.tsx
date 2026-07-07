import { motion } from 'motion/react';
import { Phone, Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="bg-blue-600 p-1.5 sm:p-2 rounded-lg text-white shrink-0">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-base sm:text-xl font-bold text-gray-900 truncate">TecnoFríoCarriel</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
          <a href="#equipos" className="hover:text-blue-600 transition-colors">Equipos</a>
          <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
          <a href="#testimonios" className="hover:text-blue-600 transition-colors">Testimonios</a>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <a href="tel:+593993048158" className="hidden lg:flex items-center gap-2 text-blue-600 font-semibold">
            <Phone size={20} />
            +593 99 304 8158
          </a>
          <a href="#reserva" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg font-medium transition-colors shadow-lg shadow-blue-200 whitespace-nowrap shrink-0">
            Agendar Visita
          </a>
        </div>
      </div>
    </header>
  );
}
