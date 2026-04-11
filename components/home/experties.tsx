import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/ui/button";

export default function Experties() {
  return (
    <section className="w-full bg-white rounded-5">
      <Container className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-[140px]  ">
          <div className="flex flex-col gap-y-7 lg:gap-y-17.75 text-center justify-center lg:text-left items-center lg:items-start">
            <div className="flex flex-col gap-5 items-center lg:items-start">
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
                De l&apos;idée au déploiement, nous créons les solutions
                <span className="hidden md:inline">
                  {" "}
                  technologiques qui soutiennent votre croissance.
                </span>
              </h2>

              <p className="text-base text-[#010D3E] lg:text-[28px] 2xl:tracking-[0%] 2xl:text-[#535353]">
                Oriana Solutions est une agence digitale spécialisée dans le
                développement d&apos;applications sur mesure.
              </p>
            </div>

            <Button
              variant="outline"
              href="# F"
              className="w-fit! py-2.75! md:p-4!"
              icon={
                <Image
                  src="/svg/arrow-right-bold.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              }
            >
              À propos
            </Button>
          </div>

          <div className="w-full lg:flex-1 rounded-[41px] overflow-hidden bg-[#DEDEDE]  lg:h-[500px]   2xl:h-[804px]  ">
            <Image
              src="/png/e1.png"
              alt="Expertise Oriana Solutions"
              width={827}
              height={804}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
