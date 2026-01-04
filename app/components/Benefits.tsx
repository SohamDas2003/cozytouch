import { IconType } from "react-icons";
import { FaHome, FaLeaf, FaSpa, FaUserCheck } from "react-icons/fa";
import Reveal from "./Reveal";

type Benefit = {
	icon: IconType;
	title: string;
	description: string;
	bgColor: string;
};

const benefits: Benefit[] = [
	{
		icon: FaUserCheck,
		title: "Expert Therapists",
		description: "Certified professionals with years of experience",
		bgColor: "bg-[#9DB6A0]",
	},
	{
		icon: FaHome,
		title: "Convenience",
		description:
			"We bring spa-quality treatments to your home — relaxing, safe, and on your schedule.",
		bgColor: "bg-[#9DB6A0]",
	},
	{
		icon: FaLeaf,
		title: "Natural Products",
		description: "Organic oils and sustainable practices",
		bgColor: "bg-[#D8B98A]",
	},
	{
		icon: FaSpa,
		title: "Custom Treatments",
		description: "Personalized to your unique needs",
		bgColor: "bg-[#9DB6A0]",
	},
];

export default function Benefits() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<Reveal>
					<h2 className="text-4xl font-light text-[#3A3A3A] text-center mb-16">
						Why Choose CozyTouch
					</h2>
				</Reveal>
				<div className="grid md:grid-cols-4 gap-8">
					{benefits.map((benefit, index) => (
						<Reveal
							key={index}
							className="text-center card-lift"
							delay={index * 90}>
							<div
								className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
								{(() => {
									const Icon = benefit.icon;
									return (
										<Icon
											className="text-white text-2xl"
											aria-hidden
										/>
									);
								})()}
							</div>
							<h3 className="text-xl text-[#3A3A3A] mb-2">{benefit.title}</h3>
							<p className="text-[#77716B]">{benefit.description}</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
