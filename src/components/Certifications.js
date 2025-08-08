"use client";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Gamers Den UCP - Team Management",
    date: "June 2024",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full max-w-3xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>
      <div className="flex flex-col gap-8">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            className="bg-accent rounded-xl p-6 shadow hover:shadow-neon border border-accent/40 flex flex-col md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="font-bold text-lg text-primary">{cert.name}</span>
            <span className="text-sm text-foreground/60">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

