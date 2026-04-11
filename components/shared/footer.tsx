import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import {IconInstagram , IconFacebook, IconLinkedIn} from "@/svgs/index"



const navColumns = [
  {
    links: [{ label: "Accueil", href: "/" }],
  },
  {
    links: [
      { label: "Services", href: "#services" },
      { label: "Applications web", href: "#services" },
      { label: "Micro SaaS", href: "#services" },
      { label: "Site Web sur mesure", href: "#services" },
    ],
  },
  {
    links: [
      { label: "Blogs", href: "#" },
      { label: "Inner blog", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];



 
export default function Footer() {
  return (
    <Container parentStyle="bg-primary" className="py-13!">
      <footer className="flex flex-col gap-13">
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row lg:justify-between  ">
          {/* Left: Logo + description */}
          <div className="flex flex-col gap-5 lg:max-w-95">
            <Link href="/" aria-label="Oriana Solutions – accueil">
              <Image
                src="/svg/Logo_Oriana_Primaire_Blanc.svg"
                alt="Oriana Solutions"
                width={319}
                height={96}
                className="w-50 md:w-65 xl:w-79.75 h-auto"
                priority
              />
            </Link>

            <p className="text-base leading-6 tracking-[-0.02em] font-normal text-[#B7B7B7] max-w-95">
              Partner with us to achieve sustainable growth and success.
            </p>
          </div>

          {/* Middle: Nav columns */}
          <nav
            aria-label="Footer navigation"
            className="flex gap-4 sm:gap-7 flex-col justify-between md:flex-row"
          >
            {navColumns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-4  ">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-base py-3 sm:px-5 leading-6 tracking-normal font-normal text-white hover:opacity-70 transition-opacity whitespace-nowrap"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <address className="not-italic flex flex-col gap-4 w-full lg:w-48.5 text-base leading-6 text-white">
            <span className="font-medium">Nous contacter</span>

            <span className="text-white/80">
              Basé à Montréal,
              <br />
              Québec, Canada
            </span>

            <div className="flex flex-col gap-1 text-white/80">
              <a
                href="mailto:info@orianasolutions.com"
                className="hover:underline transition-opacity hover:opacity-80"
              >
                info@orianasolutions.com
              </a>
              <a
                href="tel:+10781234512112"
                className="hover:underline transition-opacity hover:opacity-80"
              >
                (078) 12345 12112
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-2.5 mt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <IconInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <IconFacebook />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-70 transition-opacity"
              >
                <IconLinkedIn />
              </a>
            </div>
          </address>
        </div>

        <div className=" flex flex-col gap-4 sm:flex-row items-center sm:items-center sm:justify-between">
          <p className="text-sm leading-6 tracking-[-0.02em] text-[#B7B7B7]">
            © 2024 Naturis. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {bottomLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm leading-6 text-[#B7B7B7] hover:text-white hover:underline transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </Container>
  );
}
