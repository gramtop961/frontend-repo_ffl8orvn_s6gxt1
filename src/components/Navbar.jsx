import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">A.</span> Dev Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            <Mail size={16} /> Hire Me
          </a>
        </nav>
        <div className="flex md:hidden items-center gap-3">
          <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <Linkedin size={18} />
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
