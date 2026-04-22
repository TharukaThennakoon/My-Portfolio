import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Work() {
  return (
    <section id="work" className="px-20 py-32">

      {/* HEADER */}
      <div className="text-center mb-20">
        <span className="text-xs border px-4 py-1 rounded-full border-purple-500 text-purple-400">
          S01 — SELECTED WORK
        </span>

        <h2 className="text-6xl font-serif mt-8">
          Three projects.
          <br />
          <span className="text-purple-500 italic">
            A thousand commits.
          </span>
        </h2>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}