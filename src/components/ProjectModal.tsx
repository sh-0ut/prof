import { motion } from 'framer-motion';
 
import Link from 'next/link';
import { useEffect } from 'react';

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    stack: string[];
    github: string;
  };
  onClose: () => void;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      key={project.title}
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-800 shadow-xl p-8 z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors"
      >
        &times;
      </button>
      
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-lg mb-6">{project.description}</p>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Технології</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={project.github}
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        Перейти до репозиторію
      </Link>
    </motion.div>
  );
};