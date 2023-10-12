import logoImage from '../assets/logo-100.svg';

export const sections = {
  information: 'information',
  contact: 'contact',
  pricing: 'pricing',
};

export const urls = {
  website: {
    hazenaSvinov: 'www.hazenasvinov.cz',
    link: '/',
    logo: logoImage,
    menuNavigation: [
      {
        id: 20,
        title: 'Informace',
        url: `#${sections.information}`,
        isAvailable: true,
      },
      {
        id: 40,
        title: 'Přihlášky',
        url: `#${sections.pricing}`,
        isAvailable: true,
      },
      {
        id: 50,
        title: 'Kontakt',
        url: `#${sections.contact}`,
        isAvailable: true,
      },
    ],
  },
};

export const getMenuItems = () => urls.website.menuNavigation;
