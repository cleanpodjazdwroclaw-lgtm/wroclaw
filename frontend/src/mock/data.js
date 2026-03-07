// Mock data for Wroclaw Cleaning website

export const services = [
  {
    id: 1,
    title: "Czyszczenie Podjazdów",
    description: "Profesjonalne mycie i czyszczenie podjazdów z najwyższą starannością. Przywracamy pierwotny wygląd powierzchni betonowych i kamiennych.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1605658781469-50bcc2522522"
  },
  {
    id: 2,
    title: "Mycie Ciśnieniowe",
    description: "Wysokociśnieniowe mycie wszystkich powierzchni zewnętrznych. Usuwamy plamy, mech i zabrudzenia.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc"
  },
  {
    id: 3,
    title: "Czyszczenie Tarasów",
    description: "Kompleksowe czyszczenie tarasów drewnianych i kamiennych. Przywracamy blask Twoim przestrzeniom zewnętrznym.",
    icon: "Fence",
    image: "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg"
  },
  {
    id: 4,
    title: "Mycie Chodników",
    description: "Oczyszczamy chodniki i alejki z brudu, pleśni i nalotów. Bezpieczne i skuteczne metody czyszczenia.",
    icon: "FootprintsIcon",
    image: "https://images.unsplash.com/photo-1718152521364-b9655b8a7926"
  },
  {
    id: 5,
    title: "Czyszczenie Elewacji",
    description: "Profesjonalne mycie fasad budynków, murów i ogrodzeń. Dbamy o estetykę Twojej nieruchomości.",
    icon: "Building2",
    image: "https://images.pexels.com/photos/6195951/pexels-photo-6195951.jpeg"
  },
  {
    id: 6,
    title: "Usługi Komercyjne i Prywatne",
    description: "Obsługujemy zarówno klientów indywidualnych, jak i firmy. Dostosowujemy usługi do Twoich potrzeb.",
    icon: "Users",
    image: "https://images.pexels.com/photos/6873098/pexels-photo-6873098.jpeg"
  }
];

export const galleryImages = [
  {
    id: 1,
    before: "https://images.pexels.com/photos/5989/man-hand-car-wheels.jpg",
    after: "https://images.pexels.com/photos/6873132/pexels-photo-6873132.jpeg",
    title: "Podjazd - Przed i Po"
  },
  {
    id: 2,
    before: "https://images.pexels.com/photos/5989/man-hand-car-wheels.jpg",
    after: "https://images.unsplash.com/photo-1605658781469-50bcc2522522",
    title: "Chodnik - Transformacja"
  },
  {
    id: 3,
    before: "https://images.pexels.com/photos/5989/man-hand-car-wheels.jpg",
    after: "https://images.pexels.com/photos/6873098/pexels-photo-6873098.jpeg",
    title: "Elewacja - Rezultat"
  }
];

export const features = [
  {
    id: 1,
    title: "Profesjonalny Sprzęt",
    description: "Używamy najnowocześniejszego sprzętu wysokociśnieniowego najwyższej jakości.",
    icon: "Wrench"
  },
  {
    id: 2,
    title: "Szybka i Niezawodna Obsługa",
    description: "Dotrzymujemy terminów i gwarantujemy wysoką jakość usług.",
    icon: "Clock"
  },
  {
    id: 3,
    title: "Przystępne Ceny",
    description: "Oferujemy konkurencyjne ceny bez ukrytych kosztów. Darmowa wycena!",
    icon: "BadgeCheck"
  },
  {
    id: 4,
    title: "Lokalni Specjaliści",
    description: "Jesteśmy lokalną firmą działającą we Wrocławiu i okolicach.",
    icon: "MapPin"
  }
];

export const contactInfo = {
  phone: "63663738899",
  address: "Racławicka, Wrocław",
  email: "kontakt@wroclawcleaning.pl",
  location: {
    lat: 51.0985,
    lng: 17.0320
  }
};

export const mockFormSubmission = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock form submission:", data);
      resolve({ success: true, message: "Dziękujemy! Skontaktujemy się wkrótce." });
    }, 1000);
  });
};
