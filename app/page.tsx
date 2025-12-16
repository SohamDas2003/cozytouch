import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#F6F1E8]">
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Benefits />
			<Testimonials />
			<CTA />
			<Footer />
		</div>
	);
}
