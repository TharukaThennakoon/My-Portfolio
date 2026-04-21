
export default function ProjectCard({ project, index }) {
  return (
    <div className="relative bg-[#16121f] border border-purple-900/40 rounded-2xl p-10">

      <div className="flex justify-between items-start gap-10">
        <div>
          <span className="text-xs border px-3 py-1 rounded-full border-gray-700/60 bg-white/5">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-3xl font-serif mt-4">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            {project.role}
          </p>
        </div>

        <div className="max-w-sm border-l border-purple-500 pl-6 text-gray-300 italic hidden md:block">
          “{project.lesson}”
        </div>
      </div>

      <p className="text-gray-300 mt-6 max-w-xl">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs border border-gray-700/60 px-3 py-1 rounded-full bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-16 mt-10 text-center">
        <div>
          <p className="text-xs text-gray-500">LATENCY</p>
          <p className="text-xl text-purple-400">{project.metrics.latency}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">TESTS</p>
          <p className="text-xl text-purple-400">{project.metrics.tests}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">STARS</p>
          <p className="text-xl text-purple-400">{project.metrics.stars}</p>
        </div>
      </div>

    </div>
  );
}