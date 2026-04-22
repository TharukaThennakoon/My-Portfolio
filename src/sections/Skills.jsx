// Commit 3 - Add responsive skills grid
export default function Skills() {
  return (
    <section id="skills" className="bg-[#f5f5f7] text-black px-20 py-32">

      <div className="mb-20">
        <span className="text-xs tracking-widest text-gray-500">
          S02 — THE TOOLBOX
        </span>

        <h2 className="text-6xl font-serif mt-6 leading-tight">
          I'm fluent in the boring parts.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-300 pt-10">
        <div>Languages</div>
        <div>Frameworks</div>
        <div>Tools</div>
      </div>

    </section>
  );
}