"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Atom from "./Atom";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 border border-cyan-900/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-cyan-900/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="max-w-7xl w-full px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-sm border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-sm font-mono tracking-[0.2em] mb-6 backdrop-blur-sm">
                            [ SYSTEMS & FIRMWARE ENGINEER ]
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold font-heading uppercase tracking-tighter text-white mb-2 text-glow">
                            {portfolioData.personal.name}
                        </h1>
                        <div className="h-1 w-32 mx-auto md:mx-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed font-mono"
                    >
                        <span className="text-cyan-700 mr-2">&gt;</span>
                        {portfolioData.personal.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-3 rounded-sm bg-cyan-500 text-black font-semibold font-mono tracking-wider hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2 clip-path-polygon"
                            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                        >
                            VIEW_PROJECTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="group px-8 py-3 rounded-sm glass-card border border-cyan-500/30 text-cyan-300 font-semibold font-mono tracking-wider hover:bg-cyan-950/50 transition-all flex items-center gap-2"
                            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                        >
                            DOWNLOAD_CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center md:justify-start gap-8 pt-12 border-t border-white/5 w-full max-w-lg mx-auto md:mx-0 mt-12"
                    >
                        {portfolioData.personal.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-200"
                                title={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Visual Content: Spinning Atom */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 flex justify-center items-center"
                >
                    <Atom />
                </motion.div>

                <div className="absolute right-10 bottom-20 hidden lg:block opacity-30 font-mono text-xs text-cyan-800 text-right space-y-1">
                    <p>COORDS: 37.7749° N, 122.4194° W</p>
                    <p>SYS_STATUS: OPTIMAL</p>
                    <p>MEM_USAGE: 24%</p>
                </div>
            </div>
        </section>

    );
}
