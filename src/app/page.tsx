export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Вітаю</h1>
        <nav className="flex gap-4">
          <a href="/skills" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Навички
          </a>
          <a href="/projects" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Проєкти
          </a>
          <a href="/resume" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
            Резюме
          </a>
        </nav>
      </header>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Про мене</h2>
        <p className="text-lg">
          Я розробник з досвідом створення сучасних веб-додатків. 
          Спеціалізуюсь на екосистемі JavaScript.
        </p>
      </section>
    </main>
  );
} 