import React from 'react';
import { PawPrint, ArrowRight, Camera, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroAnimal from '@/assets/hero-animal.jpg';

const AnimalHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAnimal}
          alt="Majestic wildlife in natural habitat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <PawPrint className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Animal Identification
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-slide-up">
            Identify Any{' '}
            <span className="text-accent">Animal</span>{' '}
            in Seconds
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up animation-delay-100">
            Upload a photo and instantly discover detailed information about any animal 
            – from common pets to exotic wildlife. Learn about species, habitats, 
            behaviors, and conservation status.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-200">
            <Button variant="hero" size="lg" asChild>
              <a href="#animal-identifier">
                <Camera className="w-5 h-5 mr-2" />
                Identify Animal Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#how-animal-works">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in animation-delay-300">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Get accurate identification in under 3 seconds
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">5,000+ Species</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive database of mammals, birds, and more
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Rich Details</h3>
              <p className="text-sm text-muted-foreground">
                Habitat, diet, behavior & conservation info
              </p>
            </div>
          </div>

          {/* Internal Link */}
          <div className="mt-12 animate-fade-in animation-delay-400">
            <p className="text-muted-foreground">
              Looking for something smaller? Try our{' '}
              <Link to="/" className="text-primary hover:underline font-medium">
                Insect Identifier
              </Link>{' '}
              for bugs and insects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalHeroSection;
