import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import Container from "../shared/container";

export default function CtaSection() {
  return (
    <section className="mt-20">
      <Container
        parentStyle="bg-primary"
        className="relative overflow-hidden rounded-tl-[28px] rounded-tr-[28px]  "
      >
        <div className="hidden lg:flex absolute right-0 inset-y-0 w-[320px] md:w-120 xl:w-155 2xl:w-170 flex items-center pointer-events-none select-none">
          <Image
            src="/svg/Logo_Oriana_Symbole_Noir.svg"
            alt=""
            aria-hidden
            width={900}
            height={900}
            className="w-full translate-x-3"
            style={{
              filter:
                "invert(20%) sepia(90%) saturate(1200%) hue-rotate(210deg) brightness(60%) contrast(100%)",
              opacity: 0.45,
            }}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="flex flex-col gap-2.5 w-full lg:max-w-150 text-center lg:text-left">
            <h2 className="text-[38px] leading-10 font-medium md:text-[59px] md:leading-14.75 tracking-[-0.06em] text-white">
              Donnez vie à vos ambitions numériques.
            </h2>

            <p className="mt-2  leading-[31px] md:text-[20.44px] md:leading-[29.39px] tracking-[-3.6%] font-normal text-white/90 max-w-130 mx-auto lg:mx-0">
              Nous bâtissons des solutions logicielles intuitives et des sites
              vitrines prestigieux qui reflètent l&apos;excellence de votre
              organisation.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
              <Button
                href="#contact"
                variant="outline"
                className="bg-primary-light border-transparent text-heading font-medium hover:bg-white w-fit!"
              >
                Prendre rendez-vous
              </Button>

              <Link
                href="#services"
                className="hidden lg:inline-flex items-center gap-1.5 text-white text-[16px] md:text-[22.36px] leading-6.75 tracking-[-0.45px] hover:underline transition-opacity hover:opacity-80"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
