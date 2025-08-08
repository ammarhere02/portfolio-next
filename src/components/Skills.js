"use client";
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGit, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiBootstrap, SiExpress, SiNestjs, SiMysql, SiSequelize, SiCplusplus, SiPython } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import dynamic from 'next/dynamic';

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })), { ssr: false });

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Sequelize", icon: <SiSequelize className="text-blue-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "C++ (DSA/OOP)", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "LLMs (AI/ML)", icon: <GiArtificialIntelligence className="text-green-400" /> },
];

function Moving3DToddler() {
  const meshRef = useRef();
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

  if (!mounted) {
    return <div className="w-40 h-40 mx-auto mb-10 bg-accent rounded-xl animate-pulse"></div>;
  }

  return (
    <div className="w-40 h-40 mx-auto mb-10 cursor-pointer" onPointerMove={handlePointerMove}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        {/* Head */}
        <mesh ref={meshRef} position={[0, 1, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="#39ff14" emissive="#39ff14" emissiveIntensity={0.2} />
        </mesh>
        {/* Body */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        {/* Left arm */}
        <mesh position={[-0.7, 0.2, 0]} rotation={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Right arm */}
        <mesh position={[0.7, 0.2, 0]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Left leg */}
        <mesh position={[-0.3, -1, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.7, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
        {/* Right leg */}
        <mesh position={[0.3, -1, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.7, 16]} />
          <meshStandardMaterial color="#39ff14" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-4">
      <Moving3DToddler />
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center gap-2 bg-accent rounded-xl p-4 shadow hover:shadow-neon transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="text-4xl mb-1">{skill.icon}</span>
            <span className="text-base font-medium text-foreground/90">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
