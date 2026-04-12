// Commit 5 - Add scrolling tech stack marquee
import profile from "../assets/me.png";

export default function Hero() {
  return (
    <section className="pt-40 px-20 min-h-screen flex flex-col justify-between">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl font-serif leading-tight">
            I build resilient software.
          </h1>
        </div>

        <div>
          <img
            src={profile}
            alt="profile"
            className="w-80 h-105 object-cover grayscale rounded-xl"
          />
        </div>
      </div>

      <div className="mt-20 border-t border-b border-gray-800 py-6">
        <div className="flex gap-12 whitespace-nowrap text-3xl font-serif">
          <span>Java</span>
          <span>Python</span>
          <span>C++</span>
          <span>React</span>
          <span>TypeScript</span>
        </div>
      </div>

    </section>
  );
}