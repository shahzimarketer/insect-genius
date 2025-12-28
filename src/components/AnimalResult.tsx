import React from 'react';
import { PawPrint, MapPin, Calendar, AlertTriangle, Utensils, Info, Shield, Sparkles, Ruler, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export interface AnimalData {
  name: string;
  scientificName: string;
  family: string;
  order: string;
  class: string;
  description: string;
  habitat: string;
  diet: string;
  lifespan: string;
  size: string;
  weight: string;
  dangerLevel: 'harmless' | 'mild' | 'moderate' | 'dangerous';
  conservationStatus: 'least-concern' | 'near-threatened' | 'vulnerable' | 'endangered' | 'critically-endangered';
  interestingFacts: string[];
  distribution: string;
  behavior: string;
  confidence: number;
}

interface AnimalResultProps {
  animal: AnimalData;
}

const dangerColors = {
  harmless: 'text-primary bg-primary/10 border-primary/20',
  mild: 'text-gold bg-gold/10 border-gold/20',
  moderate: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  dangerous: 'text-destructive bg-destructive/10 border-destructive/20',
};

const dangerLabels = {
  harmless: 'Harmless',
  mild: 'Mildly Dangerous',
  moderate: 'Use Caution',
  dangerous: 'Potentially Dangerous',
};

const conservationColors = {
  'least-concern': 'text-primary bg-primary/10 border-primary/20',
  'near-threatened': 'text-gold bg-gold/10 border-gold/20',
  'vulnerable': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  'endangered': 'text-destructive bg-destructive/10 border-destructive/20',
  'critically-endangered': 'text-destructive bg-destructive/20 border-destructive/30',
};

const conservationLabels = {
  'least-concern': 'Least Concern',
  'near-threatened': 'Near Threatened',
  'vulnerable': 'Vulnerable',
  'endangered': 'Endangered',
  'critically-endangered': 'Critically Endangered',
};

const AnimalResult: React.FC<AnimalResultProps> = ({ animal }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      {/* Header Card */}
      <div className="bg-card-gradient rounded-2xl p-6 md:p-8 border border-border shadow-elevated mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <div className="p-2 rounded-lg bg-accent/20">
                <PawPrint className="w-6 h-6 text-accent" />
              </div>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                dangerColors[animal.dangerLevel]
              )}>
                <Shield className="w-3 h-3 inline mr-1" />
                {dangerLabels[animal.dangerLevel]}
              </span>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                conservationColors[animal.conservationStatus]
              )}>
                <Heart className="w-3 h-3 inline mr-1" />
                {conservationLabels[animal.conservationStatus]}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">
              {animal.name}
            </h2>
            <p className="text-lg text-accent italic">{animal.scientificName}</p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              {Math.round(animal.confidence * 100)}% Match
            </span>
          </div>
        </div>

        <p className="text-foreground/90 text-lg leading-relaxed mb-6">
          {animal.description}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Class</p>
            <p className="text-foreground font-semibold">{animal.class}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Order</p>
            <p className="text-foreground font-semibold">{animal.order}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Family</p>
            <p className="text-foreground font-semibold">{animal.family}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Size</p>
            <p className="text-foreground font-semibold">{animal.size}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Lifespan</p>
            <p className="text-foreground font-semibold">{animal.lifespan}</p>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Habitat & Distribution */}
        <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-moss/20">
              <MapPin className="w-5 h-5 text-moss" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground">Habitat & Distribution</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Preferred Habitat</p>
              <p className="text-foreground">{animal.habitat}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Geographic Range</p>
              <p className="text-foreground">{animal.distribution}</p>
            </div>
          </div>
        </div>

        {/* Diet & Physical */}
        <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-leaf/20">
              <Utensils className="w-5 h-5 text-leaf" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground">Diet & Physical</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Diet</p>
              <p className="text-foreground">{animal.diet}</p>
            </div>
            <div className="flex items-start gap-2">
              <Ruler className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Weight</p>
                <p className="text-foreground">{animal.weight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Behavior */}
      <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gold/20">
            <PawPrint className="w-5 h-5 text-gold" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground">Behavior</h3>
        </div>
        <p className="text-foreground/90">{animal.behavior}</p>
      </div>

      {/* Interesting Facts */}
      <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent/20">
            <Info className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground">Fascinating Facts</h3>
        </div>
        <ul className="space-y-3">
          {animal.interestingFacts.map((fact, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-sm text-accent font-medium">
                {index + 1}
              </span>
              <p className="text-foreground/90">{fact}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Internal Linking */}
      <div className="bg-muted/30 rounded-2xl p-6 border border-border">
        <p className="text-muted-foreground mb-3">
          Looking to identify something smaller? Try our{' '}
          <Link to="/" className="text-primary hover:underline font-medium">
            Insect Identifier
          </Link>{' '}
          for bugs, butterflies, and other insects.
        </p>
      </div>
    </div>
  );
};

export default AnimalResult;
