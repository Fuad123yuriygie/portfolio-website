"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="glass-card rounded-md p-8 md:p-16 text-center overflow-hidden relative border border-cyan-900/30 bg-[#020617]/50">
                {/* Decorative Grid Lines */}
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className="inline-block mb-6">
                        <span className="text-cyan-500 font-mono text-sm tracking-widest border border-cyan-900/50 px-2 py-1 bg-cyan-950/30">06. CONTACT</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 uppercase tracking-wider text-glow">
                        INITIATE_UPLINK
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-mono"
                >
                    &gt; Transmission lines are open. Currently accepting new mission objectives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10"
                >
                    <a href={`mailto:${portfolioData.personal.email}`} className="flex flex-col items-center gap-4 group">
                        <div className="p-4 rounded-sm bg-cyan-950/30 border border-cyan-900/50 group-hover:bg-cyan-900/30 group-hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <Mail size={32} className="text-cyan-400 group-hover:scale-110 transition-transform relative z-10" />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-cyan-700 mb-1 uppercase tracking-wider">EMAIL_LINK</div>
                            <div className="text-white font-medium font-mono text-sm group-hover:text-cyan-300 transition-colors">{portfolioData.personal.email}</div>
                        </div>
                    </a>

                    <div className="hidden md:block w-px bg-cyan-900/30 self-stretch" />

                    <div className="flex flex-col items-center gap-4 group cursor-default">
                        <div className="p-4 rounded-sm bg-cyan-950/30 border border-cyan-900/50 group-hover:bg-cyan-900/30 group-hover:border-cyan-500/50 transition-all duration-300">
                            <Phone size={32} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-cyan-700 mb-1 uppercase tracking-wider">SECURE_LINE</div>
                            <div className="text-white font-medium font-mono text-sm">{portfolioData.personal.phone}</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-cyan-900/30 self-stretch" />

                    <div className="flex flex-col items-center gap-4 group cursor-default">
                        <div className="p-4 rounded-sm bg-cyan-950/30 border border-cyan-900/50 group-hover:bg-cyan-900/30 group-hover:border-cyan-500/50 transition-all duration-300">
                            <MapPin size={32} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-cyan-700 mb-1 uppercase tracking-wider">BASE_COORDS</div>
                            <div className="text-white font-medium font-mono text-sm">{portfolioData.personal.address}</div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-20 pt-8 border-t border-cyan-900/30 text-slate-600 text-xs font-mono">
                    <p>SYSTEM_ID: FUAD_OS_V2.0</p>
                    <p>© {new Date().getFullYear()} {portfolioData.personal.name}. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </section>
    );
}
