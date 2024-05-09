import Header from "@/components/layout/header";
import AboutSection from "@/components/layout/about";
import HeroSection from "@/components/layout/hero-section";
import ShowcaseSection from "@/components/layout/showcase";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ShowcaseSection />
			</main>
		</>
	);
}
