"use client";
import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import dynamic from 'next/dynamic';

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), { ssr: false });

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Gallery", href: "#gallery" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function ThemeToggler3DAvatar() {
  const meshRef = useRef();
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  function handlePointerMove(e) {
    if (!meshRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    meshRef.current.rotation.y = x * 0.7;
    meshRef.current.rotation.x = y * 0.7;
  }

  function toggleTheme() {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
      }
      return next;
    });
  }

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 flex items-center justify-center cursor-pointer ml-4 bg-accent rounded-full animate-pulse"
        onClick={toggleTheme}
        title="Toggle theme"
      />
    );
  }

  return (
    <div
      className="w-10 h-10 flex items-center justify-center cursor-pointer ml-4"
      onPointerMove={handlePointerMove}
      onClick={toggleTheme}
      title="Toggle theme"
    >
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        {/* Head */}
        <mesh ref={meshRef} position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color={theme === "dark" ? "#39ff14" : "#222"}
            emissive="#39ff14"
            emissiveIntensity={theme === "dark" ? 0.3 : 0.1}
          />
        </mesh>
        {/* Body */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.7, 32]} />
          <meshStandardMaterial
            color={theme === "dark" ? "#222" : "#39ff14"}
          />
        </mesh>
        {/* Left arm */}
        <mesh position={[-0.35, 0.1, 0]} rotation={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Right arm */}
        <mesh position={[0.35, 0.1, 0]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Left leg */}
        <mesh position={[-0.15, -0.5, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Right leg */}
        <mesh position={[0.15, -0.5, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-accent shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight text-primary"
        >
          Ammar Khan
        </a>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/ammarhere02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ammar-khan-7b656822a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-primary"
          >
            <FaLinkedin />
          </a>
          <ThemeToggler3DAvatar />
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-primary mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary mb-1"></span>
          <span className="block w-6 h-0.5 bg-primary"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-accent px-4 py-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/ammarhere02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ammar-khan-7b656822a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
