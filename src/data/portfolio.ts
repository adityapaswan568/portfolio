
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export const personalInfo = {
    name: "Aditya Paswan",
    role: "Creative Web Developer",
    bio: "I am a passionate Frontend Developer with a knack for creating intuitive and dynamic user experiences. I love learning new technologies and applying them to solve real-world problems. My journey in web development has equipped me with a strong foundation in React, Next.js, and modern CSS techniques.",
    stats: {
        projects: "5+",
        experience: "1+",
    }
};

export const projects = [
    {
        title: "Portfolio Website",
        description: "A professional portfolio website built with Next.js and custom CSS, featuring glassmorphism design and smooth animations.",
        tags: ["Next.js", "React", "CSS Modules", "Framer Motion"]
    },
    {
        title: "E-commerce Dashboard",
        description: "A responsive admin dashboard for managing products and orders, visualizing data with charts.",
        tags: ["React", "Chart.js", "Firebase", "Styled Components"]
    },
    {
        title: "Task Management App",
        description: "A productivity application allowing users to organize tasks with drag-and-drop functionality.",
        tags: ["TypeScript", "Redux", "Node.js", "Express"]
    },
];

export const skills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Git", icon: FaGitAlt },
];

export const contactInfo = {
    email: "aditya@example.com",
    footerText: `© ${new Date().getFullYear()} Aditya Paswan. All rights reserved.`
};
