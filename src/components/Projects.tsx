"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="mb-12 px-4 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyan-500 font-mono text-sm tracking-widest border border-cyan-900/50 px-2 py-1 bg-cyan-950/30">03. WORK</span>
                    <div className="h-[1px] bg-cyan-900/50 flex-1" />
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 uppercase tracking-tighter text-glow"
                >
                    PROJECT_ARCHIVE
                </motion.h2>
                <p className="text-slate-400 max-w-2xl font-mono text-sm">
                    // Selected works in system architecture and firmware engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card relative overflow-hidden flex flex-col group border border-cyan-900/30 bg-[#020617]/50"
                    >
                        {/* Project Scan Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />

                        <div className="p-6 flex-1 flex flex-col text-left relative z-20">
                            <div className="flex justify-between items-start mb-6 border-b border-cyan-900/30 pb-4">
                                <div className="p-3 rounded-sm bg-cyan-950/30 text-cyan-400 group-hover:text-cyan-300 transition-colors border border-cyan-900/50">
                                    <Code size={24} />
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" title="View Source">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-heading text-white mb-3 tracking-wider group-hover:text-cyan-200 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 flex-1 font-mono leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyan-900/20">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-sm bg-cyan-950/40 text-cyan-500 border border-cyan-900/40">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Corners */}
                        <div className="absolute bottom-0 right-0 p-2 opacity-20">
                            <div className="w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
