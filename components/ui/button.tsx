import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-[5.59px]  w-full md:w-fit rounded-[13.98px] text-base md:text-[22.36px] leading-[27.06px] tracking-[-0.45px] transition-opacity hover:opacity-90 py-2.5 px-[15px] sm:py-[13.98px] sm:px-[20.96px]";

  const variants = {
    primary: "bg-primary-dark text-white font-medium  ",
    outline: "border-[0.61px] border-outline font-normal ",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
      {icon}
    </button>
  );
}
