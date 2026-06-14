import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Writing from "./sections/Writing";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <main className="bg-[#0a0a0c]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Education />
      <Writing />
      <Contact />
    </main>
  );
}
