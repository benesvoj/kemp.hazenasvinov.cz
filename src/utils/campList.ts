const campList = [
  {
    id: 1,
    isPopular: true,
    title: 'Svinovský kemp',
    description: 'přípravka, mladší žačky a žáci, starší žačky a žáci',
    price: 2300,
    currency: 'Kč',
    date: '7. - 12.8.2022',
    place: 'Stará Ves nad Ondřejnicí',
    ageFrom: 5,
    ageTo: 15,
    theme: 'nevim',
  },
  {
    id: 2,
    isPopular: false,
    title: 'Celostátní soustředění',
    description: 'přípravka, mladší žačky a žáci, starší žačky a žáci',
    price: 3000,
    currency: 'Kč',
    date: '2. - 9.7.2022',
    place: 'Nové Město nad Metují/Dobruška',
    ageFrom: 7,
    ageTo: 15,
    theme: 'nevim',
  },
]

export const getCamps = () => campList
