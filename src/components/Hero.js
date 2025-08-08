"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center relative pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Profile image placeholder */}
        <div className="w-32 h-32 rounded-full bg-accent border-4 border-primary shadow-neon mb-4 flex items-center justify-center">
          <span className="text-5xl text-primary font-bold">A</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Muhammad Ammar Khan
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Software Engineer | MERN Stack Developer
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-xl text-lg text-foreground/80 mb-6"
        >
          <span className="font-semibold text-primary">Hi, I’m Ammar!</span> I build modern web apps, scalable backends, and AI-powered tools. Let’s create something amazing together.
        </motion.p>
        <div className="flex gap-6 justify-center mb-4">
          <a href="https://github.com/ammarhere02" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaGithub /></a>
          <a href="https://linkedin.com/in/ammar-khan-7b656822a/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaLinkedin /></a>
        </div>
        <a href="#projects" className="inline-block mt-2 px-8 py-3 rounded-full bg-primary text-dark font-bold shadow-neon hover:scale-105 transition-transform">View Projects</a>
      </motion.div>
    </section>
  );
}

