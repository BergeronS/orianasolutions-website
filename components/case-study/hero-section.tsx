import React from "react";
import DynamicServiceSection from "../service/dynamic-service-section";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { testimonialsLogo } from "@/data/testimonials";
import RealisationsSection from "./realisation-section";
import ServiceFAQ from "../service/faq-section";
import ProcessSection from "./process-section";

export const HeroSection = () => {
  return (
    <>
      <Container className="w-full max-w-[90%]">
        <div className=" sm:flex hidden flex-col items-center gap-12 ">
          <Tag>Services</Tag>

          <Typography variant="h2" className="text-center">
            Développement
            <br />
            {"d'applications mobiles"}
          </Typography>
        </div>
      </Container>

      <DynamicServiceSection
        title="Qu'est-ce q'une application mobile?"
        description={[
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile. Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
          "Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
        ]}
        image="/png/real4.png"
        reverse
      />

      <div className="">
        <DynamicServiceSection
          title="Nous sommes là pour vous accompagner de A à Z"
          description={[
            "Tout a commencé en 2020, nous avons décidé de créer une application mobile. Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
            "Tout a commencé en 2020, nous avons décidé de créer une application mobile.",
          ]}
          image="/png/real5.png"
          parentStyle="bg-primary-light"
          className="pt-20"
        />
      </div>
      <ProcessSection />
      <RealisationsSection />
      <div className="sm:flex hidden flex-col justify-center items-center gap-7.5  lg:gap-10.5">
        <span className="hidden md:flex">
          <Tag>Ceux qui nous ont fait confiance</Tag>
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5.5 gap-x-13.25 md:gap-x-25 p-2.5 my-3">
          {testimonialsLogo.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              height={40}
              width={163}
              style={{ height: "auto" }}
            />
          ))}
        </div>
      </div>

      <div>
        <ServiceFAQ
          title={
            <>
              Questions fréquentes <br />
              sur les applications mobiles
            </>
          }
        />
      </div>
    </>
  );
};
