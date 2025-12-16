import Image from "next/image";

import deeptissue from "../../public/deeptissue.jpg"
import aromatherapy from "../../public/aromatherapy.jpg"
import swedish from "../../public/swedish.jpg"
import backmassage from "../../public/backmassage.jpg"
import fullbody from "../../public/fullbody.jpg"
import footmassage from "../../public/footmassage.jpg"
import manicure from "../../public/manicure.jpg"
import pedicure from "../../public/pedicure.jpg"
import headoil from "../../public/headoil.jpg"

const services = [
	{
		id: 1,
		title: "Deep Tissue Massage",
		description:
			"Intensive therapy targeting deep muscle layers to release chronic tension and knots, perfect for athletes and those with persistent pain.",
		duration: "60 min",
		price: "₹2,800",
		badge: "Popular",
		badgeColor: "bg-[#D8B98A]",
		image: deeptissue,
	},
	{
		id: 2,
		title: "Aromatherapy Massage",
		description:
			"Therapeutic massage enhanced with essential oils to promote relaxation, reduce stress, and balance your mind, body, and spirit.",
		duration: "60 min",
		price: "₹1,600",
		badge: "Relaxing",
		badgeColor: "bg-[#9DB6A0]",
		image: aromatherapy,
	},
	{
		id: 3,
		title: "Swedish Massage",
		description:
			"Classic full-body massage using gentle, flowing strokes to improve circulation, ease muscle tension, and promote overall relaxation.",
		duration: "60 min",
		price: "₹2,600",
		badge: "Classic",
		badgeColor: "bg-[#C47A5A]",
		image: swedish,
	},
	{
		id: 4,
		title: "Back Massage",
		description:
			"Focused back massage targeting tension and stiffness for immediate relief.",
		duration: "30 min",
		price: "₹850",
		badge: "Focus",
		badgeColor: "bg-[#C47A5A]",
		image: backmassage,
	},
	{
		id: 5,
		title: "Full Body Massage",
		description:
			"A restorative 45-minute full-body massage designed to ease muscle tension and improve circulation.",
		duration: "45 min",
		price: "₹1,600",
		badge: "Therapeutic",
		badgeColor: "bg-[#C47A5A]",
		image: fullbody,
	},
	{
		id: 6,
		title: "Foot Massage",
		description:
			"Soothing foot massage focusing on reflex points to relieve stress and promote deep relaxation.",
		duration: "30 min",
		price: "₹700",
		badge: "Relax",
		badgeColor: "bg-[#9DB6A0]",
		image: footmassage,
	},
	{
		id: 7,
		title: "Manicure",
		description:
			"Professional manicure including nail shaping, cuticle care, hand massage, and polish application.",
		duration: "30 min",
		price: "₹450",
		badge: "Beauty",
		badgeColor: "bg-[#D8B98A]",
		image: manicure,
	},
	{
		id: 8,
		title: "Pedicure",
		description:
			"Complete pedicure treatment with exfoliation, nail care, and soothing foot massage.",
		duration: "30 min",
		price: "₹700",
		badge: "Beauty",
		badgeColor: "bg-[#9DB6A0]",
		image: pedicure,
	},
	{
		id: 9,
		title: "Head Oil Massage",
		description:
			"Traditional head oil massage to relieve tension, improve circulation, and promote relaxation.",
		duration: "30 min",
		price: "₹650",
		badge: "Calming",
		badgeColor: "bg-[#D8B98A]",
		image: headoil,
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="py-20 px-4 bg-[#EADFCC]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-light text-[#3A3A3A] text-center mb-16">
					Our Services
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-[#F6F1E8] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative h-64">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<div
									className={`inline-block ${service.badgeColor} text-white px-3 py-1 rounded-full text-sm mb-3`}>
									{service.badge}
								</div>
								<h3 className="text-2xl font-light text-[#3A3A3A] mb-3">
									{service.title}
								</h3>
								<p className="text-[#77716B] mb-4">{service.description}</p>
								<p className="text-[#C47A5A] font-semibold text-xl">
									{service.duration} - {service.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
