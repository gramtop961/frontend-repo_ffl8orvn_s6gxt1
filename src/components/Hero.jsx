import Spline from '@splinetool/react-spline'
import { ArrowRight, Code, Server } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[72vh] md:h-[82vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end">
          <div className="w-full pb-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">
                <Code size={14} /> ASP.NET + React TypeScript Developer
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Building sleek, scalable web apps
                <span className="block text-gray-500 text-2xl md:text-3xl mt-3 font-normal">with modern .NET backends and delightful React frontends</span>
              </h1>
              <p className="mt-6 text-gray-600 max-w-2xl">
                I craft high-performance APIs with ASP.NET Core and elegant user interfaces with React + TypeScript. Clean architecture, cloud-ready, and a focus on great DX.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-800 transition">
                  View Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 hover:border-gray-400 text-gray-700 bg-white">
                  Get in touch
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><Server size={16} className="text-blue-600" /> ASP.NET Core</span>
                <span className="inline-flex items-center gap-2"><Code size={16} className="text-blue-600" /> React + TypeScript</span>
                <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
