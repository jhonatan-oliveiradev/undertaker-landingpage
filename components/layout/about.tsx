"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DefaultContainer } from "../default-container";
import Link from "next/link";

const AboutSection = () => {
	return (
		<DefaultContainer>
			<section
				id="#about"
				className="h-[300px] md:h-[718px] flex flex-col md:flex-row items-center justify-around w-full"
			>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -100 }}
					transition={{ duration: 0.5 }}
					className="hidden md:flex items-center justify-center"
				>
					<Image
						className="shadow-sm"
						src="/about-image.jpg"
						alt="About image"
						width={487}
						height={457}
					/>
				</motion.div>
				<div>
					<div className="flex flex-col justify-center items-center h-full w-full">
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
							className="mt-12 md:mt-0 bg-zinc-900 w-[312px] h-[177px] md:w-[585px] md:h-[182px] rounded-3xl"
						>
							<h2 className="text-2xl font-semibold leading-tight text-left text-white my-5 mx-8">
								Modern Design Architecture
							</h2>
							<p className="text-sm md:text-lg text-left text-zinc-400 mb-5 mx-8">
								Explore the elegance of modernism with our architectural designs
								that blend functionality with aesthetic precision to create
								spaces that are both innovative and inviting.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 200, scale: 0.5 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 200, scale: 0.5 }}
							transition={{ duration: 0.5 }}
							className="origin-center justify-center md:justify-start w-full flex mt-6"
						>
							<Link
								className="text-sm font-semibold md:text-lg underline hover:no-underline"
								href="#showcase"
							>
								Know more about your work
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</DefaultContainer>
	);
};

export default AboutSection;
