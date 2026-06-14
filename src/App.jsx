import { useState } from "react";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import GithubActivity from "./components/sections/GithubActivity";

// UI Components
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-light scroll-smooth">
        <Navbar />
        <Hero isLoaded={!isLoading} />
        <About />
        <TechStack />
        <Projects />
        <GithubActivity />
        <Footer />
      </div>
    </>
  );
}

export default App;
