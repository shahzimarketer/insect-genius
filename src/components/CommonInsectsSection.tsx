import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const commonInsects = [
  {
    name: "Honeybee",
    scientificName: "Apis mellifera",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
    description: "Essential pollinators responsible for one-third of the food we eat.",
    category: "Beneficial"
  },
  {
    name: "Ladybug",
    scientificName: "Coccinellidae",
    image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=400&h=300&fit=crop",
    description: "Natural pest controllers that feed on aphids and other garden pests.",
    category: "Beneficial"
  },
  {
    name: "Dragonfly",
    scientificName: "Anisoptera",
    image: "https://images.unsplash.com/photo-1601284406684-79dad52c0554?w=400&h=300&fit=crop",
    description: "Ancient insects and skilled hunters that control mosquito populations.",
    category: "Beneficial"
  },
  {
    name: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=300&fit=crop",
    description: "Famous for their incredible multi-generational migration journey.",
    category: "Pollinator"
  },
  {
    name: "Firefly",
    scientificName: "Lampyridae",
    image: "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?w=400&h=300&fit=crop",
    description: "Bioluminescent beetles that light up summer nights.",
    category: "Nocturnal"
  },
  {
    name: "Praying Mantis",
    scientificName: "Mantodea",
    image: "https://images.unsplash.com/photo-1585155967849-91c736589c84?w=400&h=300&fit=crop",
    description: "Master predators with remarkable hunting abilities and 3D vision.",
    category: "Predator"
  }
];

const CommonInsectsSection: React.FC = () => {
  return (
    <section id="common-insects" className="py-20 md:py-32 bg-forest-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Discover Common Insects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore some of the most fascinating insects you might encounter in your garden, 
            backyard, or during nature walks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {commonInsects.map((insect, index) => (
            <article
              key={index}
              className="group bg-card-gradient rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insect.image}
                  alt={`${insect.name} - ${insect.scientificName}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                    {insect.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                  {insect.name}
                </h3>
                <p className="text-sm text-primary italic mb-3">{insect.scientificName}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {insect.description}
                </p>
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="nature" size="lg" asChild>
            <a href="#identifier">
              Identify Your Own Insect
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommonInsectsSection;
