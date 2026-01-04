import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import faviconIco from "@/public/favicon.ico";
import favicon16 from "@/public/favicon-16x16.png";
import favicon32 from "@/public/favicon-32x32.png";
import appleTouchIcon from "@/public/apple-touch-icon.png";

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair-display",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://cozytouchspa.com"),

	title: {
		default: "CozyTouch Spa | Massage & Spa Services in Mumbai",
		template: "%s | CozyTouch Spa",
	},

	description:
		"CozyTouch Spa offers premium massage and spa services in Mumbai, Colaba, Bandra, and Churchgate. Book professional home spa and wellness sessions for relaxation and stress relief.",

	keywords: [
		"CozyTouch Spa",
		"massage service in Mumbai",
		"spa in Mumbai",
		"home massage service",
		"spa in Bandra",
		"spa in Colaba",
		"spa in Churchgate",
		"home spa Mumbai",
		"body massage Mumbai",
		"wellness spa Mumbai",
	],

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
		},
	},

	alternates: {
		canonical: "https://cozytouchspa.com",
	},

	icons: {
		icon: [
			{ url: faviconIco.src, sizes: "any" },
			{
				url: favicon16.src,
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: favicon32.src,
				sizes: "32x32",
				type: "image/png",
			},
		],
		apple: appleTouchIcon.src,
	},

	manifest: "/site.webmanifest",

	openGraph: {
		title: "CozyTouch Spa | Massage & Spa Services in Mumbai",
		description:
			"Premium massage and spa services in Mumbai, Colaba, Bandra, and Churchgate. Book home spa sessions with CozyTouch Spa.",
		url: "https://cozytouchspa.com",
		siteName: "CozyTouch Spa",
		locale: "en_IN",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1454,
				height: 768,
				alt: "CozyTouch Spa – Massage & Wellness Services in Mumbai",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "CozyTouch Spa | Massage & Spa Services in Mumbai",
		description:
			"Book premium massage and spa services in Mumbai, Colaba, Bandra, and Churchgate with CozyTouch Spa.",
		images: ["/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
