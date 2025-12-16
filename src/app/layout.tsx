import type { Metadata } from "next";
import { JetBrains_Mono, Rajdhani } from "next/font/google"; // Cyber fonts
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: 'swap',
});

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-heading",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Fuad Hassan Faruk | Software Engineer",
    description: "Portfolio of Fuad Hassan Faruk - Systems & Firmware Engineer, specializing in C++, Embedded Systems, and Competitive Programming.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${jetbrainsMono.variable} ${rajdhani.variable} font-mono antialiased bg-slate-950 text-slate-200`}>
                {children}
            </body>
        </html>
    );

}
