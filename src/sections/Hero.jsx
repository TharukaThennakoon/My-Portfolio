// Commit 3 - Add CTA buttons with smooth scroll
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
            software.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Software Engineering undergraduate.
          </p>

          <div className="mt-8 flex gap-6 items-center">

            <a
              href="#work"
              className="bg-white text-black px-6 py-2 text-sm tracking-widest"
            >
              SEE MY WORK →
            </a>

            <button
              onClick={scrollToContact}
              className="text-sm tracking-widest text-gray-400"
            >
              GET IN TOUCH
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}