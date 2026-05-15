import Image from "next/image";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

export default function AboutHighlight() {
  return (
    <Container className="py-16 sm:max-w-[95%] w-full">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left: text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left sm:gap-8 gap-4">
          <Tag>À propos de nous</Tag>

          <div className="flex flex-col sm:gap-10 gap-6">
            <Typography variant="h2" className="max-w-[640px]">
            En 2024, nous avons remporté le concours OseEntreprendre.
          </Typography>

          <Typography variant="p-large" className="max-w-[480px] ">
           <span className="sm:block hidden">Oriana Solutions est une agence digitale spécialisée dans le développement d'applications sur mesure.</span> <span className="sm:hidden">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</span>
          </Typography>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-[420px]  rounded-[18px] overflow-hidden ">
            <Image
              src="/png/highlight.png"
              alt="Award photo"
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
