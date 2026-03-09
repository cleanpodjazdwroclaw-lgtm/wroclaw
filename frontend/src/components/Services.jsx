import React from 'react';
import { Home, Droplets } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { services } from '../mock/data';

const iconMap = {
  Home,
  Droplets
};

export const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Co Oferujemy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Czyścimy kostki brukowe i podjazdy we Wrocławiu
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-10 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Wiosenna promocja
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Zadzwoń i ustal szczegóły!
            </p>
            <a href="tel:696049505">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Zadzwoń: 696 049 505
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
