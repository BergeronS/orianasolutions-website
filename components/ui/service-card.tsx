import Button from "./button";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className=" w-full 2xl:w-[776px] bg-white border shadow-xl md:shadow-none border-[#DADADA] rounded-2xl p-6">
      <div className="flex flex-col items-center sm:items-start gap-3">
        <h3 className="font-heading font-normal text-xl leading-7 md:text-2xl md:leading-8 text-heading">
          {title}
        </h3>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-center sm:text-start text-sm leading-5.5 md:text-base md:leading-6 text-[#646464] ">
            {description}
          </p>
          <Button
            href={href}
            className="shrink-0 w-fit! text-black! bg-[#D6E7FD]!"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
}
