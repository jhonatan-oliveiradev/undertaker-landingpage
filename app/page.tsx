import Header from "@/components/layout/header";
import AboutSection from "@/components/layout/about";
import HeroSection from "@/components/layout/hero-section";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
			</main>
		</>
	);
}
