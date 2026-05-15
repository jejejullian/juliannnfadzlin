import { techStackIcons } from "../../data";
import ScrollReveal from "../ui/ScrollReveal";

export default function TechStack() {
  // Destructure exact icons from the array
  const [
    HtmlIcon, CssIcon, TailwindIcon, BootstrapIcon, SassIcon,
    JsIcon, ReactIcon, PhpIcon, XamppIcon, MysqlIcon,
    GitIcon, PostmanIcon, SupabaseIcon
  ] = techStackIcons;

  return (
    <section id="techstack" className="py-20 md:py-28 bg-white">
      <div className="w-full px-5 md:px-page">
        
        {/* Section Heading */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[6px] mb-3 md:mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-neutral-900 leading-none">
            Tools &<br /> Technologies.
          </h2>
        </ScrollReveal>

        {/* Bento Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* ── BENTO 1: Core Ecosystem (Spans 2 cols on Desktop) ── */}
          <ScrollReveal delay={80} className="md:col-span-2 lg:col-span-2">
            <div className="group h-full bg-neutral-50 hover:bg-neutral-100 transition-colors duration-500 border border-neutral-200 rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 tracking-wide">Core Ecosystem</h3>
                <p className="text-sm text-neutral-500 max-w-sm">Building scalable, responsive, and dynamic user interfaces with modern tech.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500">
                  <ReactIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  <TailwindIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500 delay-150">
                  <JsIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── BENTO 2: Backend (Square) ── */}
          <ScrollReveal delay={120} className="md:col-span-1 lg:col-span-1">
            <div className="group h-full bg-neutral-50 hover:bg-neutral-100 transition-colors duration-500 border border-neutral-200 rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 tracking-wide">Backend</h3>
                <p className="text-sm text-neutral-500">Data & server-side.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8 w-max">
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-1.5 transition-transform duration-500">
                  <PhpIcon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-1.5 transition-transform duration-500 delay-75">
                  <MysqlIcon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-1.5 transition-transform duration-500 delay-150">
                  <SupabaseIcon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-1.5 transition-transform duration-500 delay-200">
                  <XamppIcon className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── BENTO 3: Tools (Square) ── */}
          <ScrollReveal delay={160} className="md:col-span-1 lg:col-span-1">
            <div className="group h-full bg-neutral-900 hover:bg-neutral-800 transition-colors duration-500 border border-neutral-800 rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">Workflow</h3>
                <p className="text-sm text-neutral-400">Version control & API testing.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <div className="bg-neutral-800 p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-700 group-hover:scale-105 transition-transform duration-500">
                  <GitIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="bg-neutral-800 p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-700 group-hover:scale-105 transition-transform duration-500 delay-75">
                  <PostmanIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── BENTO 4: Foundation (Spans 2 cols on Desktop) ── */}
          <ScrollReveal delay={200} className="md:col-span-1 lg:col-span-2">
            <div className="group h-full bg-neutral-50 hover:bg-neutral-100 transition-colors duration-500 border border-neutral-200 rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 tracking-wide">Web Foundation</h3>
                <p className="text-sm text-neutral-500 max-w-sm">The semantic structure and stylistic frameworks.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500">
                  <HtmlIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  <CssIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500 delay-150">
                  <SassIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
                <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xs border border-neutral-100 group-hover:-translate-y-2 transition-transform duration-500 delay-200">
                  <BootstrapIcon className="w-10 h-10 md:w-12 md:h-12 text-neutral-900" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}