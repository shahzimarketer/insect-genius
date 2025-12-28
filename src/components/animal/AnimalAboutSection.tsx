import React from 'react';
import { PawPrint, Target, Database, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Target,
    title: "Precision AI",
    description: "Our model is trained on millions of wildlife images for accurate identification across 5,000+ species.",
  },
  {
    icon: Database,
    title: "Rich Database",
    description: "Access comprehensive data on habitats, diets, behaviors, and conservation status for every identified animal.",
  },
  {
    icon: Heart,
    title: "Conservation Focus",
    description: "Learn about threatened species and understand the importance of wildlife conservation efforts.",
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Whether you're a wildlife enthusiast, student, or professional, our tool provides valuable insights.",
  },
];

const AnimalAboutSection: React.FC = () => {
  return (
    <section id="about-animal" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <PawPrint className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  About Animal Identifier
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Discover the Wild World Around You
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our Animal Identifier combines cutting-edge artificial intelligence with 
                comprehensive wildlife databases to help you identify and learn about 
                animals from around the globe. From African savannas to Arctic tundras, 
                from your backyard to the deep ocean.
              </p>
              
              <p className="text-muted-foreground mb-8">
                We believe that understanding wildlife is the first step toward protecting it. 
                Each identification comes with conservation status information to raise awareness 
                about threatened species and the importance of biodiversity.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/" 
                  className="text-primary hover:underline font-medium"
                >
                  ← Try Insect Identifier
                </Link>
                <span className="text-muted-foreground">|</span>
                <a 
                  href="#animal-identifier" 
                  className="text-accent hover:underline font-medium"
                >
                  Start Identifying Animals →
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card-gradient rounded-xl p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalAboutSection;
