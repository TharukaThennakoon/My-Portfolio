// Skills.jsx — fixed: headline on ONE line, proper column spacing, no progress bars
import { motion } from "framer-motion";

const skillColumns = [
  {
    title: "LANGUAGES",
    items: [
      { name: "Java",       detail: "Spring / Maven" },
      { name: "Python",     detail: "FastAPI / NumPy" },
      { name: "TypeScript", detail: "React / Next.js"  },
      { name: "C / C++",   detail: "Systems / DSA"    },
      { name: "Go",         detail: "CLI / Services"   },
      { name: "SQL",        detail: "Postgres / MySQL" },
    ],
  },
  {
    title: "FRAMEWORKS",
    items: [
      { name: "Spring Boot", detail: "REST · JPA"       },
      { name: "React",       detail: "Hooks · Router"   },
      { name: "Next.js",     detail: "SSR · Edge"       },
      { name: "FastAPI",     detail: "Async · Pydantic" },
      { name: "Node.js",     detail: "Express · WS"     },
      { name: "Tailwind",    detail: "CSS · Animate"    },
    ],
  },
  {
    title: "TOOLS & INFRA",
    items: [
      { name: "Git & GitHub Actions", detail: "CI / CD"        },
      { name: "Docker",               detail: "Compose · Hub"  },
      { name: "AWS",                  detail: "EC2 · S3 · λ"   },
      { name: "PostgreSQL",           detail: "Indexes · RLS"  },
      { name: "Redis",                detail: "Cache · Pub/Sub" },
      { name: "Jira & Linear",        detail: "Agile · Sprints" },
    ],
  },
];

const stats = [
  { label: "REPOS",        value: "47"    },
  { label: "COMMITS / YR", value: "1,284" },
  { label: "PRS MERGED",   value: "112"   },
  { label: "CUPS OF ☕",    value: "∞"     },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f5f5f7] text-black px-20 py-32">

      {/* ── Header ── */}
      <div className="mb-16">
        <p className="text-[11px] tracking-[0.2em] text-gray-400 mb-5 font-mono">
          S02 — THE TOOLBOX
        </p>
        {/* Single-line headline — reference keeps it on 2 lines max */}
        <h2 className="text-5xl xl:text-6xl font-serif leading-[1.1] max-w-3xl">
          I'm{" "}
          <span className="text-purple-500 italic">fluent</span>{" "}
          in the boring parts —
          <br />
          the parts that ship.
        </h2>
      </div>

      {/* ── Three columns ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
        {skillColumns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            viewport={{ once: true }}
            className={[
              "pt-10 pb-4",
              ci > 0 ? "md:pl-10" : "",
              ci < 2 ? "md:pr-10 md:border-r border-gray-300" : "",
            ].join(" ")}
          >
            <h3 className="text-[10px] tracking-[0.2em] text-gray-400 mb-6 font-mono">
              {col.title}
            </h3>

            {col.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-baseline py-[14px] border-b border-gray-200 group"
              >
                <span className="text-[17px] font-serif group-hover:text-purple-600 transition-colors duration-150">
                  {item.name}
                </span>
                <span className="text-[11px] text-gray-400 font-mono ml-4 flex-shrink-0">
                  {item.detail}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* ── Stats strip ── */}
      <div className="mt-0 border-t border-gray-300 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className={[
              "py-10 text-center",
              i < 3 ? "border-r border-gray-300" : "",
            ].join(" ")}
          >
            <p className="text-[10px] tracking-[0.2em] text-gray-400 mb-3 font-mono">
              {stat.label}
            </p>
            <p className="text-5xl font-serif">{stat.value}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}