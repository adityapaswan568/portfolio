"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/constants";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Work <span className="text-secondary">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot on timeline */}
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />

                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-secondary/50 transition-colors">
                                <span className="text-sm text-secondary font-mono mb-2 block">{exp.date}</span>
                                <h3 className="text-xl font-bold text-white max-w-lg">{exp.role}</h3>
                                <h4 className="text-lg text-slate-400 mb-4">{exp.company || exp.event}</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    {exp.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
