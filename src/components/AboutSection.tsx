import React from 'react';
import { Leaf, Globe, BookOpen, Heart } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "10,000+ Species",
    description: "Our comprehensive database covers insects from every continent, constantly updated with new species data."
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Each identification comes with detailed information about behavior, habitat, diet, and ecological importance."
  },
  {
    icon: Heart,
    title: "Conservation Focus",
    description: "Learn about endangered species and how you can contribute to insect conservation efforts."
  },
  {
    icon: Leaf,
    title: "Ecosystem Awareness",
    description: "Understand the vital roles insects play in pollination, decomposition, and food chains."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Why Insects Matter
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Insects are the unsung heroes of our planet. Comprising over 80% of all known animal species, 
              these remarkable creatures are essential to virtually every ecosystem on Earth. From pollinating 
              our crops to decomposing organic matter, insects provide services worth billions of dollars annually.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to bridge the gap between humans and the insect world. By making identification 
              accessible and educational, we hope to foster appreciation for these incredible creatures and 
              inspire conservation efforts to protect declining insect populations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card-gradient rounded-3xl p-8 md:p-12 border border-border shadow-elevated">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              The Insect World in Numbers
            </h3>
            
            <div className="space-y-8">
              <div className="text-center p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="text-5xl font-serif font-bold text-primary mb-2">1 Million+</p>
                <p className="text-muted-foreground">Known insect species on Earth</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-muted/30 border border-border">
                  <p className="text-3xl font-serif font-bold text-foreground mb-1">80%</p>
                  <p className="text-sm text-muted-foreground">Of flowering plants pollinated by insects</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-muted/30 border border-border">
                  <p className="text-3xl font-serif font-bold text-foreground mb-1">10 Quintillion</p>
                  <p className="text-sm text-muted-foreground">Estimated insects alive at any time</p>
                </div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="text-4xl font-serif font-bold text-primary mb-2">$57 Billion</p>
                <p className="text-muted-foreground">Annual value of insect pollination to US agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
