export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Моє резюме</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Завантажити PDF</h2>
        <a 
          href="/resume.pdf" 
          className="inline-block px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          download
        >
          Завантажити резюме
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Контактна інформація</h2>
        <ul className="space-y-2">
          <li>📧 Email: example@email.com</li>
          <li>📱 Телефон: +380 99 999 99 99</li>
          <li>💼 LinkedIn: linkedin.com/in/your-profile</li>
        </ul>
      </section>
    </main>
  );
} 