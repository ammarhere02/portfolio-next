"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "BSCS, University of Central Punjab",
    period: "Expected Oct 2026",
    cgpa: "CGPA: 2.45",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full max-w-3xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div className="flex flex-col gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            className="bg-accent rounded-xl p-6 shadow hover:shadow-neon border border-accent/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="font-bold text-lg text-primary">{edu.degree}</span>
              <span className="text-sm text-foreground/60">{edu.period}</span>
            </div>
            <div className="text-base text-foreground/80 mt-2">{edu.cgpa}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

