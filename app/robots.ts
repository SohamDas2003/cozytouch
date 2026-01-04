import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: "https://cozytouchspa.com/sitemap.xml",
		host: "https://cozytouchspa.com",
	};
}
