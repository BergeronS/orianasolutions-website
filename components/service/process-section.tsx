import Container from "@/components/shared/container";
import { Typography } from "@/components/ui/typography";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <Container parentStyle="sm:bg-primary-light bg-white" className="sm:max-w-[85%] w-full">
      <div className="flex flex-col sm:items-start sm:text-left gap-6 ">
        <Typography variant="h3" className="sm:text-start text-center">Notre processus</Typography>

        <p className="max-w-[650px] !sm:text-[18px] !text-[12px] ">
          Our platform managing personal finances or growing your investment portfolio, our system
          integrates the latest technology to help you make smarter financial decisions with ease.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4 gap-y-6 mt-4 w-full font-heading">
          {processSteps.map((step, idx) => {
            const isFirstRow = idx < 2;

            return (
              <div
                key={step.id}
                className={`
                  sm:bg-[#F1F7FF]  bg-primary-light rounded-xl p-4 
                  ${isFirstRow ? "md:col-span-3" : "md:col-span-2"}
                `}
              >
                <div className="text-xs text-[#575757] mb-3 font-heading">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 className="font-heading font-normal text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-heading mb-2">
                  {step.title}
                </h3>

                <p className="text-xs 2xl:text-sm 3xl:text-base text-[#6B7280] leading-6">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}