import { stats } from "@/data/stats";
import Container from "../shared/container";
import { Typography } from "@/components/ui/typography";

export default function AboutSection() {
  return (
    <Container parentStyle="hidden lg:flex bg-surface-muted rounded-[20px]"  className="py-[52px]!">
      <div className="flex flex-col gap-10 xl:gap-[70px] 2xl:gap-30 w-full">
        <Typography variant="h5" className="max-w-full xl:max-w-[677px]">
          De la stratégie à l&apos;exécution, nous connectons les entreprises
          aux projets d&apos;impact pour bâtir des partenariats rentables.
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-6   w-full">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-surface-light rounded-[20px] p-5 xl:p-6 flex flex-col gap-7.5 xl:gap-16"
            >
              <span className="text-[11px] xl:text-[14px] leading-[20px] tracking-[1.68px] uppercase text-muted font-normal">
                {stat.label}
              </span>
              <Typography variant="h6">
                {stat.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
