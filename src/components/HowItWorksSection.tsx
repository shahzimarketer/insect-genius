import React from 'react';
import { Camera, Cpu, BookOpen, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Upload Your Photo",
    description: "Take a clear photo of any insect you want to identify. The clearer the image, the more accurate the identification.",
    color: "primary"
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced machine learning model analyzes the image, comparing it against thousands of insect species in our database.",
    color: "moss"
  },
  {
    icon: BookOpen,
    title: "Get Detailed Results",
    description: "Receive comprehensive information including species name, habitat, behavior, diet, and fascinating facts about the insect.",
    color: "leaf"
  },
  {
    icon: CheckCircle,
    title: "Learn & Explore",
    description: "Expand your knowledge of the insect world. Save your discoveries and learn about the crucial roles insects play in our ecosystem.",
    color: "accent"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Identifying insects has never been easier. Our simple four-step process 
            delivers accurate results in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative bg-card-gradient rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
