import { motion } from "framer-motion";
import skills, { stats } from "../data/skills";
import TechIcon from "../components/TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="section-light relative overflow-hidden">
      <div className="absolute inset-0 mesh-light pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.2em] text-gray-400 mb-5 font-mono">S02 — THE TOOLBOX</p>
          <h2 className="section-title text-black">
            I&apos;m <span className="italic text-purple-600">fluent</span> in the boring parts —
            <br />
            the parts that ship.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm shadow-sm">
          {skills.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              viewport={{ once: true }}
              className={[
                "p-8 md:p-10",
                ci < skills.length - 1 ? "lg:border-r border-gray-200" : "",
              ].join(" ")}
            >
              <h3 className="text-[10px] tracking-[0.2em] text-gray-400 mb-6 font-mono">{col.title}</h3>
              <div className="space-y-1">
                {col.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0 group hover:bg-purple-50/50 -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <TechIcon icon={item.icon} size={18} />
                    <div className="flex-1 min-w-0 flex justify-between items-baseline gap-3">
                      <span className="text-[16px] font-serif text-gray-900 group-hover:text-purple-700 transition-colors truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono flex-shrink-0 hidden sm:inline">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-12 bg-gray-200 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm py-10 px-6 text-center"
            >
              <p className="text-[10px] tracking-[0.2em] text-gray-400 mb-3 font-mono">{stat.label}</p>
              <p className="font-serif text-4xl md:text-5xl text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
