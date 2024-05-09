"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DefaultContainer } from "../default-container";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const HeroSection = () => {
	return (
		<DefaultContainer>
			<section className="h-[335px] md:h-[850px] flex items-center justify-between w-full">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col justify-center items-center h-full w-[42rem]"
				>
					<h1 className="text-2xl md:text-5xl font-semibold text-left text-zinc-900 mb-6 pr-12 leading-relaxed">
						We build your dream house with our passion.
					</h1>
					<p className="text-sm md:text-lg text-left text-zinc-500 mb-6 pr-16">
						Welcome to your future home. With passion and precision, we turn
						your dream into reality. Let us craft a sanctuary tailored precisely
						to your aspirations, ensuring every detail reflects your personal
						style and exceeds your expectations. Together, we create more than a
						house—we create your dream home.
					</p>

					<div className="flex justify-between w-full items-center">
						<Link
							href="#contact"
							className="bg-zinc-900 border border-transparent text-white text-xs md:text-xl px-5 py-1 md:px-6 md:py-2 transition-all hover:border hover:border-zinc-900 hover:text-zinc-900 hover:bg-zinc-100 rounded-full"
						>
							Get started
						</Link>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 200, scale: 0.5 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 200, scale: 0.5 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col gap-8 origin-center"
					>
						<div className="flex items-center justify-between py-12 gap-16">
							<Card className="px-6 rounded-3xl bg-[#C6D9E1] border-none">
								<CardHeader>
									<CardTitle>178K+</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										Lorem ipsum dolor amet, consectetur adipiscing elit.
										Faucibus in libero.Lorem ipsum dolor amet,
									</p>
								</CardContent>
							</Card>
							<Card className="px-6 rounded-3xl border-none bg-zinc-100">
								<CardHeader>
									<CardTitle>362</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										Lorem ipsum dolor amet, consectetur adipiscing elit.
										Faucibus in libero.Lorem ipsum dolor amet,
									</p>
								</CardContent>
							</Card>
						</div>
						<Card className="bg-zinc-100 rounded-3xl border-none">
							<CardContent className="px-12 py-4 flex items-center justify-between ">
								<div>
									<h2 className="text-2xl font-semibold leading-none tracking-tight pb-6">
										Title
									</h2>
									<p>
										Lorem ipsum dolor amet, consectetur adipiscing elit.
										Faucibus in libero.Lorem ipsum dolor amet. Lorem ipsum dolor
										amet, consectetur adipiscing elit.
									</p>
								</div>
								<Image
									src="/card-image.png"
									alt="Casa de luxo com pintura em branco"
									width={188}
									height={113}
								/>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className="hidden lg:flex items-center justify-center"
				>
					<div className="absolute flex items-center justify-center">
						{" "}
						<Image
							className="relative -top-[370px]"
							src="/hero-circle.png"
							alt="Lorem ipsum dolor amet"
							width={165}
							height={165}
						/>
					</div>
					<Image src="/hero.png" alt="Hero image" width={660} height={850} />
				</motion.div>
			</section>
		</DefaultContainer>
	);
};

export default HeroSection;
