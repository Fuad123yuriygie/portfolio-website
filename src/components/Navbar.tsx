"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass-nav py-4" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-2xl font-bold font-heading uppercase tracking-wider text-cyan-400 text-glow"
                    >
                        Fuad_Faruk
                    </Link>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-950/30 border border-cyan-900/50">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-cyan-300 tracking-widest">SYS_ONLINE</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-mono tracking-widest uppercase flex items-center gap-1 group"
                        >
                            <span className="text-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px]">0{index + 1}.</span>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cyan-400 hover:text-cyan-200"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-nav border-b border-cyan-900/30 animate-in slide-in-from-top-4 fade-in duration-200 bg-[#020617]/95 backdrop-blur-xl">
                    <div className="flex flex-col space-y-4 p-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-slate-300 hover:text-cyan-300 text-lg font-mono uppercase tracking-widest flex items-center gap-3"
                            >
                                <span className="text-cyan-800 text-sm">0{index + 1}</span>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );

}
