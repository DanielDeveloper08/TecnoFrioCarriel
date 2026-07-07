import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const appliances = [
  { name: 'Aire acondicionado', image: 'https://images.pexels.com/photos/30962631/pexels-photo-30962631.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
  { name: 'Lavadora', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Secadora', image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Refrigeradora', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Cocina', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Horno', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Campana extractora', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Lavavajillas', image: 'https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?q=80&w=400&h=300&auto=format&fit=crop' },
  { name: 'Calentador de agua', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=300&auto=format&fit=crop' },
];

export default function Appliances() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section id="equipos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Equipos que atendemos</h2>
          <p className="text-lg text-gray-600">Contamos con experiencia técnica en una amplia variedad de electrodomésticos del hogar.</p>
        </div>
        
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex cursor-grab active:cursor-grabbing">
            {appliances.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 mr-6"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 group h-full">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <span className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
