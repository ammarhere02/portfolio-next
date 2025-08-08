"use client";
import { motion } from "framer-motion";

const experiences = [
	{
		role: "Backend Intern",
		company: "Southville Solutions",
		location: "Remote",
		period: "Feb 2024 – May 2024",
		details: [
			"Developed secure RESTful APIs with Node.js, Express, Sequelize",
			"Integrated backend services with MySQL databases",
			"Focused on API design, user auth, and performance optimization",
		],
	},
	{
		role: "Business Developer Intern",
		company: "OOPSOL",
		location: "Remote",
		period: "Dec 2023 – Jan 2024",
		details: [
			"Participated in LinkedIn strategy meetings, team collaboration, and skill-building",
		],
	},
];

export default function Experience() {
	return (
		<section id="experience" className="w-full max-w-4xl mx-auto py-20 px-4">
			<motion.h2
				className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				Experience
			</motion.h2>
			<div className="flex flex-col gap-8">
				{experiences.map((exp, i) => (
					<motion.div
						key={exp.role + exp.company}
						className="bg-accent rounded-xl p-6 shadow hover:shadow-neon border border-accent/40"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: i * 0.08 }}
					>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
							<span className="font-bold text-lg text-primary">
								{exp.role}
							</span>
							<span className="text-sm text-foreground/60">
								{exp.period}
							</span>
						</div>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
							<span className="font-semibold text-foreground/90">
								{exp.company}
							</span>
							<span className="text-sm text-foreground/60">
								{exp.location}
							</span>
						</div>
						<ul className="list-disc list-inside text-foreground/80 mt-2">
							{exp.details.map((d, j) => (
								<li key={j}>{d}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	);
}
