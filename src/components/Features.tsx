import { motion } from 'motion/react';
import { Award, Clock, ShieldCheck, Zap, DollarSign, CalendarDays, ThumbsUp, Wrench, MessageSquare, Home } from 'lucide-react';

const benefits = [
  { text: 'Técnicos certificados', icon: Award },
  { text: 'Atención a domicilio', icon: Home },
  { text: 'Garantía en trabajos', icon: ShieldCheck },
  { text: 'Repuestos originales', icon: Wrench },
  { text: 'Atención rápida', icon: Zap },
  { text: 'Precios competitivos', icon: DollarSign },
  { text: 'Más de 10 años de experiencia', icon: ThumbsUp },
];

const steps = [
  { title: 'Agenda tu visita', desc: 'Contáctanos por formulario o WhatsApp.', icon: CalendarDays },
  { title: 'Confirmación', desc: 'Un técnico confirma tu cita rápidamente.', icon: MessageSquare },
  { title: 'Visita a domicilio', desc: 'Revisamos tu equipo en tu hogar.', icon: Home },
  { title: 'Solución garantizada', desc: 'Reparamos o instalamos con garantía.', icon: ShieldCheck },
];

export default function Features() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nos distinguimos por nuestro profesionalismo, puntualidad y el compromiso de dejar tus equipos funcionando como nuevos.
            </p>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-500 p-2 rounded-lg">
                    <benefit.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-10" />
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="Repuestos y herramientas" 
              className="rounded-3xl shadow-xl relative z-10 object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro proceso de trabajo</h2>
          <p className="text-lg text-gray-600">Un flujo sencillo y transparente para que no te preocupes por nada.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center text-blue-600 mb-6 relative">
                <step.icon size={40} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
