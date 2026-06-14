import { motion } from "framer-motion";
import courses from "../data/courses";
import TechIcon from "../components/TechIcon";

const PROVIDER_ICONS = {
  aws:    "aws",
  google: "google",
  meta:   "meta",
  oracle: "oracle",
  udemy:  "udemy",
};

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden section-dark">
      <div className="absolute inset-0 pointer-events-none mesh-dark" />

      <div className="relative z-10 section-container">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.2em] text-gray-600 mb-6 font-mono">S03 — EDUCATION & GROWTH</p>
          <h2 className="section-title">
            Still in school.
            <br />
            <span className="italic text-gray-500">Always at school.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-10 mb-16 transition-all duration-500 glass-card rounded-2xl md:p-14 hover:border-purple-800/40"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-[10px] tracking-widest text-gray-600 font-mono mb-3">2023 — PRESENT</p>
              <h3 className="font-serif text-2xl">Sabaragamuwa University of Sri Lanka</h3>
              <p className="mt-1 text-sm text-purple-400">BSc (Hons) in Software Engineering</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Distributed systems, data structures, software architecture, OOP,
                and building software that survives real-world use.
              </p>
            </div>
            <div>
  <p className="text-[10px] tracking-widest text-gray-600 font-mono mb-3">
    A/L
  </p>

  <h3 className="font-serif text-2xl">
    G.C.E. Advanced Level – Physical Science Stream
  </h3>

  <p className="mt-1 text-sm text-purple-400">
    Pinnawala Central College, Rambukkana · 2021
  </p>

  <ul className="mt-4 space-y-2 text-sm text-gray-500">
    <li>• Studied in the Physical Science stream</li>
    <li>• Achieved B grades in Combined Mathematics, Physics, and Chemistry</li>
    <li>• Strengthened analytical and problem-solving skills through science education</li>
  </ul>
</div>
          </div>
        </motion.div>

        {/* Completed courses & certifications */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-gray-600 font-mono mb-2">CONTINUOUS LEARNING</p>
              <h3 className="font-serif text-3xl">
                Completed <span className="italic text-purple-400">courses</span>
              </h3>
            </div>
            <span className="text-[11px] font-mono text-gray-600 tracking-widest">
              {courses.length} CERTIFICATIONS & COURSES
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="p-5 transition-all duration-300 glass-card group rounded-xl hover:border-purple-500/30"
              >
                <div className="flex items-start gap-4">
                  <CourseIcon icon={course.icon} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[9px] tracking-widest font-mono text-purple-400/80 border border-purple-500/25 px-2 py-0.5 rounded">
                        {course.type.toUpperCase()}
                      </span>
                      <span className="text-[9px] font-mono text-gray-600">{course.year}</span>
                    </div>
                    <h4 className="text-[15px] font-serif text-gray-100 leading-snug group-hover:text-purple-200 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1.5 font-mono tracking-wide">{course.provider}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseIcon({ icon }) {
  const slug = PROVIDER_ICONS[icon];
  if (slug && slug !== "google" && slug !== "meta" && slug !== "oracle" && slug !== "udemy") {
    return <TechIcon icon={slug} size={20} />;
  }

  const custom = {
    google: { slug: "google", color: "4285F4" },
    meta:   { slug: "meta",   color: "0668E1" },
    oracle: { slug: "oracle", color: "F80000" },
    udemy:  { slug: "udemy",  color: "A435F0" },
  }[icon];

  if (!custom) return <TechIcon icon="git" size={20} />;

  return (
    <span className="inline-flex items-center justify-center flex-shrink-0 bg-white rounded-lg shadow-sm ring-1 ring-black/5"
          style={{ width: 32, height: 32 }}>
      <img
        src={`https://cdn.simpleicons.org/${custom.slug}/${custom.color}`}
        alt=""
        width={20}
        height={20}
        loading="lazy"
      />
    </span>
  );
}
