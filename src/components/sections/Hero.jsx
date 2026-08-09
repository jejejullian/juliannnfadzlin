import { heroData } from "@/data";
import { HiChevronDown } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

// Stagger Component 
function StaggerText({ text, baseDelay = 0, isLoaded = true }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          <span
            className="inline-block"
            style={{
              animationName: isLoaded ? "letter-reveal" : "none",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationFillMode: "forwards",
              animationDelay: `${baseDelay + i * 0.048}s`,
              opacity: 0,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </>
  );
}

const TICKER = "FRONT-END DEVELOPER · REACT · TAILWIND · JAVASCRIPT · WEB · UI/UX · ";

// Main Component
export default function Hero({ isLoaded = true }) {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroData.bgImage.src})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/85" />

      {/* Main Flex Wrapper: Takes remaining space, vertically centers content, locked gap spacing */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full px-5 md:px-page pt-24 pb-8 md:pt-32 md:pb-12 gap-5 md:gap-8">

        {/* Giant staggered name */}
        <h1 className="font-bold uppercase text-white flex flex-col" aria-label="Julian Nur Fadzlin">
          {/* Line 1 */}
          <div className="overflow-hidden flex text-[15.5vw] md:text-[13vw] lg:text-[11vw] leading-none">
            <StaggerText text="JULIAN" baseDelay={0.35} isLoaded={isLoaded} />
          </div>
          {/* Line 2 & 3 */}
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-5 text-[15.5vw] md:text-[13vw] lg:text-[11vw] leading-none">
            <div className="overflow-hidden flex">
              <StaggerText text="NUR" baseDelay={0.65} isLoaded={isLoaded} />
            </div>
            <div className="overflow-hidden flex">
              <StaggerText text="FADZLIN" baseDelay={0.81} isLoaded={isLoaded} />
            </div>
          </div>
        </h1>

        {/* Role divider */}
        <div
          className="flex items-center gap-3 md:gap-5 w-full"
          style={{
            animationName: isLoaded ? "fade-up" : "none",
            animationDuration: "0.6s",
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationDelay: "1.6s",
            opacity: 0,
          }}
        >
          <div className="h-px flex-1 bg-white/25" />
          <p className="text-[9px] md:text-xs text-white/60 tracking-[3px] md:tracking-[5px] uppercase text-center max-w-[60%] md:max-w-none text-wrap">
            {heroData.subtitle}
          </p>
          <div className="h-px flex-1 bg-white/25" />
        </div>

        {/* Bottom row: CTA + Scroll */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 w-full"
          style={{
            animationName: isLoaded ? "fade-up" : "none",
            animationDuration: "0.6s",
            animationTimingFunction: "ease",
            animationFillMode: "forwards",
            animationDelay: "1.75s",
            opacity: 0,
          }}
        >
          <a
            href={heroData.btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm text-white border border-white/25 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/45"
          >
            {heroData.btnText}
            <FiArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a href="#about" className="flex flex-col items-center gap-1 cursor-pointer group-hover:opacity-80 transition-opacity">
            <span className="text-white/30 text-[9px] tracking-[4px] uppercase">Scroll</span>
            <HiChevronDown className="w-4 h-4 text-white/30 animate-scroll-bounce" />
          </a>
        </div>
      </div>

      {/* ── Marquee ticker — very bottom edge ── */}
      <div
        className="relative z-10 border-t border-white/10 bg-black/35 backdrop-blur-sm py-2 overflow-hidden w-full mt-auto"
        style={{
          animationName: isLoaded ? "fade-up" : "none",
          animationDuration: "0.4s",
          animationTimingFunction: "ease",
          animationFillMode: "forwards",
          animationDelay: "2.1s",
          opacity: 0,
        }}
      >
        {/* Duplicate 4× so -50% translateX loops seamlessly */}
        <div className="whitespace-nowrap animate-slide-left-infinite inline-block w-max">
          <span className="text-[9px] md:text-[10px] text-white/35 tracking-[5px] uppercase">
            {(TICKER + TICKER).repeat(2)}
          </span>
        </div>
      </div>
    </section>
  );
}