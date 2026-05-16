export type Category = "Tout les projets" | "Applications mobiles" | "SaaS" | "Site Web";

export const projects = [
  {
    id: 1,
    title: "Antoine Baril | Site Web",
    category: "Site Web" as Category,
    image: "/png/real1.png",
    href: "/services/site-web-personnalise",
  },
  {
    id: 2,
    title: "Quietnest | Application mobile",
    category: "Applications mobiles" as Category,
    image: "/png/real2.png",
    href: "/services/application-mobile",
  },
  {
    id: 3,
    title: "PacPlus | Micro SaaS",
    category: "SaaS" as Category,
    image: "/png/real3.png",
    href: "/services/micro-saas",
  },
];

export const categories: Category[] = [
  "Tout les projets",
  "Applications mobiles",
  "SaaS",
  "Site Web",
];
