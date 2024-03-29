const campList = [
  {
    id: 1,
    isPopular: true,
    name: "Svinovský kemp",
    description: "přípravka, mladší žačky a žáci, starší žačky a žáci",
    price: 2300,
    currency: "Kč",
    dateFrom: 6,
    dateTo: "6. - 11.8.2023",
    place: "Stará Ves nad Ondřejnicí",
    ageFrom: 6,
    ageTo: 15,
    limitTo: 40,
    theme: "nevim",
  },
  {
    id: 2,
    isPopular: false,
    name: "Celostátní soustředění",
    description: "přípravka, mladší žačky a žáci, starší žačky a žáci",
    price: 3500,
    currency: "Kč",
    dateFrom: 2,
    dateTo: "2. - 8.7.2023",
    place: "zatím neurčeno",
    ageFrom: 7,
    ageTo: 15,
    theme: "nevim",
  },
];

export const getCamps = () => campList;
