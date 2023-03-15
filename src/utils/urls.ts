import logoImage from '../assets/logo-100.svg'
export const urls = {
  website: {
    link: '/',
    logo: logoImage,
    menuNavigation: [
      {
        id: 20,
        title: 'Informace',
        url: '#aboutme',
        isAvailable: true,
      },
      {
        id: 40,
        title: 'Kontakt',
        url: '#contact',
        isAvailable: true,
      },
      {
        id: 50,
        title: 'Přihlášky',
        url: '#pricing',
        isAvailable: true,
      },
    ],
    sections: {
      aboutMe: '#aboutme',
      contact: '#contact',
      pricing: '#pricing',
    },
  },
}

export const getMenuItems = () => urls.website.menuNavigation
