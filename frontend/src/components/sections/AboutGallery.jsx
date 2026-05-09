import { useState } from "react";
import { profileImages } from "../../data";

export default function AboutGallery() {
  const [hoveredImage, setHoveredImage] = useState(2);
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

  const images = [
    { src: profile1, alt: "Julian's photo 1", index: 1 },
    { src: profile2, alt: "Julian's photo 2", index: 2 },
    { src: profile3, alt: "Julian's photo 3", index: 3 },
  ];

  return (
    <div className="mb-6 md:mb-12">
      {/* Mobile view */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <img
          src={profile2}
          alt="Julian's photo"
          className={`rounded-xl object-cover object-top transition-all duration-300 ease-in-out ${getImageSize(2)}`}
        />
      </div>

      {/* Tablet view */}
      <div className="hidden md:flex lg:hidden items-center justify-center gap-4">
        {images.slice(0, 2).map((img) => (
          <img
            key={img.index}
            src={img.src}
            alt={img.alt}
            className={`rounded-xl object-cover transition-all duration-300 ease-in-out ${getImageSize(img.index)}`}
          />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex items-center justify-center gap-4 h-[360px]">
        {images.map((img) => (
          <img
            key={img.index}
            src={img.src}
            alt={img.alt}
            className={`rounded-xl object-cover transition-all duration-300 ease-in-out cursor-pointer shrink-0 ${getImageSize(
              img.index
            )}`}
            onMouseEnter={() => setHoveredImage(img.index)}
            onMouseLeave={() => setHoveredImage(2)}
          />
        ))}
      </div>
    </div>
  );
}
