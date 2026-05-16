import Image from "next/image";
import Button from "@/components/ui/button";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import { Arrow } from "@/svgs";

export default function AboutHero() {
  return (
    <Container className="relative flex items-center sm:max-w-[90%] w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="order-1 md:order-1 mt-6 md:mt-0">
          <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Tag>À propos de nous</Tag>
            </div>

            <Typography variant="h3">
              {"De l'idée au déploiement, nous créons les solutions technologiques qui soutiennent votre croissance."}
            </Typography>

            <Typography variant="p-base" className="sm:max-w-[420px] ">
             {" Oriana Solutions est une agence digitale spécialisée dans le développement d'applications sur mesure."}<span className="md:hidden">Nous accompagnons les entreprises dans leur transformation digitale en créant des solutions innovantes et performantes.</span>
            </Typography>

            <div className="sm:block hidden">
              <Button
                variant="outline"
                className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
                icon={<Arrow />}
              >
                À propos
              </Button>
            </div>
          </div>
        </div>

        
        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <div className="w-full rounded-[18px] overflow-hidden max-w-[400px]   ">
            <Image
              src="/png/about1.png"
              alt="Équipe en réunion"
              width={900}
              height={900}
              className="w-full h-auto object-cover block"
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
