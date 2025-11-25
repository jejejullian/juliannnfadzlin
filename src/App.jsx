import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#ededed]">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
