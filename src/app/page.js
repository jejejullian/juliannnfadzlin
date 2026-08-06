import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import GithubActivity from "@/components/sections/GithubActivity";
import { getGithubData } from "@/lib/github";

export default async function Page() {
  const githubData = await getGithubData();
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <TechStack />
      <Projects />
      <GithubActivity data={githubData} />
      <Footer />
    </div>
  );
}
