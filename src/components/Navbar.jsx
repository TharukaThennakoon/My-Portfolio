export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-[#0b0b0f] border-b border-gray-800">
      <div className="flex items-center justify-between px-10 py-4">

        <div className="text-sm tracking-widest">
          <span className="text-purple-500 mr-2">●</span>
          tharuka.me<span className="text-gray-500">/portfolio</span>
        </div>

        <div className="hidden md:flex gap-10 text-xs tracking-widest text-gray-400">
          <a href="#work" className="hover:text-white">01 WORK</a>
          <a href="#skills" className="hover:text-white">02 SKILLS</a>
          <a href="#education" className="hover:text-white">03 EDUCATION</a>
          <a href="#writing" className="hover:text-white">04 WRITING</a>
          <a href="#contact" className="hover:text-white">05 CONTACT</a>
        </div>

      </div>
    </div>
  );
}