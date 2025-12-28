import React from 'react';
import { PawPrint, Bug, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimalFooter: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/animal-identifier" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <PawPrint className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-serif font-bold text-foreground">
                Animal<span className="text-accent">ID</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              Discover the fascinating world of wildlife with AI-powered identification. 
              Upload a photo and learn about thousands of species in seconds.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Animal Identifier</h4>
            <ul className="space-y-2">
              <li><a href="#animal-identifier" className="text-muted-foreground hover:text-accent transition-colors">Identify Animal</a></li>
              <li><a href="#how-animal-works" className="text-muted-foreground hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#common-animals" className="text-muted-foreground hover:text-accent transition-colors">Common Animals</a></li>
              <li><a href="#about-animal" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>

          {/* Our Tools */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Identification Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Bug className="w-4 h-4" />
                  Insect Identifier
                </Link>
              </li>
              <li>
                <Link to="/animal-identifier" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                  <PawPrint className="w-4 h-4" />
                  Animal Identifier
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InsectID. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimalFooter;
