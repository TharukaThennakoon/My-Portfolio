// Work.jsx — improved with proper section wrapper and spacing
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <section id="work" className="bg-[#0b0b0f] text-white px-20 py-32">

      {/* Header */}
      <div className="text-center mb-24">
        <span className="text-[11px] border border-purple-500/60 bg-purple-500/10 px-4 py-1.5 rounded-full text-purple-400 tracking-widest">
          S01 — SELECTED WORK
        </span>
        <h2 className="text-6xl font-serif mt-10 leading-tight">
          Three projects.
          <br />
          <span className="text-purple-400 italic">A thousand commits.</span>
        </h2>
      </div>

      {/* Project rows — each separated by a subtle divider */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} index={index} />
            {index < projects.length - 1 && (
              <div className="border-t border-gray-800/50 mt-4" />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}