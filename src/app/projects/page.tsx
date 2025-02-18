"use client";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/app/data/projects.json';
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-6xl mx-auto p-6 min-h-screen"
    >
      <motion.h1
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1}}
        transition={{ type: "spring", stiffness: 50}}
        className="text-4xl font-bold mb-8 text-foreground"
      >
        Мої проєкти
      </motion.h1>

      <motion.a
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="inline-block mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        ← Повернутись на головну
      </motion.a>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 } 
          }
        }}
      >
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
            // index={index}
          />
        ))}
      </motion.div>
    </motion.main>
  );
} 