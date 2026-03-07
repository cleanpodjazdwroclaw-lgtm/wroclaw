import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { galleryImages } from '../mock/data';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const currentImage = galleryImages[activeIndex];

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-900 text-sm font-semibold">GALERIA REALIZACJI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Przed i Po
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz efekty naszej pracy - transformacje, które mówią same za siebie
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto mb-12">
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

              {/* Navigation Buttons */}
              <button 
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{currentImage.title}</h3>
              </div>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-900 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc',
            'https://images.unsplash.com/photo-1718152521364-b9655b8a7926',
            'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg',
            'https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg'
          ].map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={img}
                alt={`Realizacja ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
