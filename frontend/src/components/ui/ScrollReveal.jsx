import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal — A wrapper component that animates children into view
 * when they enter the viewport. Uses native IntersectionObserver (no packages needed).
 *
 * @param {string} direction - Animation direction: "up", "left", "right", "scale"
 * @param {number} delay - Delay in ms before animation starts
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML tag to render (default: "div")
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
  style: extraStyle = {},
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenTransforms = {
    up: "translateY(50px)",
    down: "translateY(-50px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
    scale: "scale(0.92)",
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : hiddenTransforms[direction],
        ...extraStyle,
      }}
    >
      {children}
    </Tag>
  );
}
