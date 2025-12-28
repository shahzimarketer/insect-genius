import React, { useState } from 'react';
import AnimalImageUploader from './AnimalImageUploader';
import AnimalResult, { AnimalData } from '../AnimalResult';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

// Mock identification function - will be replaced with actual AI API
const mockIdentifyAnimal = (): Promise<AnimalData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const animals: AnimalData[] = [
        {
          name: "African Lion",
          scientificName: "Panthera leo",
          family: "Felidae",
          order: "Carnivora",
          class: "Mammalia",
          description: "The African Lion is the second-largest living cat after the tiger. Known as the 'King of the Jungle', lions are the only cats that live in social groups called prides. They are apex predators and keystone species, playing a crucial role in maintaining the balance of their ecosystem.",
          habitat: "Savannas, grasslands, dense bush, and woodlands. They prefer areas with water sources and abundant prey.",
          diet: "Carnivorous. Primary prey includes zebras, wildebeest, buffalo, and various antelopes. They are also known to scavenge when opportunities arise.",
          lifespan: "10-14 years in the wild, up to 20 years in captivity",
          size: "4.5-6.5 feet body length, plus 2-3 feet tail",
          weight: "Males: 330-550 lbs, Females: 265-395 lbs",
          dangerLevel: "dangerous",
          conservationStatus: "vulnerable",
          interestingFacts: [
            "A lion's roar can be heard from up to 5 miles away, making it the loudest roar of any big cat.",
            "Lions sleep for 16-20 hours a day, conserving energy for hunting.",
            "Female lions do 85-90% of the pride's hunting, working together in coordinated attacks.",
            "A lion's mane serves as protection during fights and as a sign of health and strength to potential mates."
          ],
          distribution: "Sub-Saharan Africa, with a small population in the Gir Forest of India.",
          behavior: "Lions are the most social of all wild cats, living in prides typically consisting of related females, their cubs, and a small number of adult males. Males defend the pride's territory while females are the primary hunters.",
          confidence: 0.96
        },
        {
          name: "Gray Wolf",
          scientificName: "Canis lupus",
          family: "Canidae",
          order: "Carnivora",
          class: "Mammalia",
          description: "The Gray Wolf is the largest wild member of the dog family and is highly intelligent and social. Wolves are apex predators that play a vital role in maintaining healthy ecosystems by regulating prey populations.",
          habitat: "Diverse habitats including forests, tundra, grasslands, deserts, and mountains. They are highly adaptable to different environments.",
          diet: "Carnivorous. Primarily hunt large ungulates like elk, deer, moose, and caribou. They also eat smaller mammals, fish, and occasionally berries.",
          lifespan: "6-8 years in the wild, up to 15 years in captivity",
          size: "4.5-6.5 feet from nose to tail tip",
          weight: "70-145 lbs, with males being larger than females",
          dangerLevel: "moderate",
          conservationStatus: "least-concern",
          interestingFacts: [
            "Wolves can run at speeds up to 40 mph and can travel up to 30 miles in a single day while hunting.",
            "A wolf pack has a complex social hierarchy led by an alpha pair.",
            "Wolves have about 200 million scent cells compared to humans' 5 million.",
            "Wolf pups are born deaf and blind and are cared for by the entire pack."
          ],
          distribution: "North America, Europe, and Asia. Once the world's most widely distributed mammal.",
          behavior: "Wolves live in packs typically consisting of 5-10 individuals led by an alpha pair. They communicate through howls, body language, and scent marking. Pack hunting allows them to take down prey much larger than themselves.",
          confidence: 0.92
        },
        {
          name: "Red Fox",
          scientificName: "Vulpes vulpes",
          family: "Canidae",
          order: "Carnivora",
          class: "Mammalia",
          description: "The Red Fox is the largest of the true foxes and one of the most widely distributed carnivores in the world. Known for their intelligence, adaptability, and iconic rusty-red coat, they have successfully adapted to urban environments.",
          habitat: "Extremely adaptable - forests, grasslands, mountains, deserts, and urban areas. They thrive in edge habitats where different ecosystems meet.",
          diet: "Omnivorous. Eats small mammals, birds, insects, fruits, berries, and human food waste in urban areas.",
          lifespan: "2-5 years in the wild, up to 15 years in captivity",
          size: "18-35 inches body length, plus 12-22 inch tail",
          weight: "6.5-24 lbs",
          dangerLevel: "mild",
          conservationStatus: "least-concern",
          interestingFacts: [
            "Red foxes have excellent hearing and can locate prey under snow by sound alone.",
            "They can run at speeds up to 31 mph and can jump 6 feet high.",
            "Foxes use Earth's magnetic field to hunt, aligning their pounce with magnetic north.",
            "A fox's tail, called a 'brush', is used for balance and as a warm cover during cold weather."
          ],
          distribution: "Most widespread carnivore species - found across the Northern Hemisphere including North America, Europe, Asia, and parts of North Africa.",
          behavior: "Unlike wolves, red foxes are typically solitary hunters. They are crepuscular and nocturnal, most active at dawn and dusk. They use a variety of vocalizations and are known for their playful nature.",
          confidence: 0.89
        }
      ];
      
      resolve(animals[Math.floor(Math.random() * animals.length)]);
    }, 2500);
  });
};

const AnimalIdentifierSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnimalData | null>(null);

  const handleImageSelect = async (file: File, preview: string) => {
    setSelectedImage(preview);
    setIsLoading(true);
    setResult(null);

    try {
      const identifiedAnimal = await mockIdentifyAnimal();
      setResult(identifiedAnimal);
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
    <section id="animal-identifier" className="py-20 md:py-32 bg-savanna-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Identify Any Animal Instantly
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload a clear photo of an animal and our AI will identify it within seconds, 
            providing detailed information about the species, habitat, and behavior.
          </p>
        </div>

        <AnimalImageUploader
          onImageSelect={handleImageSelect}
          isLoading={isLoading}
          selectedImage={selectedImage}
          onClear={!isLoading ? handleClear : undefined}
        />

        {result && (
          <div className="mt-12">
            <AnimalResult animal={result} />
            <div className="flex justify-center mt-8">
              <Button variant="nature" size="lg" onClick={handleTryAnother}>
                <RefreshCw className="w-5 h-5 mr-2" />
                Identify Another Animal
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimalIdentifierSection;
