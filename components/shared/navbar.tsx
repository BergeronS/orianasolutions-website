"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

import { navbarLinks } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="bg-primary-light backdrop-blur-[19.56px]">
      <nav className="relative z-50 w-full  px-6 sm:px-16 xl:px-25 py-5 2xl:px-35  max-w-[1980px] mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={close}>
            <Image
              src="/svg/Logo_Oriana_Primaire_Noir.svg"
              alt="Oriana Solutions"
              width={225}
              height={65}
              className="w-37.5 xl:w-45"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-10">
            {navbarLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-base xl:text-lg 3xl:text-[22.36px] leading-[32.14px] tracking-[-0.22px] text-black/60 hover:text-black transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button href="#contact">Parlez-nous de votre projet</Button>
          </div>

          {/* Hamburger / Close button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="xl:hidden p-2 z-50 relative"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Dark overlay */}
      <div
        onClick={close}
        aria-hidden
        className={`xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Mobile drawer — slides in from right */}
      <div
        className={`xl:hidden fixed top-0 left-0 right-0 z-40 bg-primary-light shadow-xl transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="h-25 sm:h-30" />

        <div className="flex flex-col px-6 sm:px-16 py-10 gap-2">
          {navbarLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="text-lg font-medium text-title py-3 border-b border-black/10 last:border-0 hover:opacity-70 transition-opacity"
            >
              {label}
            </Link>
          ))}

          <div className="mt-4">
            <Link href="#contact" onClick={close}>
              <Button>Parlez-nous de votre projet</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
