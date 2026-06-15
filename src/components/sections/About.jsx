import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ResumeModal from "../ui/ResumeModal";
import ScrollReveal from "../ui/ScrollReveal";
import { profileImages, resumeData } from "../../data";

// ─── Social Links ────────────────────────────────────────────────────────────
const SOCIALS = [
  { label: "Github", href: "https://github.com/jejejullian" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juliannurfadzlin/" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Use only the first (leftmost) profile photo
  const [mainPhoto] = profileImages;

  return (
    <section id="about" className="relative text-neutral-950 overflow-hidden scroll-mt-24 pt-16 md:pt-24 lg:pt-28">
      <div className="w-full px-5 md:px-page">
        {/* ── 2-column asymmetric grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* ════ LEFT COL — Photo + Stats ════ */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <ScrollReveal delay={80}>
              {/* Single portrait photo */}
              <div className="w-full aspect-3/4 max-h-[500px] overflow-hidden rounded-2xl">
                <img src={mainPhoto} alt="Julian Nur Fadzlin" className="w-full h-full object-cover object-top" />
              </div>
            </ScrollReveal>
          </div>

          {/* ════ RIGHT COL — Editorial Text ════ */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            {/* Section label */}
            <ScrollReveal>
              <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-[6px] mb-6 md:mb-8">About Me</p>
            </ScrollReveal>

            {/* Big role typography */}
            <ScrollReveal delay={60}>
              <div className="mb-6 md:mb-8">
                <p className="font-bold uppercase leading-[0.88] tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-neutral-900">Front-end</p>
                <p className="font-bold uppercase leading-[0.88] tracking-tight text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-neutral-300">Developer.</p>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={120}>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8 max-w-md">
                {resumeData.header.intro} <span className="font-semibold text-neutral-800">{resumeData.header.subIntro}</span>
              </p>
            </ScrollReveal>

            {/* Divider */}
            <div className="h-px bg-neutral-200 mb-6 md:mb-8" />

            {/* Experience + Education timeline */}
            <ScrollReveal delay={160}>
              <div className="space-y-4 mb-8 md:mb-10">
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">Experience</p>
                {resumeData.experiences.map((exp) => (
                  <div key={exp.company} className="flex items-start gap-4">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5 shrink-0 w-24">{exp.period}</span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-tight">{exp.title}</p>
                      <p className="text-xs text-neutral-500">{exp.company}</p>
                    </div>
                  </div>
                ))}

                <div className="h-px bg-neutral-100 my-2" />

                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-2">Education</p>
                <div className="flex items-start gap-4">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5 shrink-0 w-24">2021 – 2025</span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800 leading-tight">{resumeData.education[0].degree}</p>
                    <p className="text-xs text-neutral-500">{resumeData.education[0].school}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Resume CTA */}
            <ScrollReveal delay={200}>
              <button
                onClick={() => setShowResumeModal(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-neutral-950 text-neutral-950 bg-transparent transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:gap-3"
              >
                Read My Resume
                <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-16 md:h-24" />

      {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}
    </section>
  );
}
