// App.jsx — updated to include Writing section
// Place Writing between Education and Contact
import Navbar    from "./components/Navbar";
import Hero      from "./sections/Hero";
import Work      from "./sections/Work";
import Skills    from "./sections/Skills";
import Education from "./sections/Education";
import Writing   from "./sections/Writing";   // ← ADD THIS
import Contact   from "./sections/Contact";

export default function App() {
  return (
    <main className="bg-[#0b0b0f]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Education />
      <Writing />   {/* ← ADD THIS */}
      <Contact />
    </main>
  );
}