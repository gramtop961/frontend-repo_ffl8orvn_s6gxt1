import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">Available for full-time roles and select freelance engagements.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a href="mailto:hello@example.com" className="group border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Mail size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Email</h3>
            <p className="text-sm text-gray-600">hello@example.com</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">Write a message <Send size={14} /></span>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Linkedin size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">LinkedIn</h3>
            <p className="text-sm text-gray-600">Connect professionally</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">Visit profile <Send size={14} /></span>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="group border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Github size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">GitHub</h3>
            <p className="text-sm text-gray-600">Explore code and contributions</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">See repositories <Send size={14} /></span>
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  )
}
