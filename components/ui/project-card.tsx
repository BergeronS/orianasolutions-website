import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  image: string;
  href?: string;
}

export default function ProjectCard({ title, image, href }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-5 w-full xs:w-fit ">
      <div className="  relative w-full xs:w-95 h-92.5 rounded-7.5 overflow-hidden group">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[#393939] font-heading font-normal text-lg leading-5.5 md:text-2xl ">
          {title}
        </span>

        {/* Arrow up-right icon */}
        <Link href={"#"} className="flex items-center gap-2 text-[#BDBDBD]">
          Site Web
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0416 4.95834L4.95831 12.0417"
              stroke="#D3D3D3"
              strokeWidth="1.41667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.66669 4.95834H12.0417V11.3333"
              stroke="#D3D3D3"
              strokeWidth="1.41667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
