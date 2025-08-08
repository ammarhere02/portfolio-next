"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

// Floating particles component
function FloatingParticles() {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
            />
        ))}
      </div>
  );
}

// Typing animation component
function TypingAnimation({ text, className }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
      <span className={className}>
      {displayText}
        <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-0.5 h-8 bg-primary ml-1"
        />
    </span>
  );
}

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
  const heroRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <section
          ref={heroRef}
          id="hero"
          className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background via-accent to-secondary"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
            `
          }}
      >
        <FloatingParticles />

        {/* Enhanced Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto px-4"
        >
          {/* Enhanced Profile Avatar */}
          <motion.div
              variants={itemVariants}
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
                className="w-48 h-48 rounded-full glass-card border-4 border-primary/50 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '8s' }} />

              <motion.span
                  className="text-7xl font-bold text-gradient relative z-10 select-none"
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                A
              </motion.span>

              {/* Enhanced floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                    />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Name with Typing Animation */}
          <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-black tracking-tight mb-4 relative"
          >
            <TypingAnimation
                text="Muhammad Ammar Khan"
                className="text-gradient bg-[length:200%_auto] animate-gradient"
            />

            {/* Subtle underline effect */}
            <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ delay: 2.5, duration: 1.2 }}
            />
          </motion.h1>

          {/* Enhanced Title with Staggered Animation */}
          <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 relative"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.span
                  className="text-primary font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3, duration: 0.6 }}
              >
                Software Engineer
              </motion.span>
              <motion.span
                  className="text-foreground/40 text-3xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.3, duration: 0.4 }}
              >
                •
              </motion.span>
              <motion.span
                  className="text-primary font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.6, duration: 0.6 }}
              >
                MERN Stack Developer
              </motion.span>
            </div>
          </motion.h2>

          {/* Enhanced Description */}
          <motion.div
              variants={itemVariants}
              className="max-w-3xl text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed text-center"
          >
            <div className="glass-card p-8">
              <motion.span
                  className="font-bold text-primary text-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
              >
                Hi, I'm Ammar!
              </motion.span>
              <br />
              <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4, duration: 0.8 }}
                  className="text-lg"
              >
                I craft modern web applications, build scalable backend systems, and develop AI-powered solutions.
              </motion.span>
              <br />
              <motion.span
                  className="inline-block mt-4 text-primary font-semibold"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                Let's create something extraordinary together! ✨
              </motion.span>
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
              variants={itemVariants}
              className="flex gap-8 justify-center mb-12"
          >
            {[
              {
                href: "https://github.com/ammarhere02",
                icon: FaGithub,
                label: "GitHub Profile",
                color: "hover:text-gray-300",
                bg: "hover:bg-gray-900"
              },
              {
                href: "https://linkedin.com/in/ammar-khan-7b656822a/",
                icon: FaLinkedin,
                label: "LinkedIn Profile",
                color: "hover:text-blue-400",
                bg: "hover:bg-blue-900"
              }
            ].map(({ href, icon: Icon, label, color, bg }) => (
                <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-4xl transition-all duration-300 ${color} relative group p-4 rounded-full glass-card ${bg}`}
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                  <motion.div
                      className="absolute -inset-4 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                      whileHover={{ scale: 1.5 }}
                  />
                </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-4 px-12 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-xl shadow-neon overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Button background animation */}
              <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
              />

              <span className="relative z-10 text-xl">View My Projects</span>
              <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
              >
                →
              </motion.div>

              {/* Ripple effect */}
              <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"
                  initial={false}
              />
            </motion.a>

            {/* Scroll Indicator */}
            <motion.div
                className="flex flex-col items-center gap-4 mt-12 opacity-70"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-base text-foreground/60 font-medium">Scroll to explore</span>
              <FaArrowDown className="text-primary text-xl animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
      </section>
  );
}