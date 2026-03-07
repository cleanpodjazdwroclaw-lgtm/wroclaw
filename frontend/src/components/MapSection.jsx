import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  // Note: Google Maps will be integrated with API key from user
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-900 text-sm font-semibold">LOKALIZACJA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Obszar Działania
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obsługujemy Wrocław i okolice
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY' ? (
              <div className="w-full h-[500px] bg-gray-100">
                {/* Google Maps will be rendered here */}
                <iframe
                  title="Wroclaw Cleaning Location"
                  src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Racławicka,Wrocław,Poland&zoom=13`}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              // Placeholder until API key is added
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Racławicka, Wrocław</h3>
                  <p className="text-gray-600 mb-4">Obsługujemy cały Wrocław i okolice</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Racławicka,Wrocław,Poland" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                  >
                    Otwórz w Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Service Area Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Wrocław Centrum</h4>
              <p className="text-sm text-gray-600">Pełna obsługa w centrum miasta i dzielnicach centralnych</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-gray-900 mb-2">Wrocław Okolice</h4>
              <p className="text-sm text-gray-600">Dojeżdżamy do dzielnic podmiejskich Wrocławia</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Region Wrocławski</h4>
              <p className="text-sm text-gray-600">Realizujemy zlecenia w promieniu 30 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
