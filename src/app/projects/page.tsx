import projectsData from '@/app/data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Мої проєкти</h1>
      <div className="grid gap-6">
        {projectsData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                GitHub →
              </a>
            </div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, tIndex) => (
                <span 
                  key={tIndex}
                  className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 