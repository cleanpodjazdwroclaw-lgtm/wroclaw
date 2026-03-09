import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../mock/data';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <span className="text-xl font-bold mb-4 block">Wroclaw Cleaning</span>
            <p className="text-gray-300 leading-relaxed">
              Czyszczenie kostki brukowej i podjazdów we Wrocławiu. Młody zespół świadczący profesjonalne usługi czyszczenia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Linki</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('uslugi')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Co Oferujemy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mapa')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mapa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  696 049 505
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Wroclaw Cleaning
          </p>
        </div>
      </div>
    </footer>
  );
};
