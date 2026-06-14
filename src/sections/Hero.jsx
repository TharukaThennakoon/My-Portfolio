// Hero.jsx — photo with dark vignette blending into bg, larger headline
import profile from "../assets/me.png";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-36 px-20 min-h-screen flex flex-col justify-between bg-[#0b0b0f] text-white">

      {/* ── Main row ── */}
      <div className="flex items-start justify-between gap-16 mt-6">

        {/* Left: copy */}
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.25em] text-gray-500 mb-8 font-mono uppercase">
            Software Engineer · Undergraduate
          </p>

          <h1 className="text-[68px] xl:text-[80px] font-serif leading-[1.0] tracking-tight">
            I build{" "}
            <span className="text-purple-400 italic">resilient</span>
            <br />
            software, then
            <br />
            <span className="italic text-gray-100">{`{learn loudly}`}</span>.
          </h1>

          <p className="mt-8 text-gray-400 max-w-sm text-[15px] leading-relaxed">
            Software Engineering undergraduate at Sabaragamuwa University.
            I write code that ships, document what I learn, and sweat the details.
          </p>

          <div className="mt-10 flex gap-6 items-center">
            <a
              href="#work"
              className="bg-white text-black px-7 py-2.5 text-[11px] tracking-[0.2em] font-medium hover:bg-purple-100 transition-colors duration-200"
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

        {/* Right: photo — dark vignette on bottom fades into bg */}
        <div className="relative flex-shrink-0 hidden md:block">
          <img
            src={profile}
            alt="Tharuka"
            className="w-64 xl:w-72 h-[400px] xl:h-[440px] object-cover object-top grayscale rounded-xl"
            style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9)" }}
          />
          {/* Bottom fade — bleeds photo into dark background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 rounded-b-xl bg-gradient-to-t from-[#0b0b0f] to-transparent pointer-events-none" />
          {/* Subtle border */}
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
        </div>

      </div>

      {/* ── Marquee ── */}
      <div className="relative mt-16 overflow-hidden border-t border-b border-gray-800/70 py-5">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0b0b0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0b0b0f] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((di) => (
            <div key={di} className="flex items-center gap-10 whitespace-nowrap text-[26px] font-serif pr-10">
              {["Java", "Python", "C++", "React", "TypeScript", "Docker", "Spring Boot", "Go"].map((tech, i) => (
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