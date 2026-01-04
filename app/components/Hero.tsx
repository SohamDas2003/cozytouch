import Image from "next/image";
import hero from "../../public/hero.jpg";
import logo from "../../public/bg.jpg";
import { CALL_LINK } from "../constants";
import Reveal from "./Reveal";

export default function Hero() {
	return (
		<header className="relative min-h-screen flex items-center justify-center pt-20">
			{/* Background Image */}
			{/* <div className="absolute inset-0 z-0">
				<Image
					src={logo}
					alt="Relaxing spa environment"
					fill
					className="object-cover opacity-40"
					priority
				/>
			</div> */}

			{/* Overlay Gradient */}
			{/* <div className="absolute inset-0 bg-linear-to-b from-[#F6F1E8]/50 via-transparent to-[#F6F1E8]/80 z-0"></div> */}

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Column - Text */}
					<Reveal
						className="text-center md:text-left space-y-8"
						delay={80}>
						<Reveal delay={160}>
							<h1 className="text-5xl md:text-7xl font-light text-[#3A3A3A] leading-tight">
								CozyTouch
								<span className="block text-[#C47A5A] mt-2">
									Spa & Wellness
								</span>
							</h1>
						</Reveal>
						<Reveal delay={240}>
							<p className="text-xl md:text-2xl text-[#77716B] font-light leading-relaxed max-w-xl">
								Experience premium spa and massage services in the comfort of
								your own home. CozyTouch Spa brings skilled therapists and
								relaxing treatments right to your doorstep.
							</p>
						</Reveal>
						<Reveal delay={320}>
							<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
								<a
									href={CALL_LINK}
									className="bg-[#C47A5A] text-white px-10 py-4 rounded-full text-lg hover:bg-[#B36A4A] hover:shadow-xl transition-all duration-300 shadow-lg inline-block text-center card-lift">
									Book Appointment
								</a>
								<a
									href="#services"
									className="bg-transparent border-2 border-[#9DB6A0] text-[#3A3A3A] px-10 py-4 rounded-full text-lg hover:bg-[#9DB6A0] hover:text-white transition-all duration-300 inline-block text-center card-lift">
									View Services
								</a>
							</div>
						</Reveal>
						{/* Stats */}
						<Reveal delay={420}>
							<div className="flex gap-8 justify-center md:justify-start pt-8">
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">5+</div>
									<div className="text-sm text-[#77716B]">Years Experience</div>
								</div>
								<div className="border-l border-[#EADFCC]"></div>
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">1K+</div>
									<div className="text-sm text-[#77716B]">Happy Clients</div>
								</div>
								<div className="border-l border-[#EADFCC]"></div>
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">10+</div>
									<div className="text-sm text-[#77716B]">Services</div>
								</div>
							</div>
						</Reveal>
					</Reveal>

					{/* Right Column - Image Card */}
					<Reveal delay={220}>
						<div className="relative hidden md:block">
							<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-float-slow">
								<Image
									src={hero}
									alt="Spa treatment"
									fill
									className="object-cover"
								/>
							</div>

							{/* Decorative Elements */}
							<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9DB6A0] rounded-full opacity-20 blur-2xl animate-pulse-glow"></div>
							<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C47A5A] rounded-full opacity-20 blur-2xl animate-pulse-glow"></div>
						</div>
					</Reveal>
				</div>
			</div>

			{/* Scroll Indicator */}
			{/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
				<div className="flex flex-col items-center gap-2 animate-bounce">
					<span className="text-[#77716B] text-sm">Scroll to explore</span>
					<svg
						className="w-6 h-6 text-[#C47A5A]"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div> */}
		</header>
	);
}
