import Image from "next/image";
import { DefaultContainer } from "../default-container";
import Link from "next/link";

const AboutSection = () => {
	return (
		<DefaultContainer>
			<section
				id="#about"
				className="h-[300px] md:h-[718px] flex flex-col md:flex-row items-center justify-around w-full"
			>
				<div className="hidden md:flex items-center justify-center">
					<Image
						className="shadow-sm"
						src="/about-image.jpg"
						alt="About image"
						width={487}
						height={457}
					/>
				</div>
				<div>
					<div className="flex flex-col justify-center items-center h-full w-full">
						<div className="mt-12 md:mt-0 bg-zinc-900 w-[312px] h-[177px] md:w-[585px] md:h-[182px] rounded-3xl">
							<h2 className="text-2xl font-semibold leading-tight text-left text-white my-5 mx-8">
								Modern Design Architecture
							</h2>
							<p className="text-sm md:text-lg text-left text-zinc-400 mb-5 mx-8">
								Explore the elegance of modernism with our architectural designs
								that blend functionality with aesthetic precision to create
								spaces that are both innovative and inviting.
							</p>
						</div>
						<Link
							className="text-sm font-semibold justify-center md:justify-start md:text-lg underline hover:no-underline w-full flex mt-6"
							href="#showcase"
						>
							Know more about your work
						</Link>
					</div>
				</div>
			</section>
		</DefaultContainer>
	);
};

export default AboutSection;
