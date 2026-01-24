
export interface Review {
  id: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
}

export interface ServiceItem {
  title: string;
  description?: string;
  features: { title: string; desc: string }[];
}

export interface Location {
  name: string;
  address: string;
  phone: string;
}

export interface ContactInfo {
  locations: Location[];
  whatsapp: string;
  email: string;
  schedule: string;
}
