import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <BackgroundEffects />
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}
