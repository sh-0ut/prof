import skillsData from '@/app/data/skills.json';

export default function SkillsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Мої навички</h1>
      <div className="space-y-6">
        {skillsData.skills.map((skill, index) => (
          <div key={index} className="border p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                {skill.category}
              </span>
            </div>
            {skill.projects.length > 0 && (
              <div className="mt-2">
                <p className="text-gray-600 text-sm">Використано в проєктах:</p>
                <ul className="list-disc list-inside ml-4">
                  {skill.projects.map((project, pIndex) => (
                    <li key={pIndex} className="text-gray-700">{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 