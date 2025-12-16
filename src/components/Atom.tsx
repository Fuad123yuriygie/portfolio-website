"use client";

import { motion } from "framer-motion";

export default function Atom() {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center pointer-events-none select-none">
            {/* Core Nucleus */}
            <motion.div
                className="absolute w-8 h-8 md:w-12 md:h-12 bg-cyan-400 rounded-full shadow-[0_0_50px_rgba(0,240,255,0.8)] z-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orbit 1 */}
            <motion.div
                className="absolute w-full h-full rounded-full border border-cyan-500/30"
                style={{ rotateX: 70, rotateY: 15 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(0,240,255,1)]" />
            </motion.div>

            {/* Orbit 2 */}
            <motion.div
                className="absolute w-full h-full rounded-full border border-cyan-500/30"
                style={{ rotateX: 70, rotateY: 135 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(0,240,255,1)]" />
            </motion.div>

            {/* Orbit 3 */}
            <motion.div
                className="absolute w-full h-full rounded-full border border-cyan-500/30"
                style={{ rotateX: 70, rotateY: 255 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(0,240,255,1)]" />
            </motion.div>

            {/* Outer Glow Field */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-3xl z-[-1]" />
        </div>
    );
}
