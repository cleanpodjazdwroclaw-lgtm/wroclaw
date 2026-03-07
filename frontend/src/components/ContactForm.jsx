import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockFormSubmission } from '../mock/data';

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await mockFormSubmission(formData);
      
      toast({
        title: "Sukces!",
        description: response.message,
      });

      // Reset form
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Coś poszło nie tak. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-900 text-sm font-semibold">KONTAKT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skontaktuj Się Z Nami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Napisz lub zadzwoń - odpowiemy na wszystkie pytania i przygotujemy bezpłatną wycenę
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane Kontaktowe</h3>
            
            <div className="space-y-6 mb-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                    <a href="tel:63663738899" className="text-blue-900 hover:text-blue-700 text-lg font-medium">
                      636 637 388
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Pon-Pt: 8:00-18:00, Sob: 9:00-14:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Adres</div>
                    <p className="text-gray-700">Racławicka, Wrocław</p>
                    <p className="text-sm text-gray-600 mt-1">Obsługujemy cały Wrocław i okolice</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:kontakt@wroclawcleaning.pl" className="text-blue-900 hover:text-blue-700">
                      kontakt@wroclawcleaning.pl
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Odpowiadamy w ciągu 24h</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Call CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-3">Potrzebujesz pilnej wyceny?</h4>
              <p className="mb-6 text-green-50">Zadzwoń teraz i umów się na bezpłatne oględziny!</p>
              <a href="tel:63663738899">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 636 637 388
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Formularz Kontaktowy</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Imię i Nazwisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jan Kowalski"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Numer Telefonu *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="123 456 789"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Wiadomość
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Opisz czego potrzebujesz..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Wyślij Wiadomość
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    Odpowiadamy w ciągu 24 godzin w dni robocze
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
