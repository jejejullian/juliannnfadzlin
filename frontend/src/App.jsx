import { useState } from "react";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";

// UI Components
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-[#ededed] scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
