"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)",
      "0 0 30px rgba(57, 255, 20, 0.5), 0 0 60px rgba(57, 255, 20, 0.2)",
      "0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
      <section
          id="hero"
          className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(57, 255, 20, 0.03) 0%, transparent 50%)`
          }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 animation-delay-1000" />
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50 animation-delay-2000" />
        </div>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto px-4"
        >
          {/* Enhanced Profile Avatar */}
          <motion.div
              variants={itemVariants}
              animate="animate"
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
                variants={glowVariants}
                animate="animate"
                className="w-40 h-40 rounded-full bg-gradient-to-br from-accent to-secondary border-4 border-primary flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.span
                  className="text-6xl font-bold text-primary relative z-10 select-none"
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                A
              </motion.span>

              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping" />
                <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-primary rounded-full animate-ping animation-delay-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Name with Gradient Animation */}
          <motion.h1
              variants={itemVariants}
              className="text-responsive-xl font-black tracking-tight mb-2 relative"
          >
          <span className="bg-gradient-to-r from-primary via-green-300 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Muhammad Ammar Khan
          </span>

            {/* Subtle underline effect */}
            <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 1.5, duration: 1 }}
            />
          </motion.h1>

          {/* Enhanced Title with Typing Effect */}
          <motion.h2
              variants={itemVariants}
              className="text-responsive-lg font-bold text-primary mb-6 relative"
          >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
              Software Engineer
            </motion.span>
            <span className="text-foreground/60 mx-2">|</span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
            >
              MERN Stack Developer
            </motion.span>
          </motion.h2>

          {/* Enhanced Description */}
          <motion.div
              variants={itemVariants}
              className="max-w-2xl text-responsive-md text-foreground/80 mb-8 leading-relaxed"
          >
            <motion.span
                className="font-bold text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
              Hi, I'm Ammar!
            </motion.span>
            {" "}I craft modern web applications, build scalable backend systems, and develop AI-powered solutions.
            <motion.span
                className="inline-block ml-2 text-primary"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              Let's create something extraordinary together! ✨
            </motion.span>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
              variants={itemVariants}
              className="flex gap-8 justify-center mb-8"
          >
            {[
              {
                href: "https://github.com/ammarhere02",
                icon: FaGithub,
                label: "GitHub Profile",
                color: "hover:text-gray-300"
              },
              {
                href: "https://linkedin.com/in/ammar-khan-7b656822a/",
                icon: FaLinkedin,
                label: "LinkedIn Profile",
                color: "hover:text-blue-400"
              }
            ].map(({ href, icon: Icon, label, color }) => (
                <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-3xl transition-all duration-300 ${color} relative group`}
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                  <motion.div
                      className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      whileHover={{ scale: 1.2 }}
                  />
                </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-green-400 text-dark font-bold text-lg shadow-neon overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Button background animation */}
              <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
              />

              <span className="relative z-10">View My Projects</span>
              <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
              >
                →
              </motion.div>

              {/* Ripple effect */}
              <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
                  initial={false}
              />
            </motion.a>

            {/* Scroll Indicator */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="flex flex-col items-center gap-2 mt-8 opacity-60"
            >
              <span className="text-sm text-foreground/60">Scroll to explore</span>
              <FaArrowDown className="text-primary animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      </section>
  );
}