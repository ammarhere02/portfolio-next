"use client";
import { motion } from "framer-motion";

const galleryItems = [
  { src: "/next.svg", alt: "Project Screenshot 1" },
  { src: "/vercel.svg", alt: "Project Screenshot 2" },
  { src: "/next.svg", alt: "Project Screenshot 3" },
  { src: "/vercel.svg", alt: "Project Screenshot 4" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full max-w-5xl mx-auto py-20 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Portfolio Gallery
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            className="bg-accent rounded-xl overflow-hidden shadow hover:shadow-neon border border-accent/40"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <img src={item.src} alt={item.alt} className="w-full h-32 object-contain bg-background p-4" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

