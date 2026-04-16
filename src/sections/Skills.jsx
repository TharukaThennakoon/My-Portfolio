// Commit 6 - Final Skills section with Stats and animated progress bars
import { motion } from "framer-motion";
import Stats from "../components/Stats";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f5f5f7] text-black px-20 py-32">

      <div className="mb-20">
        <span className="text-xs tracking-widest text-gray-500">
          S02 — THE TOOLBOX
        </span>

        <h2 className="text-6xl font-serif mt-6 leading-tight">
          I'm <span className="text-purple-500 italic">fluent</span> in the boring parts —
          <br />
          the parts that ship.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-300 pt-10">

        <SkillColumn
          title="LANGUAGES"
          items={["Java", "Python", "TypeScript", "C / C++", "Go", "SQL"]}
        />

        <SkillColumn
          title="FRAMEWORKS"
          items={["Spring Boot", "React / Next.js", "FastAPI", "Node.js"]}
        />

        <SkillColumn
          title="TOOLS & INFRA"
          items={[
            "Git & GitHub Actions",
            "Docker",
            "Kubernetes",
            "AWS (EC2, S3, Lambda)",
            "PostgreSQL / Redis",
            "Jira & Linear",
          ]}
        />

      </div>

      <Stats />
    </section>
  );
}

function SkillColumn({ title, items }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <h3 className="text-xs tracking-widest text-gray-500 mb-6">
        {title}
      </h3>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-xl font-serif">{item}</span>
              <span className="text-xs text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-2 h-[2px] bg-gray-300 relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                }}
                className="absolute left-0 top-0 h-full bg-purple-500 origin-left"
                style={{
                  width: `${70 + index * 5}%`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}