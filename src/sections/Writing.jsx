// Writing.jsx — "Essays from a curious engineer" section
// Matches the reference: dark bg, glowing orb illustration, blog post cards
import { motion } from "framer-motion";

const essays = [
  {
    id: 1,
    slug: "digital-twin",
    tag: "SYSTEMS THINKING",
    title: "The Digital Twin — Your World, Mirrored in Real Time",
    excerpt:
      "A deep dive into how digital twin technology works — how a real-world object or system gets mapped into the virtual world, updated in real time, and used to simulate, predict, and optimise.",
    date: "MAY 2025",
    readTime: "8 MIN READ",
  },
  {
    id: 2,
    slug: "zero-to-prod",
    tag: "ENGINEERING",
    title: "Zero to Production: Shipping a Side Project Without Losing Your Mind",
    excerpt:
      "The unglamorous truth about deploying a solo project — from local dev to a live URL, including all the infra decisions I got wrong first.",
    date: "MAR 2025",
    readTime: "6 MIN READ",
  },
  {
    id: 3,
    slug: "concurrency-models",
    tag: "DEEP DIVE",
    title: "Threads, Goroutines, and Why Concurrency Is Still Hard",
    excerpt:
      "Comparing Java threads, Python asyncio, and Go goroutines through one real problem: a high-throughput message queue.",
    date: "JAN 2025",
    readTime: "10 MIN READ",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="bg-[#0b0b0f] text-white px-20 py-32 relative overflow-hidden">

      {/* ── Atmospheric glow orb (the brain/globe visual from reference) ── */}
      <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[500px] h-[500px] pointer-events-none select-none">
        {/* Outer diffuse glow */}
        <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-3xl" />
        {/* Mid ring */}
        <div className="absolute inset-8 rounded-full border border-purple-500/10 bg-purple-800/5 blur-xl" />
        {/* Core orb */}
        <div
          className="absolute inset-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #a855f7 0%, #7c3aed 40%, #3b0764 70%, transparent 100%)",
            opacity: 0.25,
            filter: "blur(8px)",
          }}
        />
        {/* Cyan accent (matches reference's teal/cyan split on the orb) */}
        <div
          className="absolute inset-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 65% 60%, #22d3ee 0%, transparent 60%)",
            opacity: 0.15,
            filter: "blur(12px)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 text-center mb-24">
        <span className="text-[11px] border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 rounded-full text-purple-400 tracking-widest">
          S04 — WRITING
        </span>

        <h2 className="text-6xl xl:text-7xl font-serif mt-10 leading-[1.05]">
          Essays from a
          <br />
          <span className="italic text-purple-300">curious engineer.</span>
        </h2>
      </div>

      {/* ── Essay list ── */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-0">
        {essays.map((essay, i) => (
          <motion.article
            key={essay.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 py-10 group cursor-pointer hover:border-purple-900/60 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-8">

              <div className="flex-1">
                {/* Tag + date */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] tracking-widest text-purple-400 font-mono border border-purple-500/40 px-2 py-0.5 rounded">
                    {essay.tag}
                  </span>
                  <span className="text-[10px] tracking-widest text-gray-600 font-mono">
                    {essay.date} · {essay.readTime}
                  </span>
                </div>

                <h3 className="text-xl xl:text-2xl font-serif leading-snug group-hover:text-purple-300 transition-colors duration-200">
                  {essay.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xl">
                  {essay.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-gray-700 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200 text-xl mt-1 flex-shrink-0">
                ↗
              </span>

            </div>
          </motion.article>
        ))}

        {/* Last border */}
        <div className="border-t border-gray-800" />
      </div>

      {/* ── "All essays" link ── */}
      <div className="relative z-10 text-center mt-14">
        <a
          href="/writing"
          className="text-[11px] tracking-widest text-gray-500 hover:text-purple-400 transition-colors duration-200 font-mono"
        >
          ALL ESSAYS →
        </a>
      </div>

    </section>
  );
}