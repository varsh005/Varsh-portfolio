import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <Navbar />

      <main className="space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;