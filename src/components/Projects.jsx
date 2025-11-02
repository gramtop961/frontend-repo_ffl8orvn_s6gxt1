import { ExternalLink, Github, Server, Code, Database, Cloud } from 'lucide-react'

const projects = [
  {
    title: 'SaaS Analytics Platform',
    description:
      'Multi-tenant analytics with ASP.NET Core Web API, EF Core, PostgreSQL, and React TS dashboard. Role-based auth, background jobs, and charting.',
    stack: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Real-time Collaboration App',
    description:
      'SignalR-powered real-time updates, CQRS architecture, Azure App Service, and a responsive React UI with optimistic updates.',
    stack: ['ASP.NET Core', 'SignalR', 'Azure', 'React', 'TypeScript'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'E-commerce Microservice',
    description:
      'Catalog, orders, and payments microservices with gRPC, Redis caching, SQL Server, and a polished React storefront.',
    stack: ['.NET 8', 'gRPC', 'Redis', 'SQL Server', 'React', 'TypeScript'],
    links: { demo: '#', repo: '#' },
  },
]

function StackBadge({ label }) {
  const iconMap = {
    'ASP.NET Core': Server,
    '.NET 8': Server,
    React: Code,
    TypeScript: Code,
    PostgreSQL: Database,
    'SQL Server': Database,
    Azure: Cloud,
    Redis: Database,
    gRPC: Server,
    'EF Core': Database,
    Tailwind: Code,
    SignalR: Cloud,
  }
  const Icon = iconMap[label] || Code
  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
      <Icon size={14} /> {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-600">A few projects highlighting modern .NET backends and TypeScript frontends.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative border border-gray-200 rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition">
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <StackBadge key={s} label={s} />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.links.demo} className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                    <ExternalLink size={16} /> Live demo
                  </a>
                  <a href={p.links.repo} className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:underline">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
