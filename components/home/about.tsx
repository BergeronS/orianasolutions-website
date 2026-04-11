import React from "react";
import Container from "../shared/container";
import Tag from "../ui/tag";

const About = () => {
  return (
    <Container className="py-8!">
      <div className="flex flex-col justify-center items-center max-w-[755px] lg:h-[380px] mx-auto text-center space-y-[27px]">
        <span className="hidden lg:flex">
          <Tag>Propulez votre entreprise</Tag>
        </span>
        <h3 className="font-heading text-[32px] md:text-[50px] xl:text-[75px] leading-[83px] tracking-normal lg:tracking-[-6px]">
          Nos services
        </h3>
        <p className="hidden lg:flex text-[18px] text-body lg:text-[30px] leading-[124%] lg:leading-[43px]">
          Une expertise complète pour tous vos besoins en développement digital
        </p>

        <p className="lg:hidden flex text-[18px] text-body lg:text-[30px] leading-[124%] lg:leading-[43px]">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>
    </Container>
  );
};

export default About;
