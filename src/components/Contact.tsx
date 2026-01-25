"use client";

import { motion } from "framer-motion";
import { PROFILE, SOCIAL_LINKS } from "../data/constants";
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Let&apos;s <span className="text-primary">Connect</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <FaEnvelope size={20} />
                                </div>
                                <span>{PROFILE.email}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <FaPhone size={20} />
                                </div>
                                <span>{PROFILE.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-primary">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <span>{PROFILE.location}</span>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 transition-all duration-300"
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800"
                    >
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get("name");
                                const email = formData.get("email");
                                const message = formData.get("message");

                                const mailtoLink = `mailto:${PROFILE.email}?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
                                window.location.href = mailtoLink;
                            }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
