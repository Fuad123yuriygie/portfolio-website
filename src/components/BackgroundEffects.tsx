"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-40 overflow-hidden">
            {/* Wireframe Grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #00f0ff 1px, transparent 1px),
                        linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                    transform: "perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)",
                }}
            />

            {/* Moving Blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[100px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.div
                className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-blue-500/25 rounded-full blur-[90px]"
                animate={{
                    x: [0, 50, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            />
        </div>
    );
}
