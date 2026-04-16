// Commit 5 - Add certification list component
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="px-20 py-32 bg-[#0b0613] text-white">

      <div className="mb-20">
        <p className="text-xs tracking-widest text-gray-500 mb-6">
          S03 — EDUCATION & GROWTH
        </p>

        <h2 className="text-6xl md:text-7xl font-serif leading-tight">
          Still in school.
          <br />
          <span className="italic text-gray-300">Always in school.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-gray-700 rounded-xl p-10 bg-[#120a1c]"
        >
          <h2 className="text-3xl font-serif">
            Sabaragamuwa University
          </h2>
        </motion.div>

        <div className="space-y-8">
          <CertItem
            title="AWS Certified Cloud Practitioner"
            org="Amazon Web Services"
            year="2024"
          />

          <CertItem
            title="Meta Front-End Developer"
            org="Coursera"
            year="2023"
          />
        </div>

      </div>
    </section>
  );
}

function CertItem({ title, org, year }) {
  return (
    <div className="border-b border-gray-800 pb-6 flex justify-between">
      <div>
        <p>{title}</p>
        <p className="text-xs text-gray-500">{org}</p>
      </div>

      <span className="text-sm text-gray-500">{year}</span>
    </div>
  );
}