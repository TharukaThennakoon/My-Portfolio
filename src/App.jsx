import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Education from "./sections/Education";

import Contact from "./sections/Contact";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Work/>
      <Skills />
      <Education />
      <Contact />

  
      
    </div>
  );
}