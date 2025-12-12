import { heroData } from "../../data"; 

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-[60px] overflow-hidden bg-cover bg-bottom bg-no-repeat" 
      style={{ backgroundImage: `url(${heroData.bgImage})` }}   
    >
      <div className="mt-20">
        {/* Main Title */}
        <h1 className="text-center text-slate-50 text-[39px] md:text-6xl lg:text-[92px] font-bold mb-2">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p className="text-center text-slate-50 text-lg md:text-xl lg:text-[31px] font-bold mb-2">
          {heroData.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-center text-slate-50 text-sm md:text-lg lg:text-xl mb-2 max-w-[172px] md:max-w-[380px] mx-auto break-all leading-relaxed">
          {heroData.description}
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a 
            href={heroData.btnLink} 
            target="_blank" 
            className="px-6 py-2 text-[16px] md:text-xl text-slate-50 border border-slate-50 bg-transparent/0 backdrop-blur-[2px] rounded-full cursor-pointer transition-colors duration-300 ease-out hover:bg-white/20 "
          >
            {heroData.btnText}
          </a>
        </div>
      </div>
    </section>
  );
}