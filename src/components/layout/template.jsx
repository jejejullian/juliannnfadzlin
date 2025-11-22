import { useState } from "react";

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
        <div className="mb-12">
          <p className="text-xl text-center">Hi, I'm</p>
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-8">
            Julian Nur Fadzlin
          </h1>
          <p className="text-center text-sm md:text-xl font-normal mb-8">
            I design in code as a front-end developer.
          </p>
          <p className="max-w-[300px] md:max-w-[440px] mx-auto text-center text-sm md:text-xl mb-8 font-bold border border-neutral-950 p-4 rounded-lg">
            I'm passionate about building interfaces that work—and feel—just right.
          </p>
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
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=300&fit=crop"
              alt="Julian's photo 2"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`}
            />
          </div>

          {/* Tablet: 2 gambar side by side */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
              alt="Julian's photo 1"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(1)}`}
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=300&fit=crop"
              alt="Julian's photo 2"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`}
            />
          </div>

          {/* Desktop: 3 gambar dengan hover effect */}
          <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
              alt="Julian's photo 1"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(1)}`}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(2)}
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=300&fit=crop"
              alt="Julian's photo 2"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(2)}`}
              onMouseEnter={() => setHoveredImage(2)}
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=300&fit=crop"
              alt="Julian's photo 3"
              className={`rounded-2xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(3)}`}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(2)}
            />
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 flex-wrap">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
            HTML
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded flex items-center justify-center text-white font-bold">
            PHP
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded flex items-center justify-center text-neutral-950 font-bold">
            JS
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
            Boot
          </div>
        </div>
      </div>
    </section>
  );
}