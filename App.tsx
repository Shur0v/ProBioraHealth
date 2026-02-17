
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductFamily from './components/ProductFamily';
import NextGenSection from './components/NextGenSection';
import ScienceOfMouth from './components/ScienceOfMouth';
import FeaturesGrid from './components/FeaturesGrid';
import RoutineSteps from './components/RoutineSteps';
import SubscriptionValue from './components/SubscriptionValue';
import ExpertSection from './components/ExpertSection';
import ComparisonSection from './components/ComparisonSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AISupport from './components/AISupport';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      <Navbar isScrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        
        <div className="bg-probiora-50/30">
          <ProductFamily />
        </div>

        <NextGenSection />
        <ScienceOfMouth />
        
        <div className="bg-white">
          <FeaturesGrid />
        </div>

        <RoutineSteps />
        <SubscriptionValue />
        
        <ExpertSection />
        
        <ComparisonSection />

        <Testimonials />
        <FAQSection />
      </main>

      <Footer />
      <AISupport />
    </div>
  );
};

export default App;
