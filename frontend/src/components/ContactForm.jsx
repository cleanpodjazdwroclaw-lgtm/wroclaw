import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const ContactForm = () => {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zadzwoń lub napisz - odezwiemy się szybko
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Phone Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Telefon</h3>
                <a 
                  href="tel:696049505" 
                  className="text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors block mb-4"
                >
                  696 049 505
                </a>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Czekamy na twój telefon, zadzwoń już teraz aby uzyskać orientacyjną wycenę
                </p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
                <a 
                  href="mailto:cleanpodjazd.wroclaw@gmail.com" 
                  className="text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors block mb-4 break-all"
                >
                  cleanpodjazd.wroclaw@gmail.com
                </a>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Aby uzyskać orientacyjną wycenę prosze opisać orientacyjną powierzchnię, lokalizację oraz materiał np. kostka brukowa
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Location Info */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow mt-8">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lokalizacja</h3>
              <p className="text-xl text-gray-700 font-semibold">Wrocław Oporów</p>
              <p className="text-gray-600 mt-2">Obsługujemy cały Wrocław i okolice bez dodatkowych opłat</p>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a href="tel:696049505">
              <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold px-12 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
                <Phone className="w-6 h-6 inline-block mr-3" />
                Zadzwoń Teraz: 696 049 505
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
