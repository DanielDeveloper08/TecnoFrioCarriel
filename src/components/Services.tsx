import { motion } from 'motion/react';
import { ShoppingCart, PenTool, Settings } from 'lucide-react';

const services = [
  {
    title: 'Venta',
    description: 'Encuentra los mejores electrodomésticos con asesoría experta.',
    icon: ShoppingCart,
    features: ['Equipos nuevos', 'Asesoría personalizada', 'Equipos de marcas reconocidas'],
    color: 'blue'
  },
  {
    title: 'Instalación',
    description: 'Instalamos tus equipos bajo los más altos estándares de calidad.',
    icon: PenTool,
    features: ['Instalación profesional', 'Configuración', 'Puesta en marcha'],
    color: 'orange'
  },
  {
    title: 'Mantenimiento',
    description: 'Alarga la vida útil de tus electrodomésticos con nuestro servicio.',
    icon: Settings,
    features: ['Preventivo', 'Correctivo', 'Limpieza', 'Diagnóstico', 'Reparaciones'],
    color: 'green'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">Ofrecemos soluciones integrales para todos tus electrodomésticos de línea blanca, desde la compra hasta el mantenimiento.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                  service.color === 'orange' ? 'bg-orange-100 text-orange-500' : 
                  'bg-green-100 text-green-600'}`}
              >
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="mt-1 bg-gray-200 rounded-full p-0.5">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500
                ${service.color === 'blue' ? 'bg-blue-600' : 
                  service.color === 'orange' ? 'bg-orange-500' : 
                  'bg-green-600'}`} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
