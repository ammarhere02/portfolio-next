"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="w-full max-w-2xl mx-auto py-20 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-lg text-foreground/80 mb-4">Download my latest resume in PDF format.</p>
        <a
          href="/Resume.pdf"
          download
          className="inline-block px-8 py-3 rounded-full bg-primary text-dark font-bold shadow-neon hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

