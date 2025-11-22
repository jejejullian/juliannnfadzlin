import bgHero from "../../assets/image/background1.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-[60px] overflow-hidden bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${bgHero})` }}>
      <div className="mt-20">
        <h1 className="text-center text-slate-50 text-[39px] md:text-6xl lg:text-[92px] font-bold mb-2">WHO IS JULIAN?</h1>
        <p className="text-center text-slate-50 text-lg md:text-xl lg:text-[31px] font-bold mb-2">Front-end Developer Enthusiast</p>
        <p className="text-center text-slate-50 text-sm md:text-lg lg:text-xl mb-2 max-w-[172px] md:max-w-[380px] mx-auto break-all leading-relaxed">Crafting responsive and user-friendly web applications, pixel by pixel.</p>
        <div className="flex justify-center">
          <button className="px-6 py-2 text-[16px] md:text-xl text-slate-50 border border-slate-50 bg-transparent/0 backdrop-blur-[2px] rounded-full cursor-pointer transition-colors duration-300 ease-out hover:bg-white/20 ">
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
}
