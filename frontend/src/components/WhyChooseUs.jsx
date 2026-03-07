import React from 'react';
import { Wrench, Clock, BadgeCheck, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { features } from '../mock/data';

const iconMap = {
  Wrench,
  Clock,
  BadgeCheck,
  MapPin
};

export const WhyChooseUs = () => {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-900 text-sm font-semibold">DLACZEGO MY?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego Warto Nas Wybrać
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jesteśmy profesjonalistami z wieloletnim doświadczeniem w czyszczeniu powierzchni zewnętrznych
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card 
                key={feature.id}
                className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Zaufali Nam Już Setki Klientów we Wrocławiu
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Jesteśmy lokalną firmą z wieloletnim doświadczeniem. Nasze usługi są cenione za wysoką jakość, terminowość i przystępne ceny. Działamy zarówno dla klientów indywidualnych, jak i firm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Gwarancja</div>
                    <div className="text-sm text-gray-600">Zadowolenia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Szybka Realizacja</div>
                    <div className="text-sm text-gray-600">W 24-48h</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1718152521364-b9655b8a7926?w=600&h=600&fit=crop"
                alt="Profesjonalny zespół"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-blue-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Zadowolonych<br/>Klientów</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
