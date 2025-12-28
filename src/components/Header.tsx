import React from 'react';
import { Bug, Menu, X, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAnimalPage = location.pathname === '/animal-identifier';

  const insectNavLinks = [
    { href: '#identifier', label: 'Identify Insect' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#common-insects', label: 'Common Insects' },
    { href: '#about', label: 'About' },
  ];

  const animalNavLinks = [
    { href: '#animal-identifier', label: 'Identify Animal' },
    { href: '#how-animal-works', label: 'How It Works' },
    { href: '#common-animals', label: 'Common Animals' },
    { href: '#about-animal', label: 'About' },
  ];

  const navLinks = isAnimalPage ? animalNavLinks : insectNavLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={isAnimalPage ? '/animal-identifier' : '/'} className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg ${isAnimalPage ? 'bg-accent/20 group-hover:bg-accent/30' : 'bg-primary/20 group-hover:bg-primary/30'} transition-colors`}>
              {isAnimalPage ? <PawPrint className="w-6 h-6 text-accent" /> : <Bug className="w-6 h-6 text-primary" />}
            </div>
            <span className="text-xl font-serif font-bold text-foreground">
              {isAnimalPage ? <>Animal<span className="text-accent">ID</span></> : <>Insect<span className="text-primary">ID</span></>}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tools Dropdown + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to={isAnimalPage ? '/' : '/animal-identifier'} 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {isAnimalPage ? <Bug className="w-4 h-4" /> : <PawPrint className="w-4 h-4" />}
              {isAnimalPage ? 'Insect ID' : 'Animal ID'}
            </Link>
            <Button variant="hero" size="default" asChild>
              <a href={isAnimalPage ? '#animal-identifier' : '#identifier'}>Try Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link 
                to={isAnimalPage ? '/' : '/animal-identifier'} 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {isAnimalPage ? <Bug className="w-4 h-4" /> : <PawPrint className="w-4 h-4" />}
                {isAnimalPage ? 'Switch to Insect ID' : 'Switch to Animal ID'}
              </Link>
              <Button variant="hero" size="default" asChild className="mt-2">
                <a href={isAnimalPage ? '#animal-identifier' : '#identifier'} onClick={() => setIsMenuOpen(false)}>
                  Try Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
