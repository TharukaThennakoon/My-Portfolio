// Commit 4 - Add animated education timeline
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
          <p className="text-xs text-gray-400 tracking-widest">
            2023 — PRESENT
          </p>

          <h2 className="text-3xl font-serif mt-4">
            Sabaragamuwa University
          </h2>

          <p className="text-gray-400 mt-2">
            BSc (Hons) in Software Engineering
          </p>
        </motion.div>

        <div></div>

      </div>
    </section>
  );
}