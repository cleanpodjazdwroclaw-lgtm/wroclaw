import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { contactInfo } from '../mock/data';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WC</span>
              </div>
              <span className="text-xl font-bold">Wroclaw Cleaning</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Profesjonalne czyszczenie podjazdów, elewacji i powierzchni zewnętrznych we Wrocławiu. Jakość i terminowość gwarantowana.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Szybkie Linki</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('uslugi')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Usługi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('o-nas')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  O Nas
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Nasze Usługi</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Czyszczenie Podjazdów</li>
              <li>Mycie Ciśnieniowe</li>
              <li>Czyszczenie Tarasów</li>
              <li>Mycie Chodników</li>
              <li>Czyszczenie Elewacji</li>
              <li>Usługi Komercyjne</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                    636 637 388
                  </a>
                  <p className="text-sm text-gray-400">Pon-Pt: 8:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">{contactInfo.address}</p>
                  <p className="text-sm text-gray-400">Obsługujemy cały Wrocław</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wroclaw Cleaning. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Polityka Prywatności</button>
              <button className="hover:text-white transition-colors">Regulamin</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
