"use client";

import { motion } from "framer-motion";
import { DefaultContainer } from "../default-container";
import ShowcaseCarousel from "../showcase-carousel";

const ShowcaseSection = () => {
	return (
		<div className=" bg-zinc-100 w-full">
			<DefaultContainer>
				<section
					id="#showcase"
					className="h-[1335px] md:h-[850px] flex flex-col items-center justify-center w-full mx-auto"
				>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center justify-center mb-8"
					>
						<h2 className="text-2xl mt-64 md:-mt-0 md:text-3xl font-semibold text-zinc-900 mb-5">
							Showcase
						</h2>
						<p className="max-w-[768px] text-sm md:text-lg text-center text-zinc-800 leading-relaxed">
							Discover a showcase of our finest projects, each a testament to
							innovative design and meticulous craftsmanship that transforms
							visionary ideas into tangible realities.
						</p>
					</motion.div>
					<ShowcaseCarousel />
				</section>
			</DefaultContainer>
		</div>
	);
};

export default ShowcaseSection;
