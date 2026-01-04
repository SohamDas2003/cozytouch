import { CALL_LINK } from "../constants";
import Reveal from "./Reveal";

export default function CTA() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<Reveal>
					<h2 className="text-4xl font-light text-[#3A3A3A] mb-6">
						Ready to Unwind?
					</h2>
				</Reveal>
				<Reveal delay={120}>
					<p className="text-[#77716B] text-xl mb-8">
						Book your appointment today and experience the CozyTouch difference
					</p>
				</Reveal>
				<Reveal delay={200}>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href={CALL_LINK}
							className="bg-[#C47A5A] text-white px-10 py-4 rounded-full text-lg hover:bg-[#B36A4A] transition-all duration-300 shadow-lg inline-block card-lift">
							Schedule Now
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
