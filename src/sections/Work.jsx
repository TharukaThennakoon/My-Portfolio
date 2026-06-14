import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <section id="work" className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 mesh-dark pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <span className="section-badge">S01 — SELECTED WORK</span>
          <h2 className="section-title mt-10">
            {projects.length} projects.
            <br />
            <span className="text-purple-400 italic">A thousand commits.</span>
          </h2>
          <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
            From encrypted messaging to ML pipelines — each project taught me something
            the docs never mention.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} index={index} />
              {index < projects.length - 1 && (
                <div className="border-t border-gray-800/30 mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
