"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PROFILE, SOCIAL_LINKS } from "../data/constants";
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter, FaDownload } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-background pt-20 pb-20">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Left Content: Text & Buttons */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">
                                Hello, I&apos;m
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                                {PROFILE.name}
                            </h1>
                            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 h-16">
                                {PROFILE.tagline}
                            </h2>
                            <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed mx-auto md:mx-0">
                                {PROFILE.bio}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center md:items-start gap-6 justify-center md:justify-start"
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/files/Aditya_Paswan_Resume.pdf"
                                    download
                                    className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 whitespace-nowrap"
                                >
                                    <FaDownload /> Download Resume
                                </a>

                                <a
                                    href="/files/Aditya_Paswan_CV.pdf"
                                    download
                                    className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:text-white font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 whitespace-nowrap"
                                >
                                    <FaDownload /> Download CV
                                </a>
                            </div>

                            <div className="flex gap-6 mt-4 sm:mt-0">
                                <SocialIcon href={SOCIAL_LINKS.github} icon={<FaGithub />} />
                                <SocialIcon href={SOCIAL_LINKS.linkedin} icon={<FaLinkedin />} />
                                <SocialIcon href={SOCIAL_LINKS.stackoverflow} icon={<FaStackOverflow />} />
                                <SocialIcon href={SOCIAL_LINKS.twitter} icon={<FaTwitter />} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content: Profile Picture */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] relative z-10 bg-slate-900">
                                <Image
                                    src="/profile.jpg"
                                    alt="Aditya Paswan"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements behind image */}
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform translate-x-4 translate-y-4 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block" // Hidden on small screens if space is tight, though usually fine
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-slate-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white hover:scale-110 transition-all text-2xl"
    >
        {icon}
    </a>
);

export default Hero;
