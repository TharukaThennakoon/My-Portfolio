import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import cv from "../assets/Tharuka_Thennakoon_SE.pdf";

const links = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tharuka-thennakoon-199969302",
    handle: "linkedin.com/in/tharuka-thennakoon",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/TharukaThennakoon",
    handle: "github.com/TharukaThennakoon",
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    href: "mailto:thennakoontharuka214@gmail.com",
    handle: "thennakoontharuka214@gmail.com",
  },
];

export default function Contact() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 footer-gradient pointer-events-none" />
      <div className="absolute inset-0 mesh-footer pointer-events-none" />

      <div className="section-container relative z-10 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-16 mb-20"
        >
          <div>
            <p className="text-[11px] tracking-[0.2em] text-purple-300/60 mb-8 font-mono">S05 — CONTACT</p>
            <h2 className="font-serif leading-[1.0] tracking-tight text-white"
                style={{ fontSize: "clamp(52px, 7vw, 96px)" }}>
              Let&apos;s{" "}
              <span className="italic text-purple-400">build</span>
              <br />
              something good
              <span
                className="inline-block w-[4px] ml-3 bg-purple-400 align-middle rounded-sm"
                style={{
                  height: "clamp(52px, 7vw, 90px)",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </h2>
            <p className="mt-8 text-gray-400 max-w-md text-[15px] leading-relaxed">
              Open to <span className="text-purple-300">SWE internships</span> and full-time roles from 2026.
              Grab my CV or reach out directly.
            </p>
          </div>

          <div className="flex flex-col gap-3 xl:min-w-[380px] w-full xl:w-auto">
            {links.map(({ icon: Icon, label, href, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex items-center gap-4 p-5 rounded-xl hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                  <Icon className="text-lg" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] tracking-widest text-gray-500 font-mono">{label}</p>
                  <p className="text-sm text-gray-200 truncate group-hover:text-purple-300 transition-colors">{handle}</p>
                </div>
                <span className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all flex-shrink-0">↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-12 border-purple-500/15"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-widest text-purple-400 font-mono mb-2">RESUME / CV</p>
              <h3 className="font-serif text-2xl text-white">Tharuka Thennakoon — Software Engineer</h3>
              <p className="text-sm text-gray-500 mt-2">Full academic background, projects, skills, and experience.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-widest border border-gray-600 text-gray-300 px-6 py-3 rounded-full hover:border-purple-500/50 hover:text-purple-300 transition-colors font-mono"
              >
                VIEW CV
              </a>
              <a
                href={cv}
                download="Tharuka_Thennakoon_CV.pdf"
                className="text-[11px] tracking-widest bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-400 transition-colors font-mono"
              >
                DOWNLOAD ↓
              </a>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 tracking-widest font-mono">
          <p>© 2026 THARUKA THENNAKOON — COLOMBO, SRI LANKA</p>
          <p className="text-gray-600">HAND-CODED · REACT + VITE + TAILWIND</p>
          <button onClick={scrollTop} className="hover:text-purple-400 transition-colors">
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
