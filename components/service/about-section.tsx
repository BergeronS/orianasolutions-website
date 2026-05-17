import Image from "next/image";
import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { Arrow } from "@/svgs";

export default function ServiceAboutSection() {
  return (
    <Container>
      <div className="w-full flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col sm:items-start items-center gap-10">
          <div className="flex flex-col sm:gap-6 gap-4 sm:items-start items-center sm:text-left text-center">
            <div className="flex flex-col gap-14">
              <div className="w-full sm:block hidden">
              <Tag>À propos de nous</Tag>
            </div>

            <Typography variant="h3" className="max-w-[560px]">
              Pourquoi travailler
              <br />
              avec nous
            </Typography>
            </div>

            <Typography
              variant="p-large"
              className="sm:max-w-[460px] w-full text-[#535353]"
            >
              {
                "Oriana Solutions est une agence digitale spécialisée dans le développement d'applications sur mesure."
              }
            </Typography>
          </div>

          <div className="sm:block hidden">
            <Button
              href="/about"
              variant="outline"
              icon={<Arrow />}
              className="border-0! font-medium! whitespace-nowrap! lg:border-[0.61px]!"
            >
              À propos
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-end">
          <div className="sm:w-[320px] w-full lg:w-[420px] rounded-[20px] overflow-hidden">
            <Image
              src="/png/about2.png"
              alt="about"
              width={900}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}