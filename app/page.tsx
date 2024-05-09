import Header from "@/components/layout/header";
import AboutSection from "@/components/layout/about";
import HeroSection from "@/components/layout/hero-section";
import ShowcaseSection from "@/components/layout/showcase";
import ContactSection from "@/components/layout/contact";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ShowcaseSection />
				<ContactSection />
			</main>
		</>
	);
}
