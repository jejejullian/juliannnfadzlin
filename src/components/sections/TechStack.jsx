import { techStackIcons } from "../../data";
import ScrollReveal from "../ui/ScrollReveal";

export default function TechStack() {
  // Destructure exact icons from the array
  const [
    JsIcon, ReactIcon,
    NodeIcon, ExpressIcon, PostgresIcon, PrismaIcon,
    GitIcon, PostmanIcon, ViteIcon,
    HtmlIcon, CssIcon, TailwindIcon, BootstrapIcon, SassIcon
  ] = techStackIcons;

  const frontendIcons = [HtmlIcon, CssIcon, JsIcon, ReactIcon, TailwindIcon, BootstrapIcon, SassIcon];
  const backendIcons = [NodeIcon, ExpressIcon, PostgresIcon, PrismaIcon];
  const toolIcons = [GitIcon, PostmanIcon, ViteIcon];

  return (
    <section id="techstack" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="w-full px-5 md:px-page">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Heading */}
          <div className="lg:w-5/12">
            <ScrollReveal>
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[6px] mb-3 md:mb-4">
                Tech Stack
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight text-neutral-900 leading-none mb-6">
                Tools &<br /> Tech.
              </h2>
              <p className="text-base md:text-lg text-neutral-500 max-w-md">
                A continuously evolving ecosystem of tools I use to build scalable, responsive, and dynamic user interfaces.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side: 3 Vertical Sliders */}
          <div className="lg:w-7/12 w-full h-[400px] md:h-[500px] relative flex gap-4 md:gap-6 justify-center rounded-[32px]  p-6 shadow-inner overflow-hidden">

            {/* Fading gradients at top and bottom for smooth disappearing effect */}
            <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-neutral-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-neutral-50 to-transparent z-10 pointer-events-none"></div>

            {/* Column 1: Frontend (Up) */}
            <div className="flex flex-col gap-4 w-20 md:w-24 mt-8">
              <div className="flex flex-col gap-4 animate-marquee-up">
                {[...frontendIcons].map((Icon, i) => (
                  <div key={`a1-${i}`} className="flex items-center justify-center bg-white p-5 md:p-6 rounded-2xl shadow-xs border border-neutral-100 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 animate-marquee-up" aria-hidden="true">
                {[...frontendIcons].map((Icon, i) => (
                  <div key={`b1-${i}`} className="flex items-center justify-center bg-white p-5 md:p-6 rounded-2xl shadow-xs border border-neutral-100 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Backend (Down) */}
            <div className="flex flex-col gap-4 w-20 md:w-24 -mt-32">
              <div className="flex flex-col gap-4 animate-marquee-down">
                {[...backendIcons, ...backendIcons].map((Icon, i) => (
                  <div key={`a2-${i}`} className="flex items-center justify-center bg-neutral-900 p-5 md:p-6 rounded-2xl shadow-md border border-neutral-800 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 animate-marquee-down" aria-hidden="true">
                {[...backendIcons, ...backendIcons].map((Icon, i) => (
                  <div key={`b2-${i}`} className="flex items-center justify-center bg-neutral-900 p-5 md:p-6 rounded-2xl shadow-md border border-neutral-800 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Workflow/Others (Up) */}
            <div className="flex flex-col gap-4 w-20 md:w-24 mt-16">
              <div className="flex flex-col gap-4 animate-marquee-up">
                {[...toolIcons, ...toolIcons].map((Icon, i) => (
                  <div key={`a3-${i}`} className="flex items-center justify-center bg-white p-5 md:p-6 rounded-2xl shadow-xs border border-neutral-100 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 animate-marquee-up" aria-hidden="true">
                {[...toolIcons, ...toolIcons].map((Icon, i) => (
                  <div key={`b3-${i}`} className="flex items-center justify-center bg-white p-5 md:p-6 rounded-2xl shadow-xs border border-neutral-100 aspect-square shrink-0">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}