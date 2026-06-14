// ProjectCard.jsx — alternating image/text layout matching reference exactly
// Even index (0,2…): image LEFT, text RIGHT
// Odd index  (1,3…): text LEFT, image RIGHT

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-stretch gap-0 group min-h-[340px]`}>

      {/* ══ IMAGE PANEL ══ */}
      <div className={`
        relative overflow-hidden rounded-2xl flex-1
        ${isEven ? "md:order-1" : "md:order-2"}
        border border-purple-900/30
      `}>
        {/* Purple atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-950/30 to-black/60 z-10 pointer-events-none rounded-2xl" />

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full min-h-[320px] object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700"
          />
        ) : (
          /* Rich mock-app placeholder — mimics the UI screenshots in the reference */
          <MockScreen project={project} index={index} />
        )}
      </div>

      {/* ══ TEXT PANEL ══ */}
      <div className={`
        flex flex-col justify-center flex-1
        px-10 py-10
        ${isEven ? "md:order-2" : "md:order-1"}
      `}>

        {/* Number + role badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] border border-gray-700 bg-white/5 px-3 py-1 rounded-full font-mono text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.category && (
            <span className="text-[11px] border border-purple-500/50 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full tracking-wide">
              {project.category}
            </span>
          )}
        </div>

        <h3 className="text-3xl xl:text-4xl font-serif text-white leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-purple-400 mt-1 tracking-wide">{project.role}</p>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm">
          {project.description}
        </p>

        {/* Lesson quote */}
        {project.lesson && (
          <blockquote className="mt-4 border-l-2 border-purple-500 pl-4 text-gray-500 italic text-sm leading-relaxed">
            "{project.lesson}"
          </blockquote>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[11px] border border-gray-700/60 px-3 py-1 rounded-full bg-white/5 text-gray-400 hover:border-purple-500/60 hover:text-purple-300 transition">
              {t}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex gap-8 mt-6 pt-5 border-t border-gray-800">
          {Object.entries(project.metrics).map(([key, val]) => (
            <div key={key}>
              <p className="text-[10px] tracking-widest text-gray-600 uppercase font-mono">{key}</p>
              <p className="text-lg text-purple-400 font-semibold mt-0.5">{val}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-5 text-[11px] tracking-widest text-purple-400">
          <a href={project.links?.github}  target="_blank" rel="noreferrer" className="hover:text-white transition">GITHUB ↗</a>
          <a href={project.links?.live}    target="_blank" rel="noreferrer" className="hover:text-white transition">LIVE DEMO ↗</a>
          <a href={project.links?.readme}  target="_blank" rel="noreferrer" className="hover:text-white transition">README ↗</a>
        </div>

      </div>
    </div>
  );
}

/* ── Atmospheric mock-screen placeholder ─────────────────────────────────── */
function MockScreen({ project, index }) {
  const palettes = [
    { bg: "#1a0a2e", accent: "#a855f7", line: "#7c3aed" },   // deep purple
    { bg: "#0a1628", accent: "#22d3ee", line: "#0891b2" },   // cyber blue
    { bg: "#0d1f0d", accent: "#4ade80", line: "#16a34a" },   // terminal green
  ];
  const p = palettes[index % palettes.length];
  const logLines = [
    "feat: add auth flow",
    "fix: race condition in queue",
    "refactor: extract service layer",
    "test: add unit coverage",
    "chore: update deps",
  ];

  return (
    <div
      className="w-full min-h-[320px] h-full rounded-2xl overflow-hidden relative flex flex-col"
      style={{ background: p.bg }}
    >
      {/* Fake window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-4 text-[11px] font-mono text-white/30">
          {project.title.toLowerCase().replace(/\s+/g, "-")}/main
        </span>
      </div>

      {/* Body content */}
      <div className="flex-1 p-6 font-mono text-[11px] leading-6 overflow-hidden">
        <div style={{ color: p.accent }} className="mb-2 opacity-80">
          $ npm run dev
        </div>
        <div className="text-white/30">  VITE v5.0.0  ready</div>
        <div className="text-white/20">  ➜  Local: http://localhost:5173/</div>
        <div className="mt-3 text-white/20">$ git log --oneline -5</div>
        {logLines.map((msg, i) => (
          <div key={i} className="text-white/20">
            <span style={{ color: p.line }} className="mr-2">{makeStableHash(`${project.title}-${index}-${i}-${msg}`)}</span>
            {msg}
          </div>
        ))}
        <div className="mt-4" style={{ color: p.accent }}>
          ✓ {project.metrics?.tests || "94%"} test coverage
        </div>
        <div className="text-white/20">
          ⚡ latency {project.metrics?.latency || "< 80ms"}
        </div>
      </div>

      {/* Large ghost number */}
      <div
        className="absolute bottom-4 right-6 text-8xl font-serif font-bold pointer-events-none select-none"
        style={{ color: p.accent, opacity: 0.08 }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Subtle glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: p.accent, opacity: 0.07 }}
      />
    </div>
  );
}

function makeStableHash(input) {
  let hash = 0;

  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) >>> 0;
  }

  return hash.toString(16).padStart(7, "0").slice(0, 7);
}