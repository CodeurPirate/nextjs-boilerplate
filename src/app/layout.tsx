import "@/shared/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";

const pretendard = localFont({
	src: "../../public/fonts/PretendardVariable.woff2",
	display: "swap",
	weight: "45 920",
	variable: "--font-pretendard",
	preload: true
});

export const metadata: Metadata = {
	title: "Nextjs Boilerplate",
	description: "📦 nextjs boilerplate"
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko" className={pretendard.variable}>
			<body className="h-dvh w-dvw font-sans antialiased">{children}</body>
		</html>
	);
}
