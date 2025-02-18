export default function Home() {
  return (
    <main className="container">
      <header className="mb-12">
        <h1>Вітаю на моєму портфоліо</h1>
        <nav className="flex gap-4 flex-wrap">
          <a href="/skills" className="nav-link bg-blue-500 text-white hover:bg-blue-600">
            Навички
          </a>
          <a href="/projects" className="nav-link bg-green-500 text-white hover:bg-green-600">
            Проєкти
          </a>
          <a href="/resume" className="nav-link bg-purple-500 text-white hover:bg-purple-600">
            Резюме
          </a>
        </nav>
      </header>
      
      <section>
        <h2>Про мене</h2>
        <p>
          Я розробник з досвідом створення сучасних веб-додатків. 
          Спеціалізуюсь на екосистемі JavaScript.
        </p>
      </section>
    </main>
  );
} 