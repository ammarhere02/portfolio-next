"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const projects = [
	{
		title: "AI-PowerPoint Enhancer",
		description:
			"An intelligent presentation enhancement tool that analyzes, scores, and improves PowerPoint slides using advanced AI.",
		github: "https://github.com/ammarhere02/Ai-PowerPoint",

		technologies: ["React", "Node.js", "Tailwind CSS", "OpenAI API"],
		features: ["AI Content Analysis", "Automatic Scoring", "Visual Enhancement"],
		status: "Featured",
		highlight: true,
	},
	{
		title: "Movie Reservation System",
		description:
			"A comprehensive backend solution for cinema management featuring real-time seat availability and secure payments.",
		github: "https://github.com/ammarhere02/Movie-Reserve",

		technologies: ["Express", "MongoDB", "JWT Auth", "Stripe"],
		features: ["Real-time Booking", "Seat Management", "Role-based Auth"],
		status: "Production Ready",
		highlight: false,
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
	},
};

export default function Projects() {
	const [hovered, setHovered] = useState(null);

	return (
		<section id="projects" className="max-w-7xl mx-auto py-20 px-4">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-responsive-xl font-black mb-4 gradient-text">
					Featured Projects
				</h2>
				<p className="text-responsive-md text-foreground/70">
					A showcase of innovative solutions built with modern technologies.
				</p>
			</motion.div>

			<motion.div
				className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{projects.map((proj, i) => (
					<motion.div
						key={proj.title}
						variants={cardVariants}
						className={`group relative flex flex-col bg-gradient-to-br from-accent to-secondary rounded-2xl shadow-lg border transition-transform duration-300 hover:-translate-y-2 ${
							proj.highlight
								? "border-primary shadow-neon lg:col-span-2"
								: "border-accent/40 hover:border-primary/50"
						}`}
						onHoverStart={() => setHovered(i)}
						onHoverEnd={() => setHovered(null)}
					>
						{proj.status && (
							<motion.div
								className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${
									proj.highlight
										? "bg-primary text-dark shadow-neon"
										: "bg-secondary text-primary border border-primary/30"
								}`}
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 500 }}
							>
								{proj.status}
							</motion.div>
						)}

						<motion.div className="p-6 flex-1 flex flex-col" layoutId={`card-${i}`}>
							<motion.h3
								className="text-xl font-bold text-primary mb-3"
								layoutId={`title-${i}`}
							>
								{proj.title}
							</motion.h3>
							<p className="text-foreground/80 mb-4 flex-1 text-sm leading-relaxed">
								{proj.description}
							</p>

							<div className="mb-4">
								<h4 className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-2">
									Key Features
								</h4>
								<div className="flex flex-wrap gap-1">
									{proj.features.map((feat) => (
										<span
											key={feat}
											className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
										>
                      {feat}
                    </span>
									))}
								</div>
							</div>

							<div className="mb-6">
								<h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
									Technologies
								</h4>
								<div className="flex flex-wrap gap-2">
									{proj.technologies.map((tech) => (
										<motion.span
											key={tech}
											className="text-xs bg-secondary/50 text-foreground/80 px-2 py-1 rounded-md border border-accent/30"
											whileHover={{ scale: 1.05 }}
										>
											{tech}
										</motion.span>
									))}
								</div>
							</div>

							<div className="flex gap-3 mt-auto">
								<motion.a
									href={proj.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<FaGithub />
									<span>View Code</span>
								</motion.a>
								<motion.a
									href={proj.live}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/70 transition-all duration-300"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<FaExternalLinkAlt />

								</motion.a>
							</div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className="text-center mt-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<p className="text-foreground/70 mb-6">
					Interested in collaborating or learning more?
				</p>
				<motion.a
					href="#contact"
					className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300"
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.98 }}
				>
					Let's Work Together
					<motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
						→
					</motion.span>
				</motion.a>
			</motion.div>
		</section>
	);
}