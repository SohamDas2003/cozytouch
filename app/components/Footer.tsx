import { CALL_LINK, PHONE_NUMBER_DISPLAY } from "../constants";

export default function Footer() {
	return (
		<footer
			id="contact"
			className="bg-[#3A3A3A] text-white py-12 px-4">
			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-2xl font-light mb-4 text-[#D8B98A]">
						CozyTouch Spa
					</h3>
					<p className="text-[#EADFCC]">Your journey to wellness begins here</p>
				</div>
				<div>
					<h4 className="font-semibold mb-4 text-[#D8B98A]">Hours</h4>
					<p className="text-[#EADFCC]">Open Daily: 8AM — 11PM</p>
					<p className="text-[#EADFCC] text-sm mt-2">
						Home service available every day
					</p>
				</div>
				<div>
					<h4 className="font-semibold mb-4 text-[#D8B98A]">Contact</h4>
					<a
						href={CALL_LINK}
						className="text-[#EADFCC] hover:text-[#C47A5A] transition-colors block mb-2">
						📞 {PHONE_NUMBER_DISPLAY}
					</a>
					<p className="text-[#EADFCC] mb-2">📧 cozytouchspa@gmail.com</p>
					<div className="text-[#EADFCC] flex items-start">
						<span className="text-xl mt-1">📍</span>
						<div className="leading-tight">
							<p className="mb-0">Ganesh Murti Nagar, Cuffe Parade.</p>
							<p className="mb-0">Colaba, Mumbai - 400005</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#77716B] text-center text-[#EADFCC]">
				<p>&copy; 2025 CozyTouch Spa. All rights reserved.</p>
			</div>
		</footer>
	);
}
