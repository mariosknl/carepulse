import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// Self-hosted so `next build` does not download Google Fonts. Next 16.3.4's
// Turbopack loader fails in GitHub Actions with
// "next/font/google queries have exactly one entry".
const fontSans = localFont({
	src: "../fonts/plus-jakarta-sans-latin.woff2",
	weight: "300 700",
	display: "swap",
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Carepulse",
	description: "A healthcare management system",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-dark-300 font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
