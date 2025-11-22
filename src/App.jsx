import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";

function App() {
  return (
    <div className="min-h-screen bg-[#ededed] overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
