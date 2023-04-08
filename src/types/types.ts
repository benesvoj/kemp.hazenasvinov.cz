export interface SelectedCamp {
  results: Camp[];
}
export interface Camp {
  id: number;
  selectedCamp: number;
}
export interface APIResponse {
  results: CampItem[];
}

export interface CampItem {
  id: number;
  isPopular: boolean;
  name: string;
  description: string;
  price: number;
  dateFrom: number;
  dateTo: string;
  place: string | null;
  ageFrom: number;
  ageTo: number;
  theme?: string | null;
  limitTo?: number | null;
  validity: boolean;
}
