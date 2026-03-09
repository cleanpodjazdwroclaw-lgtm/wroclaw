import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { galleryImages } from '../mock/data';

export const Gallery = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const currentImage = galleryImages[0];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Efekt Przed i Po
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz jak wygląda kostka brukowa po naszym czyszczeniu
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0">
            <div className="relative aspect-video bg-gray-900">
              {/* Before & After Images */}
              <div className="relative w-full h-full overflow-hidden">
                {/* After Image (Background) */}
                <img 
                  src={currentImage.after}
                  alt="Po czyszczeniu"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Before Image (Overlay with clip) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={currentImage.before}
                    alt="Przed czyszczeniem"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const handleMouseMove = (moveEvent) => {
                      const rect = e.currentTarget.parentElement.getBoundingClientRect();
                      const x = moveEvent.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    };
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5 text-gray-700 absolute left-1" />
                    <ChevronRight className="w-5 h-5 text-gray-700 absolute right-1" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  PRZED
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  PO
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{currentImage.title}</h3>
              </div>
            </div>
          </Card>

          <p className="text-center text-gray-600 mt-6 text-lg">
            Przesuń suwak aby zobaczyć różnicę
          </p>
        </div>
      </div>
    </section>
  );
};
