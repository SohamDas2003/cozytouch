"use client";

import { ReactNode, RefObject } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: Props) {
	const { ref, inView } = useInView();
	return (
		<div
			ref={ref as RefObject<HTMLDivElement>}
			className={`${className} ${inView ? "reveal-visible" : "reveal-hidden"}`}
			style={delay ? { animationDelay: `${delay}ms` } : undefined}>
			{children}
		</div>
	);
}
