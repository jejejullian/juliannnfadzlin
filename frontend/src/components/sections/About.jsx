import { useState } from "react";
import ResumeModal from "../ui/ResumeModal";
import ScrollReveal from "../ui/ScrollReveal";
import AboutGallery from "./AboutGallery";
import { resumeData } from "../../data";

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="relative flex flex-col items-center justify-center pt-20 md:pt-32 lg:pt-64 text-neutral-950 overflow-hidden scroll-mt-24">
      <div className="w-full px-5 md:px-[60px] max-w-[1440px] mx-auto">
        <div className="mb-6 md:mb-16">
          {/* Section label */}
          <ScrollReveal>
            <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[6px] text-center mb-3 md:mb-4">
              About Me
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm md:text-xl text-center">Hi, I'm</p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-center text-4xl md:text-6xl font-bold mb-3 md:mb-8">{resumeData.header.name}</h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-center text-sm md:text-xl font-normal mb-3 md:mb-8">{resumeData.header.intro}</p>
          </ScrollReveal>

          {/* Styled quote */}
          <ScrollReveal delay={250}>
            <div className="relative max-w-[500px] mx-auto mb-3 md:mb-8">
              <span className="absolute -top-4 -left-2 md:-top-6 md:-left-4 text-4xl md:text-6xl text-neutral-200 font-serif leading-none select-none">"</span>
              <p className="text-center text-sm md:text-xl font-bold italic px-4">
                {resumeData.header.subIntro}
              </p>
              <span className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-4 text-4xl md:text-6xl text-neutral-200 font-serif leading-none select-none">"</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-center text-sm md:text-lg lg:text-xl">
              Want to know more?{" "}
              <button
                onClick={() => setShowResumeModal(true)}
                className="relative font-semibold after:bg-neutral-950 after:absolute after:h-0.5 after:w-0 after:top-7 after:left-1/2 after:transform after:translate-x-[-50%] hover:after:w-full after:transition-all after:duration-300 active:text-[#545454] cursor-pointer"
              >
                Read My Resume
              </button>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={100}>
          <AboutGallery />
        </ScrollReveal>
      </div>

      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </section>
  );
}