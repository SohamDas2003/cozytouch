import Reveal from "./Reveal";

const testimonials = [
	{
		quote:
			"Booked a full body massage at home after a hectic week. The therapist arrived on time, setup was clean, and I felt lighter instantly!",
		author: "Ananya S., Mumbai",
	},
	{
		quote:
			"Their head oil massage is incredible. Perfect pressure, relaxing aroma oils, and I could unwind without stepping out.",
		author: "Rahul K., Dadar",
	},
	{
		quote:
			"I combined a pedicure with a foot massage. Super hygienic, professional, and my feet feel brand new.",
		author: "Meera T., Colaba",
	},
	{
		quote:
			"Deep tissue session released weeks of back stiffness. The therapist customized it exactly to my problem areas.",
		author: "Arjun V., Colaba",
	},
];

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="py-20 px-4 bg-[#EADFCC]">
			<div className="max-w-4xl mx-auto text-center">
				<Reveal>
					<h2 className="text-4xl font-light text-[#3A3A3A] mb-16">
						What Our Clients Say
					</h2>
				</Reveal>
				<div className="grid md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<Reveal
							key={index}
							className="bg-[#F6F1E8] p-8 rounded-2xl shadow-lg card-lift"
							delay={index * 120}>
							<p className="text-[#77716B] text-lg italic mb-4">
								&quot;{testimonial.quote}&quot;
							</p>
							<p className="text-[#C47A5A] font-semibold">
								- {testimonial.author}
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
