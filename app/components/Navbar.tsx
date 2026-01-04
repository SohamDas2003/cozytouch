"use client";

import Image from "next/image";
import { useState } from "react";
import { CALL_LINK } from "../constants";
import logo from "../../public/logo.png";
import Reveal from "./Reveal";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: "Services", href: "#services" },
		{ label: "About", href: "#about" },
		{ label: "Testimonials", href: "#testimonials" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1E8]/95 backdrop-blur-sm border-b border-[#EADFCC] transition-shadow duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Reveal
						className="flex items-center space-x-2"
						delay={60}>
						<Image
							src={logo}
							alt="CozyTouch Logo"
							width={200}
							height={100}
						/>
					</Reveal>

					{/* Desktop Menu */}
					<Reveal
						className="hidden md:flex items-center space-x-8"
						delay={140}>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-[#77716B] hover:text-[#C47A5A] transition-colors duration-200 transform hover:-translate-y-0.5 link-underline">
								{item.label}
							</a>
						))}
						<a
							href={CALL_LINK}
							className="bg-[#C47A5A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#B36A4A] transition-all duration-300 inline-block card-lift">
							Book Now
						</a>
					</Reveal>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen((prev) => !prev)}
						className="md:hidden text-[#3A3A3A]"
						aria-label="Toggle navigation menu"
						aria-expanded={isOpen}
						aria-controls="mobile-menu">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={`md:hidden bg-[#F6F1E8] border-t border-[#EADFCC] px-4 transition-all duration-300 ${
					isOpen
						? "opacity-100 max-h-96 visible py-3"
						: "opacity-0 max-h-0 overflow-hidden invisible pointer-events-none py-0"
				}`}>
				<div className="flex flex-col space-y-4">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="text-[#3A3A3A] hover:text-[#C47A5A] transition-colors text-lg transform hover:-translate-y-0.5 link-underline">
							{item.label}
						</a>
					))}
					<a
						href={CALL_LINK}
						onClick={() => setIsOpen(false)}
						className="bg-[#C47A5A] text-white px-6 py-3 rounded-full text-base hover:bg-[#B36A4A] transition-all duration-300 inline-block text-center card-lift">
						Book Now
					</a>
				</div>
			</div>
		</nav>
	);
}
