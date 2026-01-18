"use client";

import { motion } from "framer-motion";
import { PROFILE, EDUCATION, CERTIFICATIONS } from "../data/constants";

const About = () => {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Bio Section */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            {PROFILE.bio}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-slate-300">Location: {PROFILE.location}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-slate-300">Email: {PROFILE.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                Education
                                <div className="h-px bg-slate-800 flex-grow ml-4" />
                            </h3>
                            {EDUCATION.map((edu, index) => (
                                <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                    <p className="text-primary mb-2">{edu.institution}</p>
                                    <p className="text-slate-400 text-sm mb-2">{edu.duration}</p>
                                    <p className="text-slate-400 text-sm italic">{edu.focus}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                Certifications
                                <div className="h-px bg-slate-800 flex-grow ml-4" />
                            </h3>
                            <ul className="space-y-3">
                                {CERTIFICATIONS.map((cert, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-400">
                                        <span className="mt-2 w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
