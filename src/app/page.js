import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}
