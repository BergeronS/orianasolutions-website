import React from "react";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "../ui/typography";
import DynamicServiceSection from "./dynamic-service-section";
import { ServiceType, ServiceSection } from "@/types/service";
import ServiceStats from "./stats-section";
import RealisationsSection from "./realisation-section";

interface ServiceDetailPageProps {
  service: ServiceType;
}

export const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className=" sm:flex hidden flex-col items-center gap-12 py-14">
          <Tag>Étude de cas</Tag>

          <Typography variant="h2" className="text-center">
            {service.title}
            <span> | Quietnest</span>
          </Typography>
        </div>
      </Container>

      {service.sections?.map((section: ServiceSection, index: number) => (
        <DynamicServiceSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}

      <ServiceStats service={service} />

      <DynamicServiceSection
        title="Tout a commencé en 2022 lors d'une défi"
        description={[
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile. Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
        ]}
        image="/png/service1-3.png"
        reverse
      />

     <div className="lg:mt-10">
       <DynamicServiceSection
        title="Tout a commencé en 2022 lors d'une défi"
        description={[
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile. Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
        ]}
        image="/png/service1-4.png"
      />
     </div>

      <RealisationsSection />
    </>
  );
};
