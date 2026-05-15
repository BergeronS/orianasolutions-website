import Container from "@/components/shared/container";
import Tag from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

export default function Mission() {
	return (
		<Container className="py-16 ">
			<div className="w-full flex flex-col items-center text-center">
				<div className="mb-4">
					<Tag>Notre mission</Tag>
				</div>

				<Typography variant="h4" className="max-w-[850px]">
					<span className="sm:block hidden">At Bienes™ we specialize in connecting buyers, sellers, and renters with exceptional properties. With years of expertise and a customer-first approach, we make real estate simple and stress-free.</span>
                    <span className="sm:hidden !text-[24px]">Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes et performantes.</span>
				</Typography>
			</div>
		</Container>
	);
}
