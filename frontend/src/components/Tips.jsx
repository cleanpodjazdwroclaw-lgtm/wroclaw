import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { tips } from '../mock/data';

const iconMap = {
  Calendar,
  CheckCircle
};

export const Tips = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Porady
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Przydatne informacje o czyszczeniu kostki i podjazdów
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tips.map((tip) => {
            const IconComponent = iconMap[tip.icon];
            return (
              <Card 
                key={tip.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {tip.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
