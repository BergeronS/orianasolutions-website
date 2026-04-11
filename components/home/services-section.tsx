import Image from "next/image";
import ServiceCard from "@/components/ui/service-card";
import { services } from "@/data/services";
import Container from "../shared/container";

export default function ServicesSection() {
  return (
    <Container className="w-full py-0!">
      <div className="flex flex-col lg:flex-row  gap-[66px]">
        <div className="hidden lg:flex w-full lg:w-[45%] 2xl:flex-1 relative min-h-[320px] md:min-h-[440px] lg:min-h-[647px] shrink-0">
          <div className="absolute inset-0 rounded-5 overflow-hidden">
            <Image
              src="/png/about.png"
              alt="À propos de Oriana Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[49px] md:gap-4 w-full lg:w-[50%] 2xl:w-[776px] shrink-0 justify-center py-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
