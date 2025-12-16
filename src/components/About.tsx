"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute left-0 match-timeline-height w-px bg-cyan-900/20 hidden md:block" style={{ left: '50%' }} />

            <div className="flex flex-col md:flex-row gap-16 relative z-10">

                {/* Experience Column */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-cyan-500 font-mono text-sm tracking-widest border border-cyan-900/50 px-2 py-1 bg-cyan-950/30">04. EXPERIENCE</span>
                            <div className="h-[1px] bg-cyan-900/50 flex-1" />
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-white mb-8 flex items-center gap-3 uppercase tracking-wider text-glow">
                            <Briefcase className="text-cyan-400" /> EXPERIENCE_LOG
                        </h2>
                        <div className="space-y-8 pl-4 border-l border-cyan-900/30 md:border-none md:pl-0">
                            {portfolioData.experience.map((exp, index) => (
                                <div key={index} className="glass-card p-6 relative overflow-hidden group border border-cyan-900/30 bg-[#020617]/50 hover:border-cyan-500/50 transition-colors">
                                    <div className="absolute -left-[25px] top-8 w-3 h-3 bg-cyan-950 border border-cyan-500 rounded-full hidden md:block z-10" />

                                    <h3 className="text-xl font-bold text-white font-heading tracking-wide">{exp.role}</h3>
                                    <div className="text-cyan-400 font-mono text-sm mb-2">{exp.company} <span className="text-slate-600">|</span> {exp.period}</div>
                                    <ul className="space-y-2 mt-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-slate-400 text-sm flex items-start gap-2 font-mono">
                                                <span className="mt-1.5 w-1 h-1 bg-cyan-500 shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Education Column */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-cyan-500 font-mono text-sm tracking-widest border border-cyan-900/50 px-2 py-1 bg-cyan-950/30">05. EDUCATION</span>
                            <div className="h-[1px] bg-cyan-900/50 flex-1" />
                        </div>

                        <h2 className="text-3xl font-bold font-heading text-white mb-8 flex items-center gap-3 uppercase tracking-wider text-glow">
                            <GraduationCap className="text-cyan-400" /> ACADEMIC_RECORD
                        </h2>
                        <div className="space-y-8 pl-4 border-l border-cyan-900/30 md:border-none md:pl-0">
                            {portfolioData.education.map((edu, index) => (
                                <div key={index} className="glass-card p-6 relative overflow-hidden group border border-cyan-900/30 bg-[#020617]/50 hover:border-cyan-500/50 transition-colors">
                                    <div className="absolute -right-[25px] top-8 w-3 h-3 bg-cyan-950 border border-cyan-500 rounded-full hidden md:block z-10" />
                                    <h3 className="text-xl font-bold text-white font-heading tracking-wide">{edu.degree}</h3>
                                    <div className="text-cyan-400 font-medium font-mono text-sm">{edu.institution}</div>
                                    <div className="flex items-center text-slate-500 text-sm mt-2 font-mono">
                                        <Calendar size={14} className="mr-2" /> {edu.period}
                                    </div>
                                </div>
                            ))}

                            <div className="glass-card p-6 border border-cyan-900/30 bg-[#020617]/50">
                                <h3 className="text-xl font-bold text-white mb-4 font-heading uppercase tracking-wide">Certifications & Training</h3>
                                <p className="text-slate-400 text-sm font-mono leading-relaxed">
                                    [ ACTIVE ] Competitive Programmer - Codeforces (Pupil) & CodeChef (3 Star)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
