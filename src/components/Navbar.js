"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(
    () => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })),
    { ssr: false }
);

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Enhanced3DThemeToggler() {
  const meshRef = useRef();
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const handlePointerMove = (e) => {
    if (!meshRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    meshRef.current.rotation.y = x * 0.5;
    meshRef.current.rotation.x = y * 0.3;
  };

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
      }
      return next;
    });
  };

  if (!mounted) {
    return (
        <motion.div
            className="w-10 h-10 flex items-center justify-center cursor-pointer ml-4 bg-accent rounded-full"
            onClick={toggleTheme}
            title="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
        </motion.div>
    );
  }

  return (
      <motion.div
          className="w-10 h-10 flex items-center justify-center cursor-pointer ml-4 relative group"
          onPointerMove={handlePointerMove}
          onClick={toggleTheme}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} intensity={0.8} />
            <pointLight position={[-1, 1, 1]} intensity={0.3} color="#C8A2C8" />

            {/* Head */}
            <mesh ref={meshRef} position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshStandardMaterial
                  color={theme === "dark" ? "#C8A2C8" : "#1a2332"}
                  emissive="#C8A2C8"
                  emissiveIntensity={theme === "dark" ? 0.3 : 0.1}
                  roughness={0.3}
                  metalness={0.7}
              />
            </mesh>

            {/* Body */}
            <mesh position={[0, -0.1, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.7, 32]} />
              <meshStandardMaterial
                  color={theme === "dark" ? "#1a2332" : "#C8A2C8"}
                  roughness={0.4}
                  metalness={0.6}
              />
            </mesh>

            {/* Arms */}
            <mesh position={[-0.35, 0.1, 0]} rotation={[0, 0, 0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            <mesh position={[0.35, 0.1, 0]} rotation={[0, 0, -0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            {/* Legs */}
            <mesh position={[-0.15, -0.5, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            <mesh position={[0.15, -0.5, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>
          </Canvas>
        </div>
      </motion.div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <motion.nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              scrolled
                  ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-lg"
                  : "bg-transparent"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Enhanced Logo */}
          <motion.a
              href="#hero"
              className="font-black text-xl tracking-tight text-primary hover:text-primary transition-colors duration-300 relative group"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#hero");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Ammar Khan</span>
            <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                layoutId="logo-bg"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                  <motion.a
                      key={link.name}
                      href={link.href}
                      className={`relative font-medium transition-colors duration-300 group ${
                          activeSection === link.href.substring(1)
                              ? "text-primary"
                              : "text-foreground/80 hover:text-primary"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.name}
                    <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300"
                        initial={{ width: 0 }}
                        animate={{
                          width: activeSection === link.href.substring(1) ? "100%" : 0
                        }}
                    />
                    <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                    />
                  </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://github.com/ammarhere02",
                  icon: FaGithub,
                  label: "GitHub",
                  color: "hover:text-gray-300"
                },
                {
                  href: "https://linkedin.com/in/ammar-khan-7b656822a/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400"
                }
              ].map(({ href, icon: Icon, label, color }) => (
                  <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xl transition-all duration-300 ${color} relative group`}
                      aria-label={label}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                    <motion.div
                        className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        whileHover={{ scale: 1.2 }}
                    />
                  </motion.a>
              ))}

              <Enhanced3DThemeToggler />
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
              className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors duration-300 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col gap-1.5 w-6">
              {[0, 1, 2].map((index) => (
                  <motion.span
                      key={index}
                      className="block h-0.5 bg-primary transition-all duration-300"
                      animate={{
                        rotate: isOpen ? (index === 1 ? 0 : index === 0 ? 45 : -45) : 0,
                        y: isOpen ? (index === 1 ? 0 : index === 0 ? 6 : -6) : 0,
                        opacity: isOpen && index === 1 ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                  />
              ))}
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  className="lg:hidden bg-background/95 backdrop-blur-md border-t border-primary/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map((link, index) => (
                      <motion.a
                          key={link.name}
                          href={link.href}
                          className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                              activeSection === link.href.substring(1)
                                  ? "text-primary bg-primary/10 border-l-4 border-primary"
                                  : "text-foreground/80 hover:text-primary hover:bg-accent"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.href);
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.a>
                  ))}

                  {/* Mobile Social Links */}
                  <motion.div
                      className="flex gap-6 pt-4 border-t border-accent/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                  >
                    {[
                      { href: "https://github.com/ammarhere02", icon: FaGithub, label: "GitHub" },
                      { href: "https://linkedin.com/in/ammar-khan-7b656822a/", icon: FaLinkedin, label: "LinkedIn" }
                    ].map(({ href, icon: Icon, label }) => (
                        <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-foreground/70 hover:text-primary transition-colors duration-300"
                            aria-label={label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          <Icon />
                        </motion.a>
                    ))}

                    <div className="ml-auto">
                      <Enhanced3DThemeToggler />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
}