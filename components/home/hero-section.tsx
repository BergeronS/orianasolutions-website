import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/shared/container";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";
import { Arrow } from "@/svgs";

export default function HeroSection() {
  return (
    <Container parentStyle=" bg-primary-light relative rounded-b-[30px] md:rounded-b-none " className=" relative overflow-hidden 4xl:h-auto sm:h-[calc(100dvh-95px)] h-[calc(100dvh-80px)] flex md:items-center">
      <div className="  absolute -right-20 -bottom-10 2xl:-bottom-44 3xl:-bottom-64 4xl:-bottom-80 2xl:-right-24 3xl:-right-40 4xl:-right-40 w-[340px] h-[310px] md:w-[480px] xl:h-[420px] 2xl:w-[730px] 2xl:h-[730px] 3xl:w-[830px] 3xl:h-[830px] 4xl:w-[1010px] 4xl:h-[1010px] flex items-end">
        <Image
          src="/svg/Logo_Oriana_Symbole_Noir.svg"
          alt=""
          aria-hidden
          width={900}
          height={900}
          className="w-full translate-x-3 translate-y-3 xl:translate-y-3"
          style={{
            filter:
              "invert(27%) sepia(96%) saturate(1800%) hue-rotate(210deg) brightness(98%) contrast(88%)",
            opacity: 0.22,
          }}
          priority
        />
      </div>

      <div className=" relative z-10 mt-16 md:mt-0 ">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-8 w-full md:max-w-[70%] 2xl:max-w-229.75">
          <span className="lg:hidden flex items-center  ">
            <Tag>Everything you need</Tag>
          </span>

          <Typography variant="h1" className="sm:max-w-[85%] 3xl:max-w-full">
            Donnez vie à vos ambitions numériques.
          </Typography>

          <Typography variant="p-hero">
            Oriana Solutions, votre expert en applications <br className="hidden lg:flex" /> mobiles, web, SaaS et
            automatisation IA sur mesure.
          </Typography>

          <div className="flex flex-nowrap md:mt-8 gap-1.5 xs:gap-4 sm:gap-6 w-full">
            <Button href="#contact" className="px-2! sm:px-4! 3xl:px-5!">Nous contacter</Button>
            <Button
              variant="outline"
              href="#realisations"
              className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
              icon={<Arrow />}
            >
              Nos réalisations
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="h-44 md:h-36 xl:hidden" /> */}
    </Container >
  );
}
