// Contact.jsx — dark bg, proper layout matching reference
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0b0f] text-white px-20 py-32">

      {/* ── Giant headline ── */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[11px] tracking-[0.2em] text-gray-600 mb-8 font-mono">
          S04 — CONTACT
        </p>

        <h2 className="text-[72px] xl:text-[96px] leading-[1.0] font-serif tracking-tight">
          Let's{" "}
          <span className="italic text-purple-400">build</span>
          <br />
          something good
          {/* Blinking cursor — styled as a tall rectangle */}
          <span
            className="inline-block w-[5px] h-[72px] xl:h-[90px] ml-3 bg-purple-400 align-middle"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </h2>
      </motion.div>

      <div className="border-t border-gray-800 mb-16" />

      {/* ── Two-column grid ── */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* Left: copy */}
        <div>
          <p className="text-[17px] leading-relaxed text-gray-400 max-w-md">
            Currently looking for{" "}
            <span className="text-purple-400 font-medium">SWE internships</span>{" "}
            and full-time roles starting 2026.
            Backend, infrastructure, or anything that lets me
            work close to the metal.
          </p>
          <p className="text-[11px] tracking-widest text-gray-600 mt-10 font-mono">
            RESPONSE TIME: USUALLY WITHIN 24H ⏱
          </p>
        </div>

        {/* Right: contact links */}
        <div className="space-y-0">
          <ContactRow index="01" label="EMAIL"    value="youremail@gmail.com"         href="mailto:youremail@gmail.com" />
          <ContactRow index="02" label="GITHUB"   value="github.com/yourusername"     href="https://github.com/yourusername" />
          <ContactRow index="03" label="LINKEDIN" value="linkedin.com/in/yourprofile" href="https://linkedin.com/in/yourprofile" />
          <ContactRow index="04" label="READ.CV"  value="read.cv/yourprofile"         href="#" />
        </div>

      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-gray-800 mt-24 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] text-gray-600 tracking-widest font-mono">
        <p>© 2026 THARUKA — HAND-CODED, NO TEMPLATES.</p>
        <p>V1.0.0 · LAST DEPLOY: JUST NOW</p>
      </div>

    </section>
  );
}

function ContactRow({ index, label, value, href }) {
  return (
    <div className="border-t border-gray-800 py-5 flex justify-between items-center group hover:border-purple-900/50 transition-colors duration-200">
      <div className="flex items-center gap-4 text-[11px] tracking-widest text-gray-600 font-mono">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-serif text-gray-300 flex items-center gap-2 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200"
      >
        {value}
        <span className="text-sm">↗</span>
      </a>
    </div>
  );
}