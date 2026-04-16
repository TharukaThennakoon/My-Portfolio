// Commit 6 - Final Education section with animations and certifications
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
          viewport={{ once: true }}
          className="
            border border-gray-700 rounded-xl p-10 
            bg-[#120a1c]
            hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]
            transition
          "
        >

          <div className="relative pl-8">

            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-800"></div>

            <div className="relative mb-12">

              <div className="flex justify-between items-start mb-2">
                <p className="text-xs text-gray-400 tracking-widest">
                  2023 — PRESENT
                </p>

                <p className="text-2xl text-purple-400 font-serif">
                  3.8<span className="text-gray-400 text-sm">/4.0</span>
                </p>
              </div>

              <h2 className="text-3xl font-serif">
                Sabaragamuwa University
              </h2>

              <p className="text-gray-400 mt-2">
                BSc (Hons) in Software Engineering
              </p>

              <p className="text-gray-500 mt-3 text-sm max-w-xl">
                Focused on software engineering principles, data structures,
                distributed systems, and real-world application development.
              </p>

            </div>

            <div className="relative">

              <p className="text-xs text-gray-400 tracking-widest mb-2">
                2019 — 2022
              </p>

              <h3 className="text-2xl font-serif">
                Advanced Level (A/L)
              </h3>

              <p className="text-gray-400 mt-2">
                Physical Science Stream
              </p>

              <p className="text-gray-500 mt-3 text-sm max-w-xl">
                Studied Mathematics, Physics, and Chemistry with strong analytical
                and problem-solving foundation.
              </p>

            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >

          <p className="text-xs text-gray-500 tracking-widest mb-4">
            CONTINUOUS LEARNING
          </p>

          <h2 className="text-4xl font-serif mb-10">
            Certifications <br /> & deep-dives
          </h2>

          <div className="space-y-8">

            <CertItem
              title="AWS Certified Cloud Practitioner"
              org="Amazon Web Services"
              year="2024"
            />

            <CertItem
              title="Google Cybersecurity Professional"
              org="Coursera"
              year="2024"
            />

            <CertItem
              title="Meta Front-End Developer"
              org="Coursera"
              year="2023"
            />

            <CertItem
              title="Oracle Certified Java Associate"
              org="Oracle"
              year="2023"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function CertItem({ title, org, year }) {
  return (
    <div className="border-b border-gray-800 pb-6 flex justify-between items-start group">

      <div>
        <p className="text-lg group-hover:text-purple-400 transition">
          {title}
        </p>

        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
          {org}
        </p>
      </div>

      <span className="text-sm text-gray-500">{year}</span>

    </div>
  );
}