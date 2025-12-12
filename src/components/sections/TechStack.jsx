import { techStackIcons } from "../../data";

export default function TechStack() {
  const images = techStackIcons;

  // Duplicate the array for an infinite scrolling effect
  const duplicatedImages = [...images, ...images];

  return (
    <section className="px-5 md:px-[60px]">
      {/* Carousel Container: Wraps the scrolling tech stack logos */}
      <div className="group relative overflow-hidden whitespace-nowrap mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
        {/* Infinite scroll animation for logos */}
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {/* Render All Logos for Infinite Scroll */}
          {duplicatedImages.map((src, index) => (
            <img key={`logo-${index}`} className="mx-8 inline h-11 md:h-16" src={src} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
