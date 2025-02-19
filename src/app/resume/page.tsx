export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">CV</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Download PDF</h2>
        <a 
          href="/resume.pdf" 
          className="inline-block px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          download
        >
          Download CV
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
        <ul className="space-y-2">
          <li>✉️ Email: example@email.com</li>
          <li>📱 Mobile: +380 99 999 99 99</li>
          <li>🐁 Telegram : tg.org/your-profile</li>
        </ul>
      </section>
    </main>
  );
} 