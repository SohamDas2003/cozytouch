import Image from "next/image";
import about from "../../public/about.jpg";
import Reveal from "./Reveal";

export default function About() {
	return (
		<section
			id="about"
			className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<Reveal delay={80}>
						<h2 className="text-4xl font-light text-[#3A3A3A] mb-6">
							Home Spa, Done Right
						</h2>
						<p className="text-[#77716B] text-lg leading-relaxed mb-4">
							CozyTouch brings a full spa experience to your doorstep. From Deep
							Tissue, Aromatherapy, and Swedish Massage to focused Back and Head
							Oil sessions, our therapists tailor every treatment to how you
							feel today.
						</p>
						<p className="text-[#77716B] text-lg leading-relaxed">
							Open daily from 8AM to 11PM, we make relaxation convenient and
							safe, so you can recharge without leaving home.
						</p>
					</Reveal>
					<Reveal delay={180}>
						<div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={about}
								alt="Peaceful spa interior"
								fill
								className="object-cover"
							/>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
