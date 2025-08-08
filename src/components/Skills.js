"use client";
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGit,
  FaFigma
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiBootstrap,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiSequelize,
  SiCplusplus,
  SiPython
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import dynamic from 'next/dynamic';

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(
    () => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })),
    { ssr: false }
);

const skillCategories = {
  "Frontend": {
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    ]
  },
  "Backend": {
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
    ]
  },
  "Database": {
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "Sequelize", icon: <SiSequelize className="text-blue-400" /> },
    ]
  },
  "DevOps & Tools": {
    color: "from-orange-500 to-red-400",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Git", icon: <FaGit className="text-orange-600" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    ]
  },
  "Programming": {
    color: "from-indigo-500 to-blue-400",
    skills: [
      { name: "C++ (DSA/OOP)", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    ]
  },
  "AI/ML": {
    color: "from-primary to-secondary",
    skills: [
      { name: "LLMs (AI/ML)", icon: <GiArtificialIntelligence className="text-primary" /> },
    ]
  }
};

function Enhanced3DAvatar() {
  const meshRef = useRef();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handlePointerMove = (e) => {
    if (!meshRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    meshRef.current.rotation.y = x * 0.5;
    meshRef.current.rotation.x = y * 0.3;
  };

  if (!mounted) {
    return (
        <div className="w-48 h-48 mx-auto mb-12 bg-gradient-to-br from-accent to-secondary rounded-2xl animate-pulse shadow-neon" />
    );
  }

  return (
      <motion.div
          className="w-48 h-48 mx-auto mb-12 cursor-pointer relative group"
          onPointerMove={handlePointerMove}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-neon group-hover:shadow-neon-strong transition-all duration-500">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} intensity={0.8} />
            <pointLight position={[-2, 2, 2]} intensity={0.5} color="#C8A2C8" />

            {/* Enhanced Head */}
            <mesh ref={meshRef} position={[0, 1.2, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial
                  color={isHovered ? "#C8A2C8" : "#2a3441"}
                  emissive="#C8A2C8"
                  emissiveIntensity={isHovered ? 0.3 : 0.1}
                  roughness={0.3}
                  metalness={0.7}
              />
            </mesh>

            {/* Enhanced Body */}
            <mesh position={[0, -0.1, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 1.4, 32]} />
              <meshStandardMaterial
                  color="#1a2332"
                  roughness={0.4}
                  metalness={0.6}
              />
            </mesh>

            {/* Enhanced Arms */}
            <mesh position={[-0.8, 0.3, 0]} rotation={[0, 0, 0.6]}>
              <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            <mesh position={[0.8, 0.3, 0]} rotation={[0, 0, -0.6]}>
              <cylinderGeometry args={[0.12, 0.12, 0.9, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            {/* Enhanced Legs */}
            <mesh position={[-0.35, -1.2, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.8, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>

            <mesh position={[0.35, -1.2, 0]}>
              <cylinderGeometry args={[0.14, 0.14, 0.8, 16]} />
              <meshStandardMaterial color="#C8A2C8" emissive="#C8A2C8" emissiveIntensity={0.1} />
            </mesh>
          </Canvas>
        </div>
      </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
      <section id="skills" className="w-full max-w-7xl mx-auto py-20 px-4">
        <Enhanced3DAvatar />

        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <h2 className="text-responsive-xl font-black mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-responsive-md text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, { color, skills }], categoryIndex) => (
              <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="relative"
              >
                {/* Category Header */}
                <motion.div
                    className="flex items-center gap-4 mb-8"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-1 h-12 bg-gradient-to-b ${color} rounded-full shadow-neon`} />
                  <h3 className="text-2xl font-bold text-foreground/90">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  {skills.map((skill, skillIndex) => (
                      <motion.div
                          key={skill.name}
                          className="group relative card-enhanced hover:scale-105 transition-all duration-300 cursor-pointer"
                          variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                              }
                            }
                          }}
                          whileHover={{
                            y: -8,
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                          }}
                          onHoverStart={() => setSelectedCategory(category)}
                          onHoverEnd={() => setSelectedCategory(null)}
                      >
                        {/* Skill Icon */}
                        <motion.div
                            className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>

                        {/* Skill Name */}
                        <h4 className="text-sm font-semibold text-foreground/90 text-center leading-tight mb-2">
                          {skill.name}
                        </h4>

                        {/* Category Badge */}
                        <motion.div
                            className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-dark text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          {category}
                        </motion.div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent to-secondary rounded-full border border-primary/20 shadow-neon">
          <span className="text-primary font-bold">
            {Object.values(skillCategories).reduce((total, category) => total + category.skills.length, 0)}+ Technologies
          </span>
            <div className="w-px h-6 bg-primary/30" />
            <span className="text-foreground/70">
            {Object.keys(skillCategories).length} Categories
          </span>
          </div>
        </motion.div>
      </section>
  );
}
