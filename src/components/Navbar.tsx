'use client';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <header className="container mb-12">
      <nav className="flex gap-4 flex-wrap items-center">
        <Link href="/skills" className="nav-link bg-blue-500 text-white hover:bg-blue-600">
          Навички
        </Link>
        <Link href="/projects" className="nav-link bg-green-500 text-white hover:bg-green-600">
          Проєкти
        </Link>
        <Link href="/resume" className="nav-link bg-purple-500 text-white hover:bg-purple-600">
          Резюме
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
} 