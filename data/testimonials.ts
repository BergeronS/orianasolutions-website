export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Antoile Baril",
    role: "Courtier Immobilier",
    avatar: "/png/author.png",
  },
  {
    id: 2,
    quote: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Antoile Baril",
    role: "Courtier Immobilier",
    avatar: "/png/author.png",
  },
  {
    id: 3,
    quote: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: "Antoile Baril",
    role: "Courtier Immobilier",
    avatar: "/png/author.png",
  },
];
