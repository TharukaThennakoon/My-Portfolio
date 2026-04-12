// Commit 4 - Add profile image section
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
            I build resilient software.
          </h1>
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

    </section>
  );
}