// Education.jsx — polished, matches reference card layout
import { motion } from "framer-motion";

const certs = [
  { title: "AWS Certified Cloud Practitioner",  org: "Amazon Web Services", year: "2024" },
  { title: "Google Cybersecurity Professional",  org: "Coursera",            year: "2024" },
  { title: "Meta Front-End Developer",           org: "Coursera",            year: "2023" },
  { title: "Oracle Certified Java Associate",    org: "Oracle",              year: "2023" },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#0b0b0f] text-white px-20 py-32">

      {/* Header */}
      <div className="mb-20">
        <p className="text-[11px] tracking-[0.2em] text-gray-600 mb-6 font-mono">
          S03 — EDUCATION & GROWTH
        </p>
        <h2 className="text-6xl xl:text-7xl font-serif leading-[1.05]">
          Still in school.
          <br />
          <span className="italic text-gray-500">Always in school.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* ── Degree card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-xl p-10 bg-[#0f0a1a] hover:border-purple-900/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.07)] transition-all duration-500"
        >
          <div className="relative pl-8">
            {/* Timeline spine */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-800" />

            {/* Degree 1 */}
            <div className="relative mb-12">
              <div className="absolute -left-[22px] top-[6px] w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
              <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] tracking-widest text-gray-600 font-mono">2023 — PRESENT</p>
                <span className="text-lg text-purple-400 font-serif">
                  3.8<span className="text-gray-600 text-xs">/4.0</span>
                </span>
              </div>
              <h3 className="text-2xl font-serif">Sabaragamuwa University</h3>
              <p className="text-gray-400 mt-1 text-sm">BSc (Hons) in Software Engineering</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Software engineering principles, data structures,
                distributed systems, and real-world application development.
              </p>
            </div>

            {/* Degree 2 */}
            <div className="relative">
              <div className="absolute -left-[22px] top-[6px] w-2.5 h-2.5 rounded-full bg-gray-700 ring-4 ring-gray-700/20" />
              <p className="text-[10px] tracking-widest text-gray-600 font-mono mb-3">2019 — 2022</p>
              <h3 className="text-2xl font-serif">Advanced Level (A/L)</h3>
              <p className="text-gray-400 mt-1 text-sm">Physical Science Stream</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Mathematics, Physics, Chemistry — the analytical
                foundation everything else runs on.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.2em] text-gray-600 mb-5 font-mono">
            CONTINUOUS LEARNING
          </p>
          <h3 className="text-4xl font-serif mb-10 leading-snug">
            Certifications
            <br />
            <span className="text-gray-500 italic">& deep-dives</span>
          </h3>

          {certs.map((cert, i) => (
            <div
              key={i}
              className="border-b border-gray-800 py-5 flex justify-between items-start group hover:border-purple-900/60 transition-colors duration-200"
            >
              <div>
                <p className="text-[15px] group-hover:text-purple-400 transition-colors duration-200">
                  {cert.title}
                </p>
                <p className="text-[11px] text-gray-600 mt-1 tracking-widest font-mono uppercase">
                  {cert.org}
                </p>
              </div>
              <span className="text-xs text-gray-600 font-mono flex-shrink-0 ml-6 mt-0.5">
                {cert.year}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}