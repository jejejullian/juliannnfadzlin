import { useState } from "react";
import profile1 from "../../assets/image/profile1.jpeg";
import profile2 from "../../assets/image/profile2.jpeg";
import profile3 from "../../assets/image/profile3.jpeg";

export default function About() {
  // Default: profile 2 is large
  const [hoveredImage, setHoveredImage] = useState(2);

  // Function to determine the image size based on the hover state
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-32 lg:pt-64 text-neutral-950 overflow-hidden">
      <div className="w-full px-5 md:px-[60px] max-w-[1440px] mx-auto">
        {/* Header section with introduction text */}
        <div className="mb-6 md:mb-16">
          <p className="text-sm md:text-xl text-center">Hi, I'm</p>
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-3 md:mb-8">Julian Nur Fadzlin</h1>
          <p className="text-center text-sm md:text-xl font-normal mb-3 md:mb-8">I design in code as a front-end developer.</p>
          <p className="max-w-[340px] md:max-w-[440px] mx-auto text-center text-sm md:text-xl mb-3 md:mb-8 font-bold">I'm passionate about building interfaces that work—and feel—just right.</p>
          <p className="text-center text-sm md:text-lg lg:text-xl">
            Want to know more?{" "}
            <a href="#" className="no-underline">
              Read My Resume
            </a>
          </p>
        </div>

        {/* Profile Images - Responsive layout for different screen sizes */}
        <div className="mb-6 md:mb-12">
          {/* Mobile view: Display only 1 image */}
          <div className="flex flex-col items-center gap-4 md:hidden">
            <img src={profile1} alt="Julian's photo 2" className={`rounded-xl object-cover object-top transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Tablet view: Display 2 images side by side */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
            <img src={profile2} alt="Julian's photo 1" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(1)}`} />
            <img src={profile3} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(2)}`} />
          </div>

          {/* Desktop view: Display 3 images with hover effect */}
          <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
            {/* Set hovered image to profile 1 and Reset to profile 2 when mouse leaves */}
            <img
              src={profile1}
              alt="Julian's photo 1"
              className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(1)}`}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(2)}
            />

            {/* Set hovered image to profile 2 */}
            <img src={profile2} alt="Julian's photo 2" className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(2)}`} onMouseEnter={() => setHoveredImage(2)} />

            {/* Set hovered image to profile 3 and Reset to profile 2 when mouse leaves */}
            <img
              src={profile3}
              alt="Julian's photo 3"
              className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(3)}`}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(2)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
