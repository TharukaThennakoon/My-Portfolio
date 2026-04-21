
export default function ProjectCard({ project, index }) {
  return (
    <div
      className="
        relative
        bg-[#16121f]
        border border-purple-900/40
        rounded-2xl
        p-10
        shadow-lg shadow-purple-900/50
        hover:shadow-lg hover:shadow-purple-900
        hover:border-purple-500/60
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/5 to-transparent opacity-60 pointer-events-none"></div>

      <div className="relative z-10">

        <div className="flex justify-between items-start gap-10">

          <div>
            <span className="text-xs border px-3 py-1 rounded-full border-gray-700/60 bg-white/5">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-3xl font-serif mt-4 leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              {project.role}
            </p>
          </div>

          <div className="max-w-sm border-l border-purple-500 pl-6 text-gray-300 italic hidden md:block leading-relaxed">
            “{project.lesson}”
          </div>

        </div>

        <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs border border-gray-700/60 px-3 py-1 rounded-full bg-white/5 hover:border-purple-500/60 transition"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-16 mt-10 text-center">
          <div>
            <p className="text-xs text-gray-500 tracking-widest">LATENCY</p>
            <p className="text-xl text-purple-400 font-semibold mt-1">
              {project.metrics.latency}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 tracking-widest">TESTS</p>
            <p className="text-xl text-purple-400 font-semibold mt-1">
              {project.metrics.tests}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 tracking-widest">STARS</p>
            <p className="text-xl text-purple-400 font-semibold mt-1">
              {project.metrics.stars}
            </p>
          </div>
        </div>

        <div className="flex gap-8 mt-10 text-sm tracking-widest text-purple-400">
          <a href={project.links.github} className="hover:text-white transition">
            GITHUB ↗
          </a>

          <a href={project.links.live} className="hover:text-white transition">
            LIVE DEMO ↗
          </a>

          <a href={project.links.readme} className="hover:text-white transition">
            README ↗
          </a>
        </div>

      </div>
    </div>
  );
}