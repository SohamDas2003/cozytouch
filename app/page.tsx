import Image from "next/image";
import logo from "../public/final_logo.png";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#F6F1E8]">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1E8]/95 backdrop-blur-sm border-b border-[#EADFCC]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-[#C47A5A] rounded-full flex items-center justify-center">
								<span className="text-white text-xl">✨</span>
							</div>
							<span className="text-2xl font-light text-[#3A3A3A] tracking-wide">
								CozyTouch
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#services"
								className="text-[#77716B] hover:text-[#C47A5A] transition-colors duration-200">
								Services
							</a>
							<a
								href="#about"
								className="text-[#77716B] hover:text-[#C47A5A] transition-colors duration-200">
								About
							</a>
							<a
								href="#testimonials"
								className="text-[#77716B] hover:text-[#C47A5A] transition-colors duration-200">
								Testimonials
							</a>
							<a
								href="#contact"
								className="text-[#77716B] hover:text-[#C47A5A] transition-colors duration-200">
								Contact
							</a>
							<button className="bg-[#C47A5A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#B36A4A] transition-all duration-300">
								Book Now
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button className="md:hidden text-[#3A3A3A]">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<header className="relative min-h-screen flex items-center justify-center pt-20">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src={logo}
						alt="Relaxing spa environment"
						fill
						className="object-cover opacity-20"
						priority
					/>
				</div>

				{/* Overlay Gradient */}
				<div className="absolute inset-0 bg-linear-to-b from-[#F6F1E8]/50 via-transparent to-[#F6F1E8]/80 z-0"></div>

				{/* Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left Column - Text */}
						<div className="text-center md:text-left space-y-8">
							<div className="inline-block">
								<span className="bg-[#9DB6A0] text-white px-4 py-2 rounded-full text-sm font-medium">
									Welcome to Serenity
								</span>
							</div>

							<h1 className="text-5xl md:text-7xl font-light text-[#3A3A3A] leading-tight">
								CozyTouch
								<span className="block text-[#C47A5A] mt-2">
									Spa & Wellness
								</span>
							</h1>

							<p className="text-xl md:text-2xl text-[#77716B] font-light leading-relaxed max-w-xl">
								Experience the art of relaxation through personalized massage
								therapy and holistic wellness treatments.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
								<button className="bg-[#C47A5A] text-white px-10 py-4 rounded-full text-lg hover:bg-[#B36A4A] hover:shadow-xl transition-all duration-300 shadow-lg">
									Book Appointment
								</button>
								<button className="bg-transparent border-2 border-[#9DB6A0] text-[#3A3A3A] px-10 py-4 rounded-full text-lg hover:bg-[#9DB6A0] hover:text-white transition-all duration-300">
									View Services
								</button>
							</div>

							{/* Stats */}
							<div className="flex gap-8 justify-center md:justify-start pt-8">
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">10+</div>
									<div className="text-sm text-[#77716B]">Years Experience</div>
								</div>
								<div className="border-l border-[#EADFCC]"></div>
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">5K+</div>
									<div className="text-sm text-[#77716B]">Happy Clients</div>
								</div>
								<div className="border-l border-[#EADFCC]"></div>
								<div>
									<div className="text-3xl font-light text-[#C47A5A]">15+</div>
									<div className="text-sm text-[#77716B]">Services</div>
								</div>
							</div>
						</div>

						{/* Right Column - Image Card */}
						<div className="relative hidden md:block">
							<div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src={logo}
									alt="Spa treatment"
									fill
									className="object-cover"
								/>
								{/* Floating Card */}
								<div className="absolute bottom-8 left-8 right-8 bg-[#F6F1E8]/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-[#77716B] text-sm mb-1">
												Special Offer
											</p>
											<p className="text-[#3A3A3A] text-xl font-light">
												First Session 20% Off
											</p>
										</div>
										<div className="bg-[#D8B98A] w-12 h-12 rounded-full flex items-center justify-center">
											<span className="text-white text-xl">🎁</span>
										</div>
									</div>
								</div>
							</div>

							{/* Decorative Elements */}
							<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#9DB6A0] rounded-full opacity-20 blur-2xl"></div>
							<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C47A5A] rounded-full opacity-20 blur-2xl"></div>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
				</div>
			</header>

			{/* About Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-light text-[#3A3A3A] mb-6">
								Welcome to Tranquility
							</h2>
							<p className="text-[#77716B] text-lg leading-relaxed mb-4">
								At CozyTouch Spa, we believe in the healing power of touch and
								the importance of self-care. Our experienced therapists create a
								personalized journey to wellness, helping you escape the stress
								of daily life.
							</p>
							<p className="text-[#77716B] text-lg leading-relaxed">
								Each treatment is carefully designed to restore balance, promote
								relaxation, and leave you feeling refreshed and renewed.
							</p>
						</div>
						<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/spa-interior.jpg"
								alt="Peaceful spa interior"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-4 bg-[#EADFCC]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-light text-[#3A3A3A] text-center mb-16">
						Our Services
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{/* Service 1 */}
						<div className="bg-[#F6F1E8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative h-64">
								<Image
									src="/massage-therapy.jpg"
									alt="Massage therapy"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<div className="inline-block bg-[#D8B98A] text-white px-3 py-1 rounded-full text-sm mb-3">
									Popular
								</div>
								<h3 className="text-2xl font-light text-[#3A3A3A] mb-3">
									Signature Massage
								</h3>
								<p className="text-[#77716B] mb-4">
									A customized full-body massage combining Swedish and deep
									tissue techniques for ultimate relaxation.
								</p>
								<p className="text-[#C47A5A] font-semibold text-xl">
									60 min - $120
								</p>
							</div>
						</div>

						{/* Service 2 */}
						<div className="bg-[#F6F1E8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative h-64">
								<Image
									src="/hot-stone.jpg"
									alt="Hot stone therapy"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<div className="inline-block bg-[#9DB6A0] text-white px-3 py-1 rounded-full text-sm mb-3">
									Premium
								</div>
								<h3 className="text-2xl font-light text-[#3A3A3A] mb-3">
									Hot Stone Therapy
								</h3>
								<p className="text-[#77716B] mb-4">
									Heated basalt stones melt away tension while promoting deep
									muscle relaxation and improved circulation.
								</p>
								<p className="text-[#C47A5A] font-semibold text-xl">
									90 min - $160
								</p>
							</div>
						</div>

						{/* Service 3 */}
						<div className="bg-[#F6F1E8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative h-64">
								<Image
									src="/aromatherapy.jpg"
									alt="Aromatherapy"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<div className="inline-block bg-[#D8B98A] text-white px-3 py-1 rounded-full text-sm mb-3">
									Relaxing
								</div>
								<h3 className="text-2xl font-light text-[#3A3A3A] mb-3">
									Aromatherapy Bliss
								</h3>
								<p className="text-[#77716B] mb-4">
									Essential oils combined with gentle massage techniques to calm
									the mind and restore inner peace.
								</p>
								<p className="text-[#C47A5A] font-semibold text-xl">
									75 min - $140
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-light text-[#3A3A3A] text-center mb-16">
						Why Choose CozyTouch
					</h2>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-[#9DB6A0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl">✨</span>
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">Expert Therapists</h3>
							<p className="text-[#77716B]">
								Certified professionals with years of experience
							</p>
						</div>
						<div className="text-center">
							<div className="bg-[#C47A5A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl">🕊️</span>
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">
								Serene Environment
							</h3>
							<p className="text-[#77716B]">
								Tranquil spaces designed for your comfort
							</p>
						</div>
						<div className="text-center">
							<div className="bg-[#D8B98A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl">🌿</span>
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">Natural Products</h3>
							<p className="text-[#77716B]">
								Organic oils and sustainable practices
							</p>
						</div>
						<div className="text-center">
							<div className="bg-[#9DB6A0] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl">💆</span>
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">Custom Treatments</h3>
							<p className="text-[#77716B]">
								Personalized to your unique needs
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 px-4 bg-[#EADFCC]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-light text-[#3A3A3A] mb-16">
						What Our Clients Say
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-[#F6F1E8] p-8 rounded-2xl shadow-lg">
							<p className="text-[#77716B] text-lg italic mb-4">
								&quot;The most relaxing experience I&apos;ve ever had. The therapists
								truly understand the art of massage. I left feeling like a new
								person!&quot;
							</p>
							<p className="text-[#C47A5A] font-semibold">- Sarah M.</p>
						</div>
						<div className="bg-[#F6F1E8] p-8 rounded-2xl shadow-lg">
							<p className="text-[#77716B] text-lg italic mb-4">
								&quot;CozyTouch Spa is my monthly sanctuary. The atmosphere, the
								service, everything is perfect. Highly recommend the hot stone
								therapy!&quot;
							</p>
							<p className="text-[#C47A5A] font-semibold">- James L.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact/CTA Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-light text-[#3A3A3A] mb-6">
						Ready to Unwind?
					</h2>
					<p className="text-[#77716B] text-xl mb-8">
						Book your appointment today and experience the CozyTouch difference
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button className="bg-[#C47A5A] text-white px-10 py-4 rounded-full text-lg hover:bg-[#B36A4A] transition-all duration-300 shadow-lg">
							Schedule Now
						</button>
						<button className="bg-[#9DB6A0] text-white px-10 py-4 rounded-full text-lg hover:bg-[#8DA690] transition-all duration-300 shadow-lg">
							Gift Certificates
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#3A3A3A] text-white py-12 px-4">
				<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-2xl font-light mb-4 text-[#D8B98A]">
							CozyTouch Spa
						</h3>
						<p className="text-[#EADFCC]">
							Your journey to wellness begins here
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4 text-[#D8B98A]">Hours</h4>
						<p className="text-[#EADFCC]">Monday - Friday: 9AM - 8PM</p>
						<p className="text-[#EADFCC]">Saturday: 10AM - 6PM</p>
						<p className="text-[#EADFCC]">Sunday: 10AM - 5PM</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4 text-[#D8B98A]">Contact</h4>
						<p className="text-[#EADFCC]">📞 (555) 123-4567</p>
						<p className="text-[#EADFCC]">📧 info@cozytouchspa.com</p>
						<p className="text-[#EADFCC]">📍 123 Serenity Lane</p>
					</div>
				</div>
				<div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#77716B] text-center text-[#EADFCC]">
					<p>&copy; 2025 CozyTouch Spa. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
