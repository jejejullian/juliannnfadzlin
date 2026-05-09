import { heroData } from "../../data";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-[60px] overflow-hidden bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${heroData.bgImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="mt-20 relative z-10">
        <h1
          className="hero-reveal text-center text-slate-50 text-[39px] md:text-6xl lg:text-[92px] font-bold mb-2"
          style={{ animationDelay: "0.3s" }}
        >
          {heroData.title}
        </h1>

        <p
          className="hero-reveal text-center text-slate-50 text-lg md:text-xl lg:text-[31px] font-bold mb-2"
          style={{ animationDelay: "0.5s" }}
        >
          {heroData.subtitle}
        </p>

        <p
          className="hero-reveal text-center text-slate-50/80 text-sm md:text-lg lg:text-xl mb-4 max-w-[172px] md:max-w-[380px] mx-auto break-all leading-relaxed"
          style={{ animationDelay: "0.7s" }}
        >
          {heroData.description}
        </p>

        <div
          className="hero-reveal flex justify-center"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href={heroData.btnLink}
            target="_blank"
            className="px-6 py-2 text-[16px] md:text-xl text-slate-50 border border-slate-50 bg-transparent/0 backdrop-blur-[2px] rounded-full cursor-pointer transition-colors duration-300 ease-out hover:bg-white/20"
          >
            {heroData.btnText}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-reveal absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-white/40 text-[10px] tracking-[4px] uppercase">
          Scroll
        </span>
        <HiChevronDown className="w-5 h-5 text-white/50 animate-scroll-bounce" />
      </div>
    </section>
  );
}