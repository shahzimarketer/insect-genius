import React from 'react';
import { Upload, Cpu, FileText, Share2, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload Your Photo",
    description: "Take or upload a clear photo of any animal you want to identify. Our AI works best with well-lit, focused images.",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced machine learning model analyzes the image, comparing it against our database of over 5,000 animal species.",
  },
  {
    icon: FileText,
    title: "Get Detailed Results",
    description: "Receive comprehensive information including species name, habitat, diet, behavior, conservation status, and fascinating facts.",
  },
  {
    icon: Share2,
    title: "Learn & Share",
    description: "Expand your wildlife knowledge and share your discoveries with friends and fellow nature enthusiasts.",
  },
];

const AnimalHowItWorksSection: React.FC = () => {
  return (
    <section id="how-animal-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How Our Animal Identifier Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Using cutting-edge AI technology trained on millions of wildlife images,
            our tool delivers accurate identification in seconds.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
                )}
                
                <div className="relative bg-card-gradient rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
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

          {/* Benefits */}
          <div className="mt-16 glass rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-8">
              Why Use Our Animal Identifier?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Accurate AI-powered results",
                "Extensive species database",
                "Conservation information",
                "Completely free to use",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimalHowItWorksSection;
