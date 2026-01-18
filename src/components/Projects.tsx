"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../data/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    tech: string[];
    description: string;
    link: string;
    demo?: string;
}

const Projects = () => {
    const liveProjects = PROJECTS.filter(project => project.demo);
    const showcaseProjects = PROJECTS.filter(project => !project.demo);

    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of projects demonstrating my expertise in Web Development and AI.
                    </p>
                </motion.div>

                {/* Live Demos Section */}
                {liveProjects.length > 0 && (
                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
                            Live Demos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {liveProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Showcase Section */}
                {showcaseProjects.length > 0 && (
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-secondary pl-4">
                            Project Showcase
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {showcaseProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
        >
            <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            title="GitHub Repo"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>

                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default Projects;
