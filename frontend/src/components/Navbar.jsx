import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WC</span>
              </div>
              <span className="text-xl font-bold text-blue-900">Wroclaw Cleaning</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('uslugi')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Usługi
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('o-nas')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                O Nas
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Kontakt
              </button>
            </div>

            {/* Call Button */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:63663738899">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  636 637 388
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('uslugi')} className="text-left text-gray-700 hover:text-blue-900 font-medium py-2">
                  Usługi
                </button>
                <button onClick={() => scrollToSection('galeria')} className="text-left text-gray-700 hover:text-blue-900 font-medium py-2">
                  Galeria
                </button>
                <button onClick={() => scrollToSection('o-nas')} className="text-left text-gray-700 hover:text-blue-900 font-medium py-2">
                  O Nas
                </button>
                <button onClick={() => scrollToSection('kontakt')} className="text-left text-gray-700 hover:text-blue-900 font-medium py-2">
                  Kontakt
                </button>
                <a href="tel:63663738899" className="pt-2">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwoń Teraz
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Call Button - Mobile Only */}
      <a href="tel:63663738899" className="md:hidden fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl animate-pulse">
          <Phone className="w-6 h-6" />
        </Button>
      </a>
    </>
  );
};
