import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import InsectResult, { InsectData } from './InsectResult';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

// Mock identification function - will be replaced with actual AI API
const mockIdentifyInsect = (): Promise<InsectData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const insects: InsectData[] = [
        {
          name: "Monarch Butterfly",
          scientificName: "Danaus plexippus",
          family: "Nymphalidae",
          order: "Lepidoptera",
          description: "The Monarch butterfly is one of the most recognizable and beloved insects in North America. Known for their striking orange and black wing patterns, these butterflies are famous for their incredible multi-generational migration spanning thousands of miles between Canada and Mexico.",
          habitat: "Open meadows, fields, gardens, and areas with milkweed plants. They prefer sunny areas with access to nectar-producing flowers.",
          diet: "Adults feed on nectar from various flowers including milkweed, asters, and goldenrod. Caterpillars feed exclusively on milkweed plants.",
          lifespan: "2-6 weeks for most generations, up to 8 months for the migratory generation",
          size: "3.5-4 inches wingspan",
          dangerLevel: "harmless",
          interestingFacts: [
            "Monarchs can travel up to 3,000 miles during their annual migration to Mexico.",
            "Their bright orange coloring is a warning to predators that they are toxic due to the milkweed they consume as caterpillars.",
            "A single monarch can fly up to 100 miles in a single day during migration.",
            "They use Earth's magnetic field and the position of the sun to navigate during migration."
          ],
          distribution: "North America, from southern Canada to central Mexico. Also found in Australia, New Zealand, and various Pacific islands.",
          seasonalActivity: "Active from spring through fall in temperate regions. Migrates south in autumn and north in spring.",
          confidence: 0.94
        },
        {
          name: "Common House Spider",
          scientificName: "Parasteatoda tepidariorum",
          family: "Theridiidae",
          order: "Araneae",
          description: "The Common House Spider is one of the most frequently encountered spiders in human dwellings worldwide. Despite their somewhat alarming appearance, these spiders are beneficial predators that help control pest insect populations in homes.",
          habitat: "Indoor environments including homes, garages, sheds, and other buildings. They prefer corners, window frames, and undisturbed areas.",
          diet: "Small insects and other arthropods including flies, mosquitoes, ants, and other spiders that become trapped in their webs.",
          lifespan: "1-2 years",
          size: "5-8mm body length, leg span up to 25mm",
          dangerLevel: "harmless",
          interestingFacts: [
            "A single house spider can catch and consume over 2,000 insects per year.",
            "They build tangled, irregular webs called cobwebs, which are highly effective at catching prey.",
            "Female house spiders can produce over 400 eggs in a single egg sac.",
            "They rarely bite humans and their venom is not medically significant."
          ],
          distribution: "Cosmopolitan distribution, found on every continent except Antarctica.",
          seasonalActivity: "Active year-round indoors. More visible in autumn when males search for mates.",
          confidence: 0.89
        },
        {
          name: "Praying Mantis",
          scientificName: "Mantis religiosa",
          family: "Mantidae",
          order: "Mantodea",
          description: "The Praying Mantis is a remarkable predatory insect known for its distinctive posture and lightning-fast hunting abilities. Named for its prayer-like stance with folded front legs, this insect is a master ambush predator.",
          habitat: "Gardens, meadows, forests, and shrublands. They prefer areas with abundant vegetation that provides both camouflage and prey.",
          diet: "Carnivorous, feeding on a wide variety of insects including moths, crickets, grasshoppers, and even small vertebrates like lizards and hummingbirds.",
          lifespan: "10-12 months",
          size: "2-5 inches in length",
          dangerLevel: "harmless",
          interestingFacts: [
            "They can rotate their heads 180 degrees to scan their surroundings for prey.",
            "Female mantises sometimes eat their mates during or after mating, a behavior called sexual cannibalism.",
            "They have a single ear located on their chest that detects ultrasonic frequencies to avoid bat predation.",
            "Mantises are the only insects that can see in 3D, using stereoscopic vision to accurately judge distance to prey."
          ],
          distribution: "Originally from Europe and Africa, now found worldwide in temperate and tropical regions.",
          seasonalActivity: "Most active during warm months (spring through fall). Eggs overwinter and hatch in spring.",
          confidence: 0.92
        }
      ];
      
      resolve(insects[Math.floor(Math.random() * insects.length)]);
    }, 2500);
  });
};

const IdentifierSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<InsectData | null>(null);

  const handleImageSelect = async (file: File, preview: string) => {
    setSelectedImage(preview);
    setIsLoading(true);
    setResult(null);

    try {
      const identifiedInsect = await mockIdentifyInsect();
      setResult(identifiedInsect);
    } catch (error) {
      console.error('Identification failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setResult(null);
  };

  const handleTryAnother = () => {
    setSelectedImage(null);
    setResult(null);
  };

  return (
    <section id="identifier" className="py-20 md:py-32 bg-forest-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Identify Any Insect Instantly
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload a clear photo of an insect and our AI will identify it within seconds, 
            providing detailed information about the species.
          </p>
        </div>

        <ImageUploader
          onImageSelect={handleImageSelect}
          isLoading={isLoading}
          selectedImage={selectedImage}
          onClear={!isLoading ? handleClear : undefined}
        />

        {result && (
          <div className="mt-12">
            <InsectResult insect={result} />
            <div className="flex justify-center mt-8">
              <Button variant="nature" size="lg" onClick={handleTryAnother}>
                <RefreshCw className="w-5 h-5 mr-2" />
                Identify Another Insect
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IdentifierSection;
