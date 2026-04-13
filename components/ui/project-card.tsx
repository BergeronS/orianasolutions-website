import Image from "next/image";
import Link from "next/link";
import { ArrowDiagonal, ArrowRightStraight } from "@/svgs";

interface ProjectCardProps {
  title: string;
  image: string;
  href?: string;
}

export default function ProjectCard({ title, image, href }: ProjectCardProps) {
  return (
    <Link href={href || "#"} className="flex flex-col gap-5 w-full sm:w-fit group">
      <div className="  relative w-full sm:w-80 3xl:w-95 3xl:h-92.5 h-80 rounded-[30px] overflow-hidden">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 480px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rounded-7.5"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[#393939] font-heading font-normal text-lg leading-5.5 md:text-2xl ">
          {title}
        </span>

        <span className="flex items-center gap-2 text-[#BDBDBD] transition-colors group-hover:text-primary">
          Site Web
          {/* Diagonal — hidden on hover */}
          <ArrowDiagonal className="group-hover:hidden text-[#D3D3D3] transition-colors group-hover:text-primary" />

          {/* Straight — shown on hover */}
          <ArrowRightStraight className="hidden group-hover:block text-[#BDBDBD] transition-colors group-hover:text-primary" />
        </span>
      </div>
    </Link>
  );
}
