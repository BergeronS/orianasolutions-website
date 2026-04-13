import React from "react";
import Container from "../shared/container";
import Tag from "../ui/tag";
import { Typography } from "@/components/ui/typography";

const About = () => {
  return (
    <Container className="py-8!">
      <div className="flex flex-col justify-center items-center max-w-[755px] lg:h-[380px] mx-auto text-center gap-y-[16px] ">
        <span className="hidden lg:flex">
          <Tag>Propulez votre entreprise</Tag>
        </span>
        <Typography variant="h2" as="h3" className="sm:mb-4">
          Nos services
        </Typography>
        <Typography variant="p-large" className="hidden lg:flex mt-3 3xl:max-w-[620px] max-w-[550px]">
          Une expertise complète pour tous vos besoins en développement digital
        </Typography>

        <Typography variant="p-large" className="lg:hidden flex mt-3">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </Typography>
      </div>
    </Container>
  );
};

export default About;
