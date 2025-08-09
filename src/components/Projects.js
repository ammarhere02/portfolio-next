"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useState } from "react";

const projects = [
	{
		title: "AI-PowerPoint Enhancer",
		description: "An intelligent presentation enhancement tool that analyzes, scores, and improves PowerPoint slides using advanced AI. Features automatic content summarization, visual enhancement suggestions, and integration with Unsplash for high-quality imagery.",
		image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
		github: "https://github.com/ammarhere02/ai-powerpoint-enhancer",
		highlight: true,
		technologies: ["Python", "OpenAI", "PowerPoint API", "REST API", "Unsplash API"],
		features: ["AI Content Analysis", "Automatic Scoring", "Visual Enhancement", "API Integration"],
		status: "Featured"
	},
	{
		title: "Movie Reservation System",
		description: "A comprehensive backend solution for cinema management featuring advanced booking algorithms, real-time seat availability, secure payment processing, and comprehensive user authentication with role-based access control.",
		image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
		github: "https://github.com/ammarhere02/movie-reservation-app",
		highlight: false,
		technologies: ["Node.js", "Express", "Sequelize", "MySQL", "JWT"],
		features: ["Real-time Booking", "Seat Management", "User Authentication", "Payment Integration"],
		status: "Production Ready"
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			type: "spring",
			stiffness: 100,
			damping: 15
		},
	},
};

export default function Projects() {
	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<section id="projects" className="w-full max-w-7xl mx-auto py-20 px-4">
			{/* Enhanced Header */}
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="text-responsive-xl font-black mb-6 gradient-text">
					Featured Projects
				</h2>
				<p className="text-responsive-md text-foreground/70 max-w-3xl mx-auto leading-relaxed">
					A showcase of innovative solutions I've built, from AI-powered tools to full-stack applications.
					Each project represents a unique challenge solved with modern technologies.
				</p>
			</motion.div>

			{/* Projects Grid */}
			<motion.div
				className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						variants={cardVariants}
						className={`group relative flex flex-col bg-gradient-to-br from-accent to-secondary rounded-2xl shadow-lg overflow-hidden border transition-all duration-500 hover:scale-[1.02] ${project.highlight ? 'border-primary shadow-neon lg:col-span-2 xl:col-span-1' : 'border-accent/40 hover:border-primary/50'}`}
						onHoverStart={() => setHoveredProject(index)}
						onHoverEnd={() => setHoveredProject(null)}
						whileHover={{ y: -8 }}
					>
						{/* Status Badge */}
						{project.status && (
							<motion.div
								className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold ${project.highlight ? 'bg-primary text-dark shadow-neon' : 'bg-secondary text-primary border border-primary/30'}`}
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 500 }}
							>
								{project.status}
							</motion.div>
						)}

						{/* Project Image */}
						<div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-secondary">
							<motion.img
								src={project.image}
								alt={`${project.title} preview`}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								loading="lazy"
							/>

							{/* Image Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							{/* Floating Action Buttons */}
							<motion.div
								className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ y: -20 }}
								animate={hoveredProject === index ? { y: 0 } : { y: -20 }}
							>
								<motion.a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 bg-dark/80 backdrop-blur-sm rounded-full text-primary hover:bg-primary hover:text-dark transition-colors duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									aria-label={`View ${project.title} source code`}
								>
									<FaGithub className="text-lg" />
								</motion.a>
								<motion.a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 bg-dark/80 backdrop-blur-sm rounded-full text-primary hover:bg-primary hover:text-dark transition-colors duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									aria-label={`Live demo of ${project.title}`}
								>
									<FaExternalLinkAlt className="text-lg" />
								</motion.a>
							</motion.div>
						</div>

						{/* Project Content */}
						<div className="p-6 flex-1 flex flex-col">
							{/* Title */}
							<motion.h3
								className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-300"
								layoutId={`title-${index}`}
							>
								{project.title}
							</motion.h3>

							{/* Description */}
							<p className="text-foreground/80 mb-4 flex-1 leading-relaxed text-sm">
								{project.description}
							</p>

							{/* Features */}
							<div className="mb-4">
								<h4 className="text-xs font-semibold text-primary/80 mb-2 uppercase tracking-wide">
									Key Features
								</h4>
								<div className="flex flex-wrap gap-1">
									{project.features.map((feature) => (
										<span
											key={feature}
											className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
										>
                      {feature}
                    </span>
									))}
								</div>
							</div>

							{/* Technologies */}
							<div className="mb-6">
								<h4 className="text-xs font-semibold text-foreground/60 mb-2 uppercase tracking-wide">
									Technologies
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<motion.span
						<div className="flex gap-4 mt-auto">
											className="text-xs bg-secondary/50 text-foreground/80 px-2 py-1 rounded-md border border-accent/30 hover:border-primary/30 transition-colors duration-300"
											whileHover={{ scale: 1.05 }}
										>
											{tech}
								className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-background font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 group/btn shadow-lg"
									))}
								</div>
							</div>

								<FaGithub className="text-lg group-hover/btn:scale-110 transition-transform duration-300" />
							<div className="flex gap-3 mt-auto">
								<motion.a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 border-2 border-primary/40 text-primary rounded-xl hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 font-semibold"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									aria-label={`View ${project.title} on GitHub`}
									<FaStar className="text-lg" />
									<span>Star</span>
									<span>View Code</span>
								</motion.a>

								{project.highlight && (
									<motion.button
										className="px-4 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<FaStar className="text-sm" />
										<span className="text-sm">Star</span>
									</motion.button>
								)}
							</div>
						</div>

						{/* Hover Glow Effect */}
						<motion.div
							className={`absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${project.highlight ? 'bg-primary/90 text-background' : 'bg-background/80 text-primary border border-primary/40'}`}
							initial={false}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Call to Action */}
			<motion.div
				className="text-center mt-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<p className="text-foreground/70 mb-6">
					Interested in collaborating or learning more about these projects?
				</p>
				<motion.a
					href="#contact"
					className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300"
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.98 }}
				>
					Let's Work Together
					<motion.span
						animate={{ x: [0, 5, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						→
					</motion.span>
				</motion.a>
			</motion.div>
		</section>
	);
}