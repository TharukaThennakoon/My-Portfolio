export default function Navbar() {
  const links = [
    { href: "#work",      num: "01", label: "WORK" },
    { href: "#skills",    num: "02", label: "SKILLS" },
    { href: "#education", num: "03", label: "EDUCATION" },
    { href: "#writing",   num: "04", label: "WRITING" },
    { href: "#contact",   num: "05", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0c] border-b border-gray-800/80">
      {/* Main nav row */}
      <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 py-4 max-w-[1600px] mx-auto">

        {/* Logo */}
        <a href="#" className="text-sm tracking-widest flex-shrink-0">
          <span className="text-purple-500 mr-2">●</span>
          tharuka.me<span className="text-gray-500">/portfolio</span>
        </a>

        {/* Center nav — desktop */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map(({ href, num, label }) => (
            <a
              key={href}
              href={href}
              className="text-[11px] tracking-[0.18em] text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="text-purple-500 mr-1.5">{num}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Status badge */}
        <div className="flex-shrink-0 border border-gray-700 px-4 py-1.5 rounded-full text-[10px] tracking-[0.15em] text-purple-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
          <span className="hidden sm:inline text-gray-300">AVAILABLE FOR INTERNSHIPS</span>
          <span className="sm:hidden text-gray-300">OPEN</span>
        </div>
      </div>

      {/* Sub bar */}
      <div className="hidden md:flex items-center justify-between px-8 md:px-12 lg:px-16 py-2.5 text-[10px] tracking-[0.2em] text-gray-600 border-t border-gray-800/60 max-w-[1600px] mx-auto font-mono">
        <span>PORTFOLIO / 2026 — EDITION 01</span>
        <span>N 6°42′ E 80°23′ — Sabaragamuwa</span>
      </div>
    </header>
  );
}
