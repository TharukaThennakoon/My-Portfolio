import { motion } from "framer-motion";


export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f5f5f7] text-black px-20 py-32"
    >
      {/* ================= HEADER ================= */}
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
        <p className="text-xs tracking-widest text-gray-500 mb-6">
          S05 — CONTACT
        </p>

        <h1 className="text-[80px] leading-[1.05] font-serif tracking-tight">
          Let’s{" "}
          <span className="italic bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            build
          </span>
          <br />
          something good
         <span className="cursor inline-block w-4 h-20 ml-3 bg-linear-to-b from-purple-400 to-purple-600"></span>
        </h1>
      </motion.div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-gray-300 mb-16"></div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>
          <p className="text-lg leading-relaxed max-w-xl">
            I'm currently looking for{" "}
            <span className="text-purple-500 font-medium">
              SWE internships
            </span>{" "}
            for Summer 2025 and full-time roles starting July 2026.
            Backend, infrastructure, or anything that lets me work close
            to the metal.
          </p>

          <p className="text-xs tracking-widest text-gray-500 mt-10">
            RESPONSE TIME: USUALLY WITHIN 24H ⏱
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-10">

          <ContactItem
            index="01"
            label="EMAIL"
            value="youremail@gmail.com"
            link="mailto:youremail@gmail.com"
          />

          <ContactItem
            index="02"
            label="GITHUB"
            value="github.com/yourusername"
            link="https://github.com/yourusername"
          />

          <ContactItem
            index="03"
            label="LINKEDIN"
            value="linkedin.com/in/yourprofile"
            link="https://linkedin.com/in/yourprofile"
          />

          <ContactItem
            index="04"
            label="READ.CV"
            value="read.cv/yourprofile"
            link="#"
          />

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-gray-300 mt-20 pt-6 flex justify-between text-xs text-gray-500 tracking-widest">
        <p>© 2025 YOUR NAME — HAND-CODED, NO TEMPLATES.</p>
        <p>V1.0.0 · LAST DEPLOY: JUST NOW</p>
      </div>
    </section>
  );
}

