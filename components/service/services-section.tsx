import Image from "next/image";
import Container from "@/components/shared/container";
import Button from "@/components/ui/button";
import { servicesPage } from "@/data/servicesPage";
import { Arrow } from "@/svgs";

export default function ServicesSection() {
  return (
    <Container className="w-full sm:max-w-[80%]">
      <div className="flex flex-col gap-12 md:gap-20">
        {servicesPage.map((item, idx) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12`}
          >
            <div className="flex-1 w-full sm:max-w-[532px] relative h-56 sm:h-72 md:h-80 sm:min-h-[350px] min-h-[300px]  rounded-[12px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4 md:gap-6 justify-center">
              <h3 className="font-heading font-normal text-2xl md:text-3xl 2xl:text4xl 3xl:text-5xl  text-heading">
                {item.title}
              </h3>

              <p className="text-[#535353] text-sm 2xl:text-base max-w-[700px]">
                {item.description}
              </p>

              <div className="flex items-center sm:gap-4 gap-2 ">
                <Button href={`/services/${encodeURIComponent(item.slug)}`} className="w-fit !sm:px-4 bg-[#D6E7FD] text-black whitespace-nowrap">
                  En savoir plus
                </Button>

                <Button href={`/services/${encodeURIComponent(item.slug)}`} variant="outline" className="w-fit whitespace-nowrap"  icon={<Arrow />}>
                   {"Lire l'étude de cas"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
