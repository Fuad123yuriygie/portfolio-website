"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
    const { languages, domains, tools, competitive } = portfolioData.skills;

    const SkillCategory = ({ title, items, delay }: { title: string; items: string[]; delay: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass-card p-6 relative group overflow-hidden border border-cyan-900/30"
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />

            <h3 className="text-xl font-bold font-heading text-cyan-100 mb-4 border-b border-cyan-900/50 pb-2 uppercase tracking-wider flex justify-between items-center bg-cyan-950/20 p-2">
                {title}
                <span className="text-xs font-mono text-cyan-600">///</span>
            </h3>
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-2 group/item"
                    >
                        <span className="text-cyan-800 text-xs font-mono group-hover/item:text-cyan-400 transition-colors">&gt;</span>
                        <span className="text-slate-400 font-mono text-sm group-hover/item:text-cyan-200 transition-colors cursor-default">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-20 relative">
            <div className="mb-12 text-center relative z-10">
                <div className="inline-block mb-4">
                    <span className="text-cyan-500 font-mono text-sm tracking-widest border border-cyan-900/50 px-2 py-1 bg-cyan-950/30">02. SKILLS</span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 text-glow"
                >
                    TECHNICAL_ARSENAL
                </motion.h2>
                <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
                    // A comprehensive overview of my technical capabilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <SkillCategory title="LANGUAGES" items={languages} delay={0} />
                <SkillCategory title="DOMAINS" items={domains} delay={0.1} />
                <SkillCategory title="TOOLS" items={tools} delay={0.2} />
                <SkillCategory title="PROTOCOLS" items={competitive} delay={0.3} />
            </div>
        </section>
    );

}
