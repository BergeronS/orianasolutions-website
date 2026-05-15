import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";

interface TeamCardProps {
  name: string;
  role?: string;
  image: string;
  href?: string;
}

export default function TeamCard({ name, role, image, href }: TeamCardProps) {
  return (
    <div className="flex flex-col gap-4 items-start w-full max-w-[360px]">
      <div className="w-full rounded-[20px] overflow-hidden ">
        <Image
          src={image}
          alt={name}
          width={520}
          height={520}
          className="w-full h-auto object-cover block"
        />
      </div>

      <div className="flex items-start justify-between gap-3 w-full">
        <div className="flex-1 flex flex-col gap-1.5">
          <Typography variant="h6" className="!text-[20px] text-start">
            {name}
          </Typography>
          {role && (
            <Typography variant="p-base" className="text-[#6b7280] !text-[16px] text-start">
              {role}
            </Typography>
          )}
        </div>

        {href && (
          <Link
            href={href}
            className="inline-flex items-center justify-center w-8 h-8 "
          >
            <Image
              src="/svg/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
              style={{ height: "auto" }}
              priority
            />
          </Link>
        )}
      </div>
    </div>
  );
}
