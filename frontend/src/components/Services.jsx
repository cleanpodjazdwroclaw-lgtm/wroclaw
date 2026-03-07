import React from 'react';
import { Home, Droplets, Fence, FootprintsIcon, Building2, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { services } from '../mock/data';

const iconMap = {
  Home,
  Droplets,
  Fence,
  FootprintsIcon,
  Building2,
  Users
};

export const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-900 text-sm font-semibold">NASZE USŁUGI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kompleksowe Usługi Czyszczenia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferujemy szeroki zakres profesjonalnych usług czyszczenia dostosowanych do Twoich potrzeb
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Potrzebujesz czyszczenia innego rodzaju powierzchni?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Skontaktuj się z nami - dostosujemy usługę do Twoich potrzeb!
            </p>
            <a href="tel:63663738899">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Zadzwoń: 636 637 388
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
