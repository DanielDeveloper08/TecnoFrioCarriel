import { motion } from 'motion/react';
import { Calendar, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <CheckCircle2 size={16} />
              Técnicos certificados
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Expertos en Venta, Instalación y <span className="text-blue-600">Mantenimiento de Línea Blanca</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Atendemos tu hogar con técnicos especializados. Servicio rápido, garantía y atención a domicilio para todos tus electrodomésticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reserva" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1">
                <Calendar size={20} />
                Agendar visita
              </a>
              <a href="#reserva" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md">
                <FileText size={20} />
                Solicitar cotización
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Más de 2,000 clientes satisfechos</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-3xl transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
              alt="Técnico reparando electrodoméstico" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-full object-center"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">100% Garantizado</p>
                  <p className="text-sm text-gray-500">En todos nuestros trabajos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
