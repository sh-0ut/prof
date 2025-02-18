"use client";
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/app/data/projects.json';
import Link from "next/link";
import { useState, useEffect } from 'react';

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-6xl mx-auto p-6 min-h-screen relative overflow-x-hidden"
      style={{ transform: selectedProject !== null ?  'none' /* 'translateX(-20%)' */ : 'none' }}
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
            : '1fr'
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
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            key={projectsData.projects[selectedProject].title}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-800 shadow-xl p-8 z-50"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors"
            >
              &times;
            </button>
            
            <h2 className="text-3xl font-bold mb-4">
              {projectsData.projects[selectedProject].title}
            </h2>
            <p className="text-lg mb-6">
              {projectsData.projects[selectedProject].description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Технології</h3>
              <div className="flex flex-wrap gap-2">
                {projectsData.projects[selectedProject].stack.map((tech) => (
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={projectsData.projects[selectedProject].github}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              {/* <GitHubIcon className="w-5 h-5" /> */}
              Перейти до репозиторію
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
} 