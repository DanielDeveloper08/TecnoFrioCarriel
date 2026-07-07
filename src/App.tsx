import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Appliances from './components/Appliances';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Appliances />
        <Features />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
