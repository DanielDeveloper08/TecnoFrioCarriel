import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Atienden a domicilio?',
    a: 'Sí, todos nuestros servicios de instalación y mantenimiento se realizan directamente en tu domicilio para tu mayor comodidad y seguridad de los equipos.'
  },
  {
    q: '¿Qué marcas reparan?',
    a: 'Nuestros técnicos están capacitados para reparar y dar mantenimiento a las principales marcas del mercado como Samsung, LG, Whirlpool, Mabe, Electrolux, Bosch, Indurama, entre otras.'
  },
  {
    q: '¿Cuánto cuesta la visita técnica?',
    a: 'La visita técnica tiene un valor estándar para evaluación y diagnóstico. Sin embargo, si decides realizar la reparación o mantenimiento con nosotros, el costo de la visita se descuenta del valor total del trabajo.'
  },
  {
    q: '¿Ofrecen garantía por los trabajos?',
    a: '¡Absolutamente! Todos nuestros servicios de instalación y reparación cuentan con garantía por escrito que va desde 3 hasta 12 meses, dependiendo del tipo de trabajo y repuestos utilizados.'
  },
  {
    q: '¿Trabajan fines de semana?',
    a: 'Sí, trabajamos de lunes a sábado en horario normal, y atendemos emergencias los días domingos con previo aviso y un recargo adicional por servicio de fin de semana.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600">Resolvemos tus dudas principales sobre nuestro servicio.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
