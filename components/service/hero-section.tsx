import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import Tag from "@/components/ui/tag";
import { Arrow } from "@/svgs";

export default function ServicesHero() {
  return (
    <Container className=" sm:block hidden">
       <div className="flex flex-col items-center sm:gap-14 gap-8 text-center ">
         <div className="flex flex-col gap-8">
           <Typography variant="h1">
            Nos services
          </Typography>

          <Typography variant="p-hero" className="max-w-[550px]">
            Oriana Solutions, votre expert en applications mobiles, web, SaaS etautomatisation IA sur mesure.
          </Typography>
         </div>

          <div className="flex flex-nowrap items-center  gap-1.5 xs:gap-4 sm:gap-6 w-full justify-center">
            <Button href="/contact" className="px-2! sm:px-4! ">
              Nous contacter
            </Button>
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
    </Container>
  );
}
