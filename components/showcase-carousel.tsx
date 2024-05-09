import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "./ui/carousel";

const carouselItems = [
	{
		src: "/carousel-image-1.jpg",
		alt: "Imagem 1"
	},
	{
		src: "/carousel-image-2.jpg",
		alt: "Imagem 2"
	},
	{
		src: "/carousel-image-3.jpg",
		alt: "Imagem 3"
	},
	{
		src: "/carousel-image-4.jpg",
		alt: "Imagem 4"
	},
	{
		src: "/carousel-image-5.jpg",
		alt: "Imagem 4"
	},
	{
		src: "/carousel-image-6.jpg",
		alt: "Imagem 4"
	}
];

const ShowcaseCarousel = () => {
	return (
		<>
			<Carousel className="w-full">
				<CarouselContent>
					{carouselItems.map((item, index) => (
						<CarouselItem key={index} className="basis-1/3">
							<motion.div
								initial={{ opacity: 0, y: 100, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 100, scale: 0.5 }}
								transition={{ duration: 0.3, delay: 0.3 }}
								className="p-0"
							>
								<Card>
									<CardContent className="flex aspect-auto items-center justify-center p-0">
										<Image
											src={item.src}
											alt={item.alt}
											width={0}
											height={0}
											sizes="100vw"
											className="h-full w-full object-cover"
										/>
									</CardContent>
								</Card>
							</motion.div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="-left-4" />
				<CarouselNext className="-right-4" />
			</Carousel>
		</>
	);
};

export default ShowcaseCarousel;
