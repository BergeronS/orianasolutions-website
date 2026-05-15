import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

export default function AboutSectionMobileBlock() {
  return (
    <Container parentStyle="bg-primary-light md:bg-transparent relative rounded-b-[30px] md:rounded-b-none" className="md:hidden">
      <div className="w-full  py-8 gap-4 flex flex-col items-center text-center">
        <div className="mb-3">
          <Tag>Everything you need</Tag>
        </div>

        <Typography variant="h2" className="text-[54px]">
          À propos
        </Typography>

        <Typography variant="p-hero">
          Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation IA sur mesure.
        </Typography>
      </div>
    </Container>
  );
}
