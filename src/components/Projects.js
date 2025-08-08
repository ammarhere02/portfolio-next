"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
	{
		title: "AI-PowerPoint Enhancer",
		description:
			"Summarizes, scores, and enhances slides using OpenAI + Unsplash. Python + PowerPoint + OpenAI + REST API.",
		image: "/next.svg", // Placeholder
		github: "https://github.com/ammarhere02/ai-powerpoint-enhancer",
		highlight: true,
	},
	{
		title: "Movie Reservation App",
		description:
			"Node.js backend for booking, showtime, seats, auth. Express, Sequelize, MySQL.",
		image: "/vercel.svg", // Placeholder
		github: "https://github.com/ammarhere02/movie-reservation-app",
		highlight: false,
	},
	{
		title: "Vibe Coding Platform",
		description:
			"Web-based student project builder (host code, run live). MERN stack project.",
		image: "/next.svg", // Placeholder
		github: "https://github.com/ammarhere02/vibe-coding-platform",
		highlight: true,
	},
];

export default function Projects() {
	return (
		<section id="projects" className="w-full max-w-6xl mx-auto py-20 px-4">
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				Projects
			</motion.h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, i) => (
					<motion.div
						key={project.title}
						className={`relative flex flex-col bg-accent rounded-xl shadow-lg overflow-hidden border border-accent/40 transition-transform hover:scale-105 ${
							project.highlight ? "ring-2 ring-primary" : ""
						}`}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: i * 0.08 }}
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-40 object-contain bg-background p-4"
						/>
						<div className="p-5 flex-1 flex flex-col">
							<h3 className="text-xl font-bold text-primary mb-2">
								{project.title}
							</h3>
							<p className="text-foreground/80 mb-4 flex-1">
								{project.description}
							</p>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-auto"
							>
								<FaGithub /> GitHub
							</a>
						</div>
						{project.highlight && (
							<span className="absolute top-3 right-3 bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full shadow-neon">
								Top Project
							</span>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
}
