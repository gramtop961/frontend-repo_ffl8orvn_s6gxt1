import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About me</h2>
          <p className="mt-4 text-gray-600">
            I’m a full‑stack engineer specializing in ASP.NET Core and React with TypeScript. I love clean architectures,
            resilient APIs, and crafting pixel‑perfect interfaces. My work blends strong backend fundamentals with delightful
            product experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <SkillItem label="ASP.NET Core" />
            <SkillItem label="C# / .NET 8" />
            <SkillItem label="React + TypeScript" />
            <SkillItem label="SQL Server / PostgreSQL" />
            <SkillItem label="Azure / Docker" />
            <SkillItem label="Clean Architecture" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-purple-200/20 to-transparent rounded-3xl pointer-events-none" />
          <div className="relative rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-semibold">What I do</h3>
            <ul className="mt-3 space-y-3 text-gray-600 list-disc list-inside">
              <li>Design and implement RESTful APIs with ASP.NET Core</li>
              <li>Build rich, accessible UIs with React + TypeScript</li>
              <li>Model data and optimize queries for SQL and NoSQL</li>
              <li>Deploy scalable apps to Azure with CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillItem({ label }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700">
      {label}
    </span>
  )
}

export default App
