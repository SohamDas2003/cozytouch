import { CALL_LINK, PHONE_NUMBER_DISPLAY, WHATSAPP_LINK } from "../constants";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhoneCall } from "react-icons/lu";
import Reveal from "./Reveal";

export default function Footer() {
	return (
		<footer
			id="contact"
			className="bg-[#3A3A3A] text-white py-12 px-4">
			<Reveal
				className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
				delay={120}>
				<div>
					<h3 className="text-2xl font-light mb-4 text-[#D8B98A]">
						CozyTouch Spa
					</h3>
					<p className="text-[#EADFCC]">Your journey to wellness begins here</p>
					<div className="flex items-center gap-4 pt-4">
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noreferrer"
							className="text-[#25D366] hover:text-[#1ebe57] transition-colors transform hover:-translate-y-0.5 hover:scale-105"
							aria-label="WhatsApp">
							<FaWhatsapp
								className="text-3xl"
								aria-hidden
							/>
						</a>
						<a
							href="https://www.instagram.com/cozytouchspa/"
							target="_blank"
							rel="noreferrer"
							className="text-[#E4405F] hover:text-[#ff7b97] transition-colors transform hover:-translate-y-0.5 hover:scale-105"
							aria-label="Instagram">
							<FaInstagram
								className="text-3xl"
								aria-hidden
							/>
						</a>
						<a
							href="https://www.facebook.com/cozytouchspa/"
							target="_blank"
							rel="noreferrer"
							className="text-[#416cc1] hover:text-[#75a3ff] transition-colors transform hover:-translate-y-0.5 hover:scale-105"
							aria-label="Facebook">
							<FaFacebook
								className="text-3xl"
								aria-hidden
							/>
						</a>
					</div>
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
					<div className="space-y-3">
						<a
							href={CALL_LINK}
							className="flex items-center gap-2 text-[#EADFCC] hover:text-[#C47A5A] transition-colors">
							<LuPhoneCall
								className="text-lg"
								aria-hidden
							/>
							<span>Call {PHONE_NUMBER_DISPLAY}</span>
						</a>
						<a
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-[#EADFCC] hover:text-[#25D366] transition-colors">
							<FaWhatsapp
								className="text-lg"
								aria-hidden
							/>
							<span>WhatsApp {PHONE_NUMBER_DISPLAY}</span>
						</a>
						<a
							href="mailto:cozytouchspa@gmail.com"
							className="flex items-center gap-2 text-[#EADFCC] hover:text-[#C47A5A] transition-colors">
							<LuMail
								className="text-lg"
								aria-hidden
							/>
							<span>cozytouchspa@gmail.com</span>
						</a>
						<div className="text-[#EADFCC] flex items-start gap-2">
							<LuMapPin
								className="text-lg mt-1"
								aria-hidden
							/>
							<div className="leading-tight">
								<p className="mb-0">Ganesh Murti Nagar, Cuffe Parade.</p>
								<p className="mb-0">Colaba, Mumbai - 400005</p>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
			<Reveal
				className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#77716B] text-center text-[#EADFCC]"
				delay={220}>
				<p>&copy; 2025 CozyTouch Spa. All rights reserved.</p>
			</Reveal>
		</footer>
	);
}
