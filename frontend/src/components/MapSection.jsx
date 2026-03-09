import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  return (
    <section id="mapa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gdzie Nas Znaleźć
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Działamy w okolicach Wrocław Oporów
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              title="Wroclaw Oporow Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.148!2d16.9186!3d51.1344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc204e82b6e49%3A0x5f8e3ca1e3c3f3f3!2sOpor%C3%B3w%2C%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Service Area Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Wrocław Oporów</h4>
                  <p className="text-sm text-gray-600">Główny obszar działania i przyjazd bez dodatkowych opłat</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Okolice Wrocławia</h4>
                  <p className="text-sm text-gray-600">Obsługujemy również tereny wokół Wrocławia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
