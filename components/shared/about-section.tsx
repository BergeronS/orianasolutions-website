import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

interface AboutSectionMobileBlockProps {
  tag?: string;
  title: string;
  description: string;
  parentStyle?: string;
  className?: string;
}

export default function AboutSectionMobileBlock({
  tag,
  title,
  description,
  parentStyle = "bg-primary-light md:bg-transparent relative rounded-b-[30px] md:rounded-b-none",
  className = "md:hidden",
}: AboutSectionMobileBlockProps) {
  return (
    <Container parentStyle={parentStyle} className={className}>
      <div className="w-full py-8 gap-4 flex flex-col items-center text-center">
        
        {tag && (
          <div className="mb-3">
            <Tag>{tag}</Tag>
          </div>
        )}

        <Typography variant="h2" className="text-[54px]">
          {title}
        </Typography>

        <Typography variant="p-hero">
          {description}
        </Typography>
      </div>
    </Container>
  );
}