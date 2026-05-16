// types/service.ts

export interface ServiceSection {
  title: string;
  description: string[];
  image: string;
  reverse?: boolean;
}

export interface ServiceType {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  href?: string;
  downloads?: string | number;
  countries?: string | number;
  awards?: string | number;
  sections?: ServiceSection[];
}