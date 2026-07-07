import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-md">
                <span className="text-white"><Phone size={20} /></span>
              </div>
              TecnoFríoCarriel
            </h3>
            <p className="text-gray-400 mb-6">
              Expertos en el cuidado de tus electrodomésticos. Brindamos un servicio rápido, seguro y con garantía en cada trabajo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#equipos" className="hover:text-blue-400 transition-colors">Equipos que Atendemos</a></li>
              <li><a href="#nosotros" className="hover:text-blue-400 transition-colors">Por qué Elegirnos</a></li>
              <li><a href="#testimonios" className="hover:text-blue-400 transition-colors">Testimonios</a></li>
              <li><a href="#reserva" className="hover:text-blue-400 transition-colors">Agendar Visita</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span>Av. Principal 123 y Calle Secundaria, Ciudad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+593 99 304 8158</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>contacto@lineablancapro.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Horario de Atención</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Lunes - Viernes</p>
                  <p className="text-gray-400">08:00 AM - 18:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Sábados</p>
                  <p className="text-gray-400">09:00 AM - 14:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Domingos</p>
                  <p className="text-gray-400">Solo emergencias previas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TecnoFríoCarriel. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
