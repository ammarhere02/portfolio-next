"use client";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Floating button logic: show/hide on scroll
    const btn = document.getElementById("sticky-contact-btn");
    function onScroll() {
      if (!btn) return;
      btn.style.opacity = window.scrollY > 200 ? 1 : 0;
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        id="sticky-contact-btn"
        href="#contact"
        className="fixed z-[100] bottom-6 right-6 bg-primary text-dark rounded-full shadow-neon p-4 flex items-center gap-2 font-bold text-lg transition-opacity duration-300 opacity-0 hover:scale-110 hover:bg-accent hover:text-primary"
        style={{ boxShadow: "0 0 20px #39ff14, 0 0 40px #39ff14" }}
        title="Contact Me"
      >
        <FaEnvelope className="text-2xl" />
        <span className="hidden sm:inline">Contact</span>
      </a>
      <section id="contact" className="w-full max-w-2xl mx-auto py-20 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 bg-accent rounded-xl p-8 shadow border border-accent/40"
          action={`mailto:ammarchancloud@icloud.com`}
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-primary text-dark font-bold shadow-neon hover:scale-105 transition-transform"
          >
            Send Message
          </button>
          <div className="text-sm text-foreground/60 mt-2">
            Or email:{" "}
            <a
              href="mailto:ammarchancloud@icloud.com"
              className="underline text-primary"
            >
              ammarchancloud@icloud.com
            </a>
          </div>
        </motion.form>
      </section>
    </>
  );
}
