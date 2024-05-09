import Image from "next/image";
import { DefaultContainer } from "../default-container";
import ShowcaseCarousel from "../showcase-carousel";

const ShowcaseSection = () => {
	return (
		<div className=" bg-zinc-100 w-full">
			<DefaultContainer>
				<section className="h-[1335px] md:h-[850px] flex flex-col items-center justify-center w-full mx-auto">
					<div className="flex flex-col items-center justify-center mb-8">
						<h1 className="text-2xl mt-64 md:-mt-0 md:text-3xl font-semibold text-zinc-900 mb-5">
							Showcase
						</h1>
						<p className="max-w-[768px] text-sm md:text-lg text-center text-zinc-800 leading-relaxed">
							Discover a showcase of our finest projects, each a testament to
							innovative design and meticulous craftsmanship that transforms
							visionary ideas into tangible realities.
						</p>
					</div>
					<ShowcaseCarousel />
				</section>
			</DefaultContainer>
		</div>
	);
};

export default ShowcaseSection;
