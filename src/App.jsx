import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#ededed] scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
