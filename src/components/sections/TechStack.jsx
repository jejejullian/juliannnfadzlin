import html from "../../assets/icon/html.png";
import css from "../../assets/icon/css.png";
import tailwind from "../../assets/icon/tailwind.png";
import bootstrap from "../../assets/icon/bootstrap.png";
import sass from "../../assets/icon/sass.png";
import javasript from "../../assets/icon/js.png";
import react from "../../assets/icon/reactjs.png";
import php from "../../assets/icon/php.png";
import xampp from "../../assets/icon/xampp.png";
import mysql from "../../assets/icon/mysql.png";
import git from "../../assets/icon/git.png";
import postman from "../../assets/icon/postman.png";

export default function TechStack() {
  // Array of tech stack icons to display in the carousel
  const images = [html, css, tailwind, bootstrap, sass, javasript, react, php, xampp, mysql, git, postman];

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
