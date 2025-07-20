import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProductHighlight from './components/ProductHighlight'
import TestimonialsSection from './components/TestimonialsSection'
import IndustriesSection from './components/IndustriesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductHighlight />
        <TestimonialsSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App