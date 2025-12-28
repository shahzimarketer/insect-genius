import React from 'react';
import { Bug, MapPin, Calendar, AlertTriangle, Leaf, Info, Shield, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InsectData {
  name: string;
  scientificName: string;
  family: string;
  order: string;
  description: string;
  habitat: string;
  diet: string;
  lifespan: string;
  size: string;
  dangerLevel: 'harmless' | 'mild' | 'moderate' | 'dangerous';
  interestingFacts: string[];
  distribution: string;
  seasonalActivity: string;
  confidence: number;
}

interface InsectResultProps {
  insect: InsectData;
}

const dangerColors = {
  harmless: 'text-primary bg-primary/10 border-primary/20',
  mild: 'text-gold bg-gold/10 border-gold/20',
  moderate: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  dangerous: 'text-destructive bg-destructive/10 border-destructive/20',
};

const dangerLabels = {
  harmless: 'Harmless',
  mild: 'Mildly Irritating',
  moderate: 'Use Caution',
  dangerous: 'Potentially Dangerous',
};

const InsectResult: React.FC<InsectResultProps> = ({ insect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      {/* Header Card */}
      <div className="bg-card-gradient rounded-2xl p-6 md:p-8 border border-border shadow-elevated mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/20">
                <Bug className="w-6 h-6 text-primary" />
              </div>
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium border",
                dangerColors[insect.dangerLevel]
              )}>
                <Shield className="w-3 h-3 inline mr-1" />
                {dangerLabels[insect.dangerLevel]}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">
              {insect.name}
            </h2>
            <p className="text-lg text-primary italic">{insect.scientificName}</p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              {Math.round(insect.confidence * 100)}% Match
            </span>
          </div>
        </div>

        <p className="text-foreground/90 text-lg leading-relaxed mb-6">
          {insect.description}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Family</p>
            <p className="text-foreground font-semibold">{insect.family}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Order</p>
            <p className="text-foreground font-semibold">{insect.order}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Size</p>
            <p className="text-foreground font-semibold">{insect.size}</p>
          </div>
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Lifespan</p>
            <p className="text-foreground font-semibold">{insect.lifespan}</p>
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
              <p className="text-foreground">{insect.habitat}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Geographic Range</p>
              <p className="text-foreground">{insect.distribution}</p>
            </div>
          </div>
        </div>

        {/* Diet & Activity */}
        <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-leaf/20">
              <Leaf className="w-5 h-5 text-leaf" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground">Diet & Activity</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Diet</p>
              <p className="text-foreground">{insect.diet}</p>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Seasonal Activity</p>
                <p className="text-foreground">{insect.seasonalActivity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interesting Facts */}
      <div className="bg-card-gradient rounded-2xl p-6 border border-border shadow-soft">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent/20">
            <Info className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground">Fascinating Facts</h3>
        </div>
        <ul className="space-y-3">
          {insect.interestingFacts.map((fact, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary font-medium">
                {index + 1}
              </span>
              <p className="text-foreground/90">{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsectResult;
