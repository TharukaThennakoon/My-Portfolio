export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col items-stretch md:flex-row group gap-8 md:gap-14"
         style={{ minHeight: "360px" }}>

      <div className={[
        "relative overflow-hidden rounded-2xl flex-shrink-0 w-full md:max-w-[52%]",
        isEven ? "md:order-1" : "md:order-2",
      ].join(" ")}>
        {project.image ? (
          <img src={project.image} alt={project.title}
               className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 min-h-[320px]" />
        ) : (
          <AtmosphericMock project={project} index={index} />
        )}
      </div>

      <div className={[
        "flex flex-col justify-center flex-1 py-4 md:py-8",
        isEven ? "md:order-2" : "md:order-1",
      ].join(" ")}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] border border-gray-700 bg-white/5 px-3 py-1 rounded-full font-mono text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.category && (
            <span className="text-[11px] border border-purple-500/50 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full tracking-wide">
              {project.category}
            </span>
          )}
        </div>

        <h3 className="text-3xl xl:text-[2.1rem] font-serif text-white leading-snug">
          {project.title}
        </h3>
        <p className="mt-1 text-sm tracking-wide text-purple-400">{project.role}</p>
        <p className="max-w-md mt-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

        {project.lesson && (
          <blockquote className="pl-4 mt-4 text-sm italic leading-relaxed text-gray-500 border-l-2 border-purple-500/60">
            &ldquo;{project.lesson}&rdquo;
          </blockquote>
        )}

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[11px] border border-gray-700/60 px-3 py-1 rounded-full bg-white/5 text-gray-400">
              {t}
            </span>
          ))}
        </div>

        {project.metrics && (
          <div className="flex gap-8 pt-5 mt-6 border-t border-gray-800/80">
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key}>
                <p className="text-[10px] tracking-widest text-gray-600 uppercase font-mono">{key}</p>
                <p className="text-lg text-purple-400 font-semibold mt-0.5">{val}</p>
              </div>
            ))}
          </div>
        )}

        {(project.links?.github || project.links?.live) && (
          <div className="flex gap-6 mt-5 text-[11px] tracking-widest text-purple-400">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GITHUB ↗</a>
            )}
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="hover:text-white transition">LIVE DEMO ↗</a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AtmosphericMock({ project, index }) {
  if (index % 3 === 0) return <MessengerMock />;
  if (index % 3 === 1) return <TerminalMock project={project} />;
  return <WaveformMock project={project} />;
}

function MessengerMock() {
  return (
    <div className="w-full min-h-[320px] rounded-2xl relative overflow-hidden flex items-center justify-center"
         style={{ background: "radial-gradient(ellipse at 30% 40%, #3b0764 0%, #1a0533 40%, #0d0118 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(circle at 35% 45%, rgba(168,85,247,0.35) 0%, transparent 60%)" }} />
      <div className="relative z-10 w-36 rounded-2xl overflow-hidden shadow-2xl"
           style={{ border: "1px solid rgba(168,85,247,0.4)", background: "#1a0533" }}>
        <div className="flex justify-between px-3 py-1.5 text-[8px] text-purple-300/70">
          <span>9:41</span><span>●●●</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border-b border-purple-900/50">
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white">E</div>
          <span className="text-[9px] text-white">Encrypted Chat</span>
        </div>
        <div className="p-2 space-y-1.5">
          {["Hey, is this secure?", "AES-256 🔐", "100%"].map((msg, i) => (
            <div key={i} className={`text-[8px] px-2 py-1 rounded-xl max-w-[80%] ${i % 2 === 0 ? "bg-purple-900/60 text-purple-200 mr-auto" : "bg-purple-500 text-white ml-auto"}`}>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TerminalMock({ project }) {
  return (
    <div className="w-full min-h-[320px] rounded-2xl relative overflow-hidden"
         style={{ background: "radial-gradient(ellipse at 60% 40%, #0a1f0a 0%, #050d05 50%, #020802 100%)" }}>
      <div className="absolute inset-4 rounded-xl overflow-hidden"
           style={{ background: "#0d1117", border: "1px solid rgba(34,197,94,0.2)" }}>
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-green-900/30">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-[10px] font-mono text-green-400/50">{project.title.toLowerCase()}</span>
        </div>
        <div className="p-4 font-mono text-[10px] leading-6 text-green-400">
          <p>$ ./start-server --env prod</p>
          <p className="text-green-300/50">✓ Connected · 4 workers · :8080</p>
          <p className="mt-2">$ queue status</p>
          <p className="text-green-300/50">pending: 12 · active: 4 · done: 1,284</p>
          <p className="mt-1">▊</p>
        </div>
      </div>
    </div>
  );
}

function WaveformMock({ project }) {
  const bars = Array.from({ length: 40 }, (_, i) =>
    Math.min(90, Math.max(12, 20 + Math.abs(Math.sin(i * 0.7) * 55)))
  );

  return (
    <div className="w-full min-h-[320px] rounded-2xl relative overflow-hidden"
         style={{ background: "radial-gradient(ellipse at 50% 60%, #051520 0%, #010810 100%)" }}>
      <div className="absolute inset-4 rounded-xl overflow-hidden"
           style={{ background: "#080f1a", border: "1px solid rgba(6,182,212,0.15)" }}>
        <div className="px-5 py-3 border-b border-cyan-900/30 text-[11px] font-mono text-cyan-400">{project.title}</div>
        <div className="px-5 pt-4 flex items-end gap-[2px] h-20">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "rgba(6,182,212,0.25)" }} />
          ))}
        </div>
        <div className="flex gap-6 px-5 py-4 border-t border-cyan-900/20 text-sm text-cyan-400">
          <span>99.9% uptime</span>
          <span>&lt; 80ms</span>
        </div>
      </div>
    </div>
  );
}
