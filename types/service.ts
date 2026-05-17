// types/service.ts

export interface ServiceSection {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  reverse?: boolean;
}

export interface ServiceType {
  id: number;
  title: React.ReactNode;
  slug: string;
  description: React.ReactNode;
  image: string;
  href?: string;
  downloads?: string | number;
  countries?: string | number;
  awards?: string | number;
  sections?: ServiceSection[];
}