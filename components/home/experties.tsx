import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/ui/button";
import { Arrow } from "@/svgs";
import { Typography } from "@/components/ui/typography";

export default function Experties() {
  return (
    <section className="w-full bg-white 4xl:h-auto h-screen">
      <Container className="  ">
        <div className="  grid grid-cols-1 lg:grid-cols-2 justify-between  gap-10 lg:gap-20 2xl:gap-24">

          <div className="flex flex-col gap-y-5 lg:gap-y-17.75 text-center justify-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col py-7 md:p-0 gap-5 md:gap-7 items-center lg:items-start">
              <Typography variant="h3">
                De l&apos;idée au déploiement, <br className="hidden 2xl:flex" />
                nous créons les solutions<span className="md:hidden">.</span>
                <span className="hidden md:inline"> technologiques qui soutiennent votre croissance.</span>
              </Typography>

              <Typography variant="p-base" className="sm:max-w-full! max-w-[350px]!">
                Oriana Solutions est une agence digitale <br className="hidden 2xl:flex" /> spécialisée dans le
                développement <br className="hidden 2xl:flex" />  d&apos;applications sur mesure.
              </Typography>
            </div>

            <Button
              variant="outline"
              href="#"
              className=" px-5! sm:px-6! sm:w-auto! w-fit! font-medium! gap-1 md:gap-1.5!"
              icon={
                <Arrow className="h-[22px]! w-[22px]!" />
              }
            >
              À propos
            </Button>
          </div>

          <div className="relative w-full rounded-3xl overflow-hidden  h-[480px] md:h-[400px] lg:h-[500px] xl:h-[600px]   mx-auto max-w-full md:max-w-[450px] 4xl:h-[700px] 3xl:h-[calc(100dvh-140px)]">
            <Image
              src="/png/e1.png"
              alt="Expertise Oriana Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
