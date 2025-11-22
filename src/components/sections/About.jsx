import { useState } from "react";
import profile1 from "../../assets/image/profile1.jpeg";
import profile2 from "../../assets/image/profile2.jpeg";
import profile3 from "../../assets/image/profile3.jpeg";

export default function About() {
  const [hoveredImage, setHoveredImage] = useState(2); // Default: profile 2 is large

  // Fungsi untuk mendapatkan class size berdasarkan index dan state hover
  const getImageSize = (imageIndex) => {
    const isHovered = hoveredImage === imageIndex;

    // Mobile (< md): 1 gambar penuh
    // Tablet (md - lg): 2 gambar side by side
    // Desktop (>= lg): 3 gambar dengan efek hover
    if (isHovered) {
      return "w-full md:w-[320px] lg:w-[550px] h-[240px] md:h-[260px] lg:h-[360px]";
    }
    return "w-full md:w-[320px] lg:w-[280px] h-[240px] md:h-[260px] lg:h-[180px]";
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-32 lg:pt-64 text-neutral-950 overflow-hidden">
      <div className="w-full px-5 md:px-[60px] max-w-[1440px] mx-auto">
        {/* Header Text */}
        <div className="border mb-12">
          <p className="text-xl text-center">Hi, I'm</p>
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8">Julian Nur Fadzlin</h1>
          <p className="text-center text-sm md:text-xl font-normal mb-8">I design in code as a front-end developer.</p>
          <p className="max-w-[300px] md:max-w-[440px] mx-auto text-center text-sm md:text-xl mb-8 font-bold p-4 rounded-lg">I'm passionate about building interfaces that work—and feel—just right.</p>
          <p className="text-center text-sm md:text-lg lg:text-xl mb-8">
            Want to know more?{" "}
            <a href="#" className="underline hover:no-underline">
              Read My Resume
            </a>
          </p>
        </div>

        {/* Profile Images - Responsive Layout */}
        <div className="mb-12">
          {/* Mobile: 1 gambar saja (center image) */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <img src={profile1} alt="Julian's photo 2" className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Tablet: 2 gambar side by side */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
            <img src={profile2} alt="Julian's photo 1" className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(1)}`} />
            <img src={profile3} alt="Julian's photo 2" className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Desktop: 3 gambar dengan hover effect */}
          <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
            <img
              src={profile1}
              alt="Julian's photo 1"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(1)}`}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(2)}
            />
            <img src={profile2} alt="Julian's photo 2" className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(2)}`} onMouseEnter={() => setHoveredImage(2)} />
            <img
              src={profile3}
              alt="Julian's photo 3"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(3)}`}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(2)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
