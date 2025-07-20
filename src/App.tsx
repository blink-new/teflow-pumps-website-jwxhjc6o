import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <IndustriesSection />
        <ContactSection />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;