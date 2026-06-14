import profile from "../assets/me.png";

function ThenUnderline() {
  return (
    <svg
      className="absolute left-0 w-full h-[6px] -bottom-1 pointer-events-none"
      viewBox="0 0 80 6"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M1 4.5 C18 1.5, 28 5.5, 42 3 C56 1, 68 5, 79 2.5"
        stroke="#a855f7"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0c] text-white hero-grid overflow-hidden">

      {/* Spacer for fixed navbar (main + sub bar) */}
      <div className="h-[108px] md:h-[132px] flex-shrink-0" />

      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full pb-8">

        <div className="flex items-start justify-between gap-10 xl:gap-16">

          {/* ── Left: copy ── */}
          <div className="max-w-2xl pt-2">

            {/* Degree metadata — top left, 3 lines */}
            <p className="text-[10px] leading-[1.9] tracking-[0.22em] text-gray-500 font-mono uppercase mb-10">
              BSc (Hons)
              <br />
              Software Engineering
              <br />
              Class of 2026
            </p>

            {/* Headline */}
            <h1
              className="font-serif leading-[0.98] tracking-tight text-white"
              style={{ fontSize: "clamp(52px, 6.2vw, 92px)" }}
            >
              I build{" "}
              <span className="text-purple-400">resilient</span>
              <br />
              software,{" "}
              <span className="relative inline-block">
                then
                <ThenUnderline />
              </span>
              <br />
              <span className="text-gray-100">{"{learn loudly}."}</span>
            </h1>

            {/* Intro */}
            <p className="mt-8 text-gray-400 max-w-md text-[15px] leading-relaxed">
              Software Engineering undergraduate at{" "}
              <strong className="font-medium text-gray-200">Sabaragamuwa University</strong>.
              I write code that ships, document what I learn, and sweat the details
              from O(n) to UX.
            </p>

            {/* CTAs */}
            <div className="flex items-center mt-10 gap-7">
              <a
                href="#work"
                className="bg-white text-black px-7 py-2.5 text-[11px] tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                SEE MY WORK →
              </a>
              <button
                onClick={scrollToContact}
                className="text-[11px] tracking-[0.2em] text-gray-500 hover:text-white transition-colors duration-200"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* ── Right: portrait ── */}
          <div className="relative flex-shrink-0 hidden md:block">
            <img
              src={profile}
              alt="Tharuka Thennakoon"
              className="w-56 lg:w-64 xl:w-[280px] h-[380px] lg:h-[420px] xl:h-[460px] object-cover object-top"
              // style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9)" }}
            />
            {/* Bottom fade into bg */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
              style={{ background: "linear-gradient(to top, #0a0a0c 0%, transparent 100%)" }}
            />
            {/* FIG / EST labels */}
            <div className="flex justify-between mt-3 text-[10px] tracking-[0.2em] text-gray-600 font-mono">
              <span>FIG. 01</span>
              <span>EST. 2003</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative py-5 mt-auto overflow-hidden border-t border-b border-gray-800/70">
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((di) => (
            <div key={di} className="flex items-center gap-10 whitespace-nowrap text-[22px] md:text-[26px] font-serif pr-10">
              {["React", "Next.js", "TypeScript", "Java", "Python", "Docker", "Spring Boot", "Go", "Tailwind"].map((tech, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="text-gray-200">{tech}</span>
                  <span className="text-purple-500">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
