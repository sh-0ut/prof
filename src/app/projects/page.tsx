"use client";
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/app/data/projects.json';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { ProjectModal } from '@/components/ProjectModal';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-6xl mx-auto p-6 min-h-screen relative overflow-x-hidden"
      style={{ transform: selectedProject !== null ? ''/* 'translateX(-30%)' */ : 'none' }}
      // style={{ 
      //   transform: selectedProject !== null && typeof window !== 'undefined' && window.innerWidth > 768 
      //     ? 'translateX(-30%)' 
      //     : 'none' 
      // }}
    >
      <motion.h1
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1}}
        transition={{ type: "spring", stiffness: 50}}
        className="text-4xl font-bold mb-8 text-foreground"
      >
       Проєкти
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 } 
          }
        }}
        layout
        transition={{ duration: 0.3 }}
        style={{
          gridTemplateColumns: selectedProject === null 
            ? 'repeat(auto-fit, minmax(300px, 1fr))' 
            : '1fr',
          width: selectedProject !== null && (typeof window !== 'undefined' && window.innerWidth > 768)
            ? '47%'
            : ''
        }}
      >
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
            index={index}
            onClick={() => handleCardClick(index)}
            onHover={(isHovered) => {
              if (isHovered) {
                console.log(isHovered);
              } else {
                console.log(isHovered);
              }
            }
          }
          />
        ))}
      </motion.div>


    </motion.main>
    <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal 
            project={projectsData.projects[selectedProject]}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
} 