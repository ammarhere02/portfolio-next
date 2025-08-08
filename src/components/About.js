"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-20 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-foreground/80 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        I’m passionate about building modern web experiences, scalable backend architectures, and AI-powered tools that make a difference. My journey in software engineering started with curiosity and a love for problem-solving. I thrive on turning ideas into real products, whether it’s a full-stack MERN app, a RESTful API, or an AI-enhanced platform. I enjoy collaborating, learning new tech, and pushing the boundaries of what’s possible.
      </motion.p>
    </section>
  );
}

