import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María Fernández',
    role: 'Ama de casa',
    text: 'Vinieron a reparar mi lavadora el mismo día que llamé. El técnico fue muy amable, me explicó el problema y el precio me pareció justo. ¡Recomendados!',
    image: 'https://i.pravatar.cc/150?img=43'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Propietario de Restaurante',
    text: 'Contraté la instalación de dos aires acondicionados para mi negocio. Trabajo limpio, rápido y profesional. Sin duda los volveré a llamar para los mantenimientos.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Laura Gómez',
    role: 'Arquitecta',
    text: 'Excelente servicio. Solucionaron un problema con el refrigerador que otros técnicos no pudieron encontrar. Te dan garantía por escrito, lo cual da mucha tranquilidad.',
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600">La satisfacción de nuestros clientes es nuestra mejor carta de presentación.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col h-full"
            >
              <div className="flex text-orange-400 mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 grow">"{testimony.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimony.image} alt={testimony.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimony.name}</h4>
                  <p className="text-sm text-gray-500">{testimony.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
