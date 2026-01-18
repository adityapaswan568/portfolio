"use client";

import { motion } from "framer-motion";
import { TECHNICAL_SKILLS } from "../data/constants";

const Skills = () => {
    const allSkills = [
        ...TECHNICAL_SKILLS.languages,
        ...TECHNICAL_SKILLS.frameworks,
        ...TECHNICAL_SKILLS.tools,
        ...TECHNICAL_SKILLS.ai_ml,
    ];

    return (
        <section className="py-20 bg-background overflow-hidden border-y border-white/5 relative">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
                    Technologies &amp; Tools
                </h2>
            </div>

            <div className="flex overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Repeat 4 times to ensure it fills wide screens */}
                    {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center px-8 py-4 bg-slate-900/50 border border-slate-800 rounded-xl min-w-[150px] shrink-0"
                        >
                            <span className="text-xl font-medium text-slate-300">{skill}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </section>
    );
};

export default Skills;
