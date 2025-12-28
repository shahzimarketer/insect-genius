import React from 'react';
import AnimalSEOHead from '@/components/animal/AnimalSEOHead';
import Header from '@/components/Header';
import AnimalHeroSection from '@/components/animal/AnimalHeroSection';
import AnimalIdentifierSection from '@/components/animal/AnimalIdentifierSection';
import AnimalHowItWorksSection from '@/components/animal/AnimalHowItWorksSection';
import CommonAnimalsSection from '@/components/animal/CommonAnimalsSection';
import AnimalAboutSection from '@/components/animal/AnimalAboutSection';
import AnimalFooter from '@/components/animal/AnimalFooter';

const AnimalIdentifier: React.FC = () => {
  return (
    <>
      <AnimalSEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <AnimalHeroSection />
          <AnimalIdentifierSection />
          <AnimalHowItWorksSection />
          <CommonAnimalsSection />
          <AnimalAboutSection />
        </main>
        <AnimalFooter />
      </div>
    </>
  );
};

export default AnimalIdentifier;
