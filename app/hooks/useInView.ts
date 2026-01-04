"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
	threshold?: number;
	rootMargin?: string;
};

export function useInView({
	threshold = 0.2,
	rootMargin = "0px",
}: Options = {}) {
	const ref = useRef<HTMLElement | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return { ref, inView } as const;
}
