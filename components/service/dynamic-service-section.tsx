import Image from "next/image";
import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";

interface DynamicServiceSectionProps {
  title: string;
  description: string[];
  image: string;
  reverse?: boolean;
  className?: string;
}

export default function DynamicServiceSection({
  title,
  description,
  image,
  reverse = false,
  className,
}: DynamicServiceSectionProps) {
  return (
    <Container className={`w-full sm:max-w-[90%] pt-0! ${className || ""}`}>
      <div
        className={` flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-14 `}
      >
        {/* IMAGE */}
        <div className={`flex-1 w-full flex  ${
          reverse ? "lg:justify-end justify-center" : "lg:justify-start justify-center"
        } `}>
          <div className=" sm:w-[320px] w-full lg:w-[420px] rounded-[24px] overflow-hidden bg-[#F3F3F3]">
            <Image
              src={image}
              alt={title}
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-6 sm:text-left text-center">
          <Typography variant="h3" className="max-w-[460px]">
            {title}
          </Typography>

          {/* MULTIPLE PARAGRAPHS */}
          <div className="flex flex-col gap-5">
            {description.map((paragraph, index) => (
              <Typography
                key={index}
                variant="p-large"
                className="max-w-[450px]"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}