"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Enhanced floating button logic
    const btn = document.getElementById("sticky-contact-btn");
    let lastScrollY = window.scrollY;

    function onScroll() {
      if (!btn) return;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      // Show button when scrolled down 200px, hide when scrolling up near top
      if (currentScrollY > 200) {
        btn.style.opacity = "1";
        btn.style.transform = isScrollingDown ? "translateY(0)" : "translateY(-10px)";
      } else {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(20px)";
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
      <>
        {/* Enhanced Floating Contact Button */}
        <motion.a
            id="sticky-contact-btn"
            href="#contact"
            className="fixed z-[100] bottom-6 right-6 group"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Contact Me"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />

            {/* Button */}
            <div className="relative bg-gradient-to-r from-primary to-green-400 text-dark rounded-full shadow-neon p-4 flex items-center gap-3 font-bold text-lg transition-all duration-300 group-hover:shadow-neon-strong">
              <FaEnvelope className="text-2xl" />
              <span className="hidden sm:inline">Contact</span>

              {/* Pulse animation */}
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            </div>
          </div>
        </motion.a>

        <section id="contact" className="w-full max-w-4xl mx-auto py-20 px-4">
          {/* Enhanced Header */}
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-responsive-xl font-black mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-responsive-md text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
              <div className="card-enhanced">
                <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <motion.div
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <FaEnvelope className="text-primary text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 uppercase tracking-wide">Email</p>
                      <a
                          href="mailto:ammarchancloud@icloud.com"
                          className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        ammarchancloud@icloud.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <FaComment className="text-primary text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 uppercase tracking-wide">Response Time</p>
                      <p className="text-foreground font-medium">Usually within 24 hours</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card-enhanced">
                <h4 className="text-lg font-bold text-primary mb-4">Quick Links</h4>
                <div className="space-y-3">
                  {[
                    { name: "View Resume", href: "#resume" },
                    { name: "See Projects", href: "#projects" },
                    { name: "Check Skills", href: "#skills" }
                  ].map((link) => (
                      <motion.a
                          key={link.name}
                          href={link.href}
                          className="block text-foreground/80 hover:text-primary transition-colors duration-300 group"
                          whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">{link.name}</span>
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-400 text-background font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  onSubmit={handleSubmit}
                  className="card-enhanced space-y-6"
              >
                <h3 className="text-xl font-bold text-primary mb-6">Send a Message</h3>

                {/* Name Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors duration-300" />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors duration-300" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-4 top-4 text-foreground/40 group-focus-within:text-primary transition-colors duration-300" />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello..."
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-accent/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-green-400 text-dark font-bold rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                  ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                  )}
                </motion.button>

                {/* Alternative Contact */}
                <div className="text-center pt-4 border-t border-accent/30">
                  <p className="text-sm text-foreground/60 mb-2">
                    Prefer email directly?
                  </p>
                  <motion.a
                      href="mailto:ammarchancloud@icloud.com"
                      className="inline-flex items-center gap-2 text-primary hover:text-green-300 transition-colors duration-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                  >
                    <FaEnvelope />
                    ammarchancloud@icloud.com
                  </motion.a>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </>
  );
}