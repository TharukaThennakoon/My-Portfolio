// Commit 3 - Add responsive two-column layout
export default function Education() {
  return (
    <section id="education" className="px-20 py-32 bg-[#0b0613] text-white">

      <div className="mb-20">
        <p className="text-xs tracking-widest text-gray-500 mb-6">
          S03 — EDUCATION & GROWTH
        </p>

        <h2 className="text-6xl md:text-7xl font-serif leading-tight">
          Still in school.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>Education Timeline</div>
        <div>Certifications</div>
      </div>

    </section>
  );
}