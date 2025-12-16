const benefits = [
	{
		icon: "✨",
		title: "Expert Therapists",
		description: "Certified professionals with years of experience",
		bgColor: "bg-[#9DB6A0]",
	},
	{
		icon: "🏡",
		title: "Convenience",
		description:
			"We bring spa-quality treatments to your home — relaxing, safe, and on your schedule.",
		bgColor: "bg-[#9DB6A0]",
	},
	{
		icon: "🌿",
		title: "Natural Products",
		description: "Organic oils and sustainable practices",
		bgColor: "bg-[#D8B98A]",
	},
	{
		icon: "💆",
		title: "Custom Treatments",
		description: "Personalized to your unique needs",
		bgColor: "bg-[#9DB6A0]",
	},
];

export default function Benefits() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-light text-[#3A3A3A] text-center mb-16">
					Why Choose CozyTouch
				</h2>
				<div className="grid md:grid-cols-4 gap-8">
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className="text-center">
							<div
								className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
								<span className="text-white text-2xl">{benefit.icon}</span>
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">{benefit.title}</h3>
							<p className="text-[#77716B]">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
