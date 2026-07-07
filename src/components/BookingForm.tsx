import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="reserva" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-blue-600 p-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserva tu Visita Técnica</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Completa el formulario y nos comunicaremos contigo a la brevedad para confirmar tu cita.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada con Éxito!</h3>
                <p className="text-gray-600 text-lg mb-8">Hemos recibido tus datos. Un asesor se comunicará contigo en los próximos minutos para confirmar la visita.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">Datos Personales</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Ej. Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono / Celular *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Ej. 099 123 4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="tu@correo.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Tu ciudad" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Dirección completa *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Calle principal, secundaria y número de casa" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4 mt-8">Detalles del Servicio</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de servicio *</label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                        <option value="">Selecciona una opción</option>
                        <option value="venta">Venta / Cotización</option>
                        <option value="instalacion">Instalación</option>
                        <option value="mantenimiento">Mantenimiento / Reparación</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Equipo *</label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                        <option value="">Selecciona el equipo</option>
                        <option value="aire">Aire acondicionado</option>
                        <option value="lavadora">Lavadora</option>
                        <option value="secadora">Secadora</option>
                        <option value="refrigeradora">Refrigeradora</option>
                        <option value="cocina">Cocina / Horno</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Marca del equipo *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Ej. Samsung, LG, Whirlpool..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Modelo (Opcional)</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Modelo del equipo" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del problema o necesidad *</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none" placeholder="Describe brevemente qué necesitas o qué falla presenta el equipo..."></textarea>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4 mt-8">Preferencia de Horario</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fecha deseada *</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hora preferida *</label>
                      <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white">
                        <option value="">Selecciona un horario</option>
                        <option value="manana">Mañana (08:00 - 12:00)</option>
                        <option value="tarde">Tarde (13:00 - 18:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                    <Send size={20} />
                    Reservar visita técnica
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Al enviar este formulario aceptas nuestra política de privacidad.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
