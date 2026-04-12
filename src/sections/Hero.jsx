// Commit 6 - Final Hero section with animations and marquee fade
import profile from "../assets/me.png";

export default function Hero() {

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-40 px-20 min-h-screen flex flex-col justify-between">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-6xl font-serif leading-tight">
            I build <span className="text-purple-500">resilient</span><br />
            software, then<br />
            <span className="italic">{`{learn loudly}`}</span>.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Software Engineering undergraduate. I write code that ships,
            document what I learn, and sweat the details.
          </p>

          <div className="mt-8 flex gap-6 items-center">

            <a
              href="#work"
              className="bg-white text-black px-6 py-2 text-sm tracking-widest hover:bg-gray-200 transition"
            >
              SEE MY WORK →
            </a>

            <button
              onClick={scrollToContact}
              className="text-sm tracking-widest text-gray-400 hover:text-white transition"
            >
              GET IN TOUCH
            </button>

          </div>
        </div>

        <div className="relative">
          <img
            src={profile}
            alt="profile"
            className="w-80 h-105 object-cover grayscale rounded-xl border border-gray-800"
          />

          <div className="absolute inset-0 rounded-xl border border-purple-500 opacity-20"></div>
        </div>

      </div>

      <div className="relative mt-20 overflow-hidden border-t border-b border-gray-800 py-6">

        <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-[#0b0b0f] to-transparent z-10"></div>

        <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-[#0b0b0f] to-transparent z-10"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

          <div className="flex items-center gap-12 whitespace-nowrap text-3xl font-serif pr-12">
            <span>Java</span>
            <span className="text-purple-500">✦</span>
            <span>Python</span>
            <span className="text-purple-500">✦</span>
            <span>C++</span>
            <span className="text-purple-500">✦</span>
            <span>React</span>
            <span className="text-purple-500">✦</span>
            <span>TypeScript</span>
            <span className="text-purple-500">✦</span>
          </div>

          <div className="flex items-center gap-12 whitespace-nowrap text-3xl font-serif pr-12">
            <span>Java</span>
            <span className="text-purple-500">✦</span>
            <span>Python</span>
            <span className="text-purple-500">✦</span>
            <span>C++</span>
            <span className="text-purple-500">✦</span>
            <span>React</span>
            <span className="text-purple-500">✦</span>
            <span>TypeScript</span>
            <span className="text-purple-500">✦</span>
          </div>

        </div>
      </div>

    </section>
  );
}