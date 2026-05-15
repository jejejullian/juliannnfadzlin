import { useState } from "react";
import ResumeModal from "../ui/ResumeModal";
import ScrollReveal from "../ui/ScrollReveal";
import { profileImages, resumeData } from "../../data";

export default function About() {
  const [hoveredImage, setHoveredImage] = useState(2);

  const [showResumeModal, setShowResumeModal] = useState(false);

  const [profile1, profile2, profile3] = profileImages;

  const getImageSize = (imageIndex) => {
    const isHovered = hoveredImage === imageIndex;

    // Mobile (< md): 1 image full size
    // Tablet (md - lg): 2 images side by side
    // Desktop (>= lg): 3 images with hover effect
    if (isHovered) {
      return "w-full md:w-[320px] lg:w-[550px] h-[240px] md:h-[260px] lg:h-[360px]";
    }
    return "w-full md:w-[320px] lg:w-[280px] h-[240px] md:h-[260px] lg:h-[180px]";
  };

  return (
    <section id="about" className="relative flex flex-col items-center justify-center pt-16 md:pt-24 lg:pt-28 text-neutral-950 overflow-hidden scroll-mt-24">
      <div className="w-full px-5 md:px-page max-w-[1440px] mx-auto">
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
          <div className="mb-6 md:mb-12">
            {/* Mobile view */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              <img src={profile1} alt="Julian's photo 2" className={`rounded-xl object-cover object-top transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
            </div>

            {/* Tablet view */}
            <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
              <img src={profile2} alt="Julian's photo 1" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(1)}`} />
              <img src={profile3} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
            </div>

            {/* Desktop view */}
            <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
              <img
                src={profile1}
                alt="Julian's photo 1"
                className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(1)}`}
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(2)}
              />

              <img src={profile2} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(2)}`} onMouseEnter={() => setHoveredImage(2)} />

              <img
                src={profile3}
                alt="Julian's photo 3"
                className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(3)}`}
                onMouseEnter={() => setHoveredImage(3)}
                onMouseLeave={() => setHoveredImage(2)}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </section>
  );
}