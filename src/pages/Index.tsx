import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IdentifierSection from '@/components/IdentifierSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CommonInsectsSection from '@/components/CommonInsectsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <IdentifierSection />
          <HowItWorksSection />
          <CommonInsectsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
