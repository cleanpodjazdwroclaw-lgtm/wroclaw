import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1676984290997-b862e8f0919c?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Czyszczenie Kostki Brukowej
            <span className="block mt-2">i Podjazdów</span>
            <span className="block mt-2 text-green-400">
              Wrocław
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Usuwamy brud, mech i zabrudzenia. Twoja kostka wróci do pierwotnego koloru.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:696049505">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 696 049 505
              </Button>
            </a>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Napisz do Nas
            </Button>
          </div>

          {/* Simple Info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-lg text-gray-300">
              Działamy głównie we Wrocławiu • Wiosenna promocja
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
