// Commit 5 - Add Framer Motion animations
import { motion } from "framer-motion";

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

        <SkillColumn
          title="LANGUAGES"
          items={["Java", "Python", "TypeScript"]}
        />

        <SkillColumn
          title="FRAMEWORKS"
          items={["React", "Next.js", "Node.js"]}
        />

        <SkillColumn
          title="TOOLS"
          items={["Git", "Docker", "AWS"]}
        />

      </div>

    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xs tracking-widest text-gray-500 mb-6">
        {title}
      </h3>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <span className="text-xl font-serif">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}