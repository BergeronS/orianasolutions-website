import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import values from "@/data/values";

export default function Values() {
  return (
    <Container
      parentStyle="bg-transparent"
      className=" sm:max-w-[90%] w-full"
    >
      <div className="flex flex-col gap-16 items-center text-center">
       <div className="flex flex-col gap-4">
         <div className="sm:block hidden">
          <Tag>Boost your productivity</Tag>
        </div>
        <div className="sm:flex flex-col gap-6  hidden">
          <Typography variant="h2" >
            Nos valeurs
          </Typography>

          <Typography variant="p-hero" className="max-w-[620px] ">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </Typography>
        </div>
       </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
          {values.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[50%] bg-white border border-[#E6E6E6] rounded-2xl p-7 shadow-xl flex flex-col items-center text-center"
            >
              <h3 className="font-heading text-xl md:text-[20px] text-heading font-normal mb-3">
                {item.title}
              </h3>

              <p className="text-xs text-[#6b7280] leading-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
