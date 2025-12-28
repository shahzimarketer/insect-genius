import React from 'react';
import { PawPrint, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const commonAnimals = [
  {
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    class: "Mammalia",
    description: "The largest land animal on Earth, known for their intelligence and complex social structures.",
    funFact: "Elephants can recognize themselves in mirrors - a trait shared by only a few species.",
  },
  {
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    class: "Mammalia",
    description: "The most numerous tiger subspecies, found primarily in India and known for their distinctive orange coat.",
    funFact: "No two tigers have the same stripe pattern - they're like fingerprints!",
  },
  {
    name: "Bottlenose Dolphin",
    scientificName: "Tursiops truncatus",
    class: "Mammalia",
    description: "Highly intelligent marine mammals known for their playful behavior and complex communication.",
    funFact: "Dolphins sleep with one eye open and half their brain awake to watch for predators.",
  },
  {
    name: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    class: "Aves",
    description: "The national bird of the United States, known for its white-feathered head and powerful talons.",
    funFact: "Bald eagles can see fish from a mile away and dive at 100 mph to catch them.",
  },
  {
    name: "Gray Wolf",
    scientificName: "Canis lupus",
    class: "Mammalia",
    description: "Highly social apex predators that live in family packs and communicate through howls.",
    funFact: "A wolf pack can cover 30 miles in a single day while hunting.",
  },
  {
    name: "Green Sea Turtle",
    scientificName: "Chelonia mydas",
    class: "Reptilia",
    description: "Large sea turtles found in tropical and subtropical waters, known for their long migrations.",
    funFact: "Female sea turtles return to the exact beach where they hatched to lay their own eggs.",
  },
];

const CommonAnimalsSection: React.FC = () => {
  return (
    <section id="common-animals" className="py-20 md:py-32 bg-savanna-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Popular Animals to Identify
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore some of the most commonly identified animals and learn fascinating 
            facts about wildlife from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {commonAnimals.map((animal, index) => (
            <article
              key={index}
              className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <PawPrint className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {animal.class}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                {animal.name}
              </h3>
              <p className="text-sm text-accent italic mb-3">{animal.scientificName}</p>
              <p className="text-muted-foreground mb-4">{animal.description}</p>
              
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-accent">Fun fact:</span>{' '}
                  {animal.funFact}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Cross-linking section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Explore More Wildlife Tools
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI-powered identification tools can help you learn about all types of creatures. 
              From the tiniest insects to the largest mammals.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Try Our Insect Identifier
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonAnimalsSection;
