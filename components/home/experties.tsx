import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/ui/button";
import { Arrow } from "@/svgs";

export default function Experties() {
  return (
    <section className="w-full bg-white">
      <Container className="  ">
        <div className="  grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 lg:gap-[80px] 2xl:gap-[180px]">
          
          <div className="flex flex-col gap-y-5 lg:gap-y-17.75 text-center justify-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col py-[28px] md:p-0 gap-[20px] md:gap-[29px] items-center lg:items-start max-w-[726px]">
              <h2
                className="
                    font-heading
                    font-normal
                    text-[28px] leading-[100%]
                    md:text-[44px] md:leading-[52px]
                    2xl:text-[60px] 2xl:leading-[72px]
                    tracking-[-3%]
                    bg-linear-to-br from-black to-[#001354]
                    bg-clip-text text-transparent
                    
                  "
              >
                De l&apos;idée au déploiement, <br className="hidden 2xl:flex"/>
                nous créons les solutions<span className="md:hidden">.</span>
                <span className="hidden md:inline"> technologiques qui soutiennent votre croissance.</span>
              </h2>

              <p className="text-base text-[#010D3E] lg:text-[28px] 2xl:tracking-[0%] 2xl:text-[#535353]">
                Oriana Solutions est une agence digitale <br className="hidden 2xl:flex"/> spécialisée dans le
                développement <br className="hidden 2xl:flex"/>  d&apos;applications sur mesure.
              </p>
            </div>

            <Button
              variant="outline"
              href="# F"
              className="w-[144px]! sm:w-[221px]! p-[11.08px] md:p-[17px]! rounded-[11px]! md:rounded-[17px]! gap-[4.43px] md:gap-[6.8px]!"
              icon={
                <Arrow className="h-[22px]! w-[22px]! sm:h-[34px]! sm:w-[34px]!" />
              }
            >
              À propos
            </Button>
          </div>

          <div className="relative w-full rounded-[41px] overflow-hidden bg-[#DEDEDE] h-[452] mx-auto md:max-w-[627px] 2xl:h-[804px]">
            <Image
              src="/png/e1.png"
              alt="Expertise Oriana Solutions"
              fill
              sizes="(max-width: 627px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
