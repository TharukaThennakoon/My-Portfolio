
export default function ProjectCard({ project, index }) {
  return (
    <div className="relative bg-[#16121f] border border-purple-900/40 rounded-2xl p-10">
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

      </div>
    </div>
  );
}