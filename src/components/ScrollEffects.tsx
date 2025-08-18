import React, { useEffect, useRef } from "react";

interface ScrollEffectsProps {
  children: React.ReactNode;
}

const ScrollEffects: React.FC<ScrollEffectsProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Add fade-in effect for elements as they come into view
      const elements = document.querySelectorAll(".scroll-fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        // Check if element is in viewport
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("fade-in-active");
        }
      });

      // Add slide-in effect for elements
      const slideElements = document.querySelectorAll(".scroll-slide-in");
      slideElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        // Check if element is in viewport
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("slide-in-active");
        }
      });

      // Add slide-in from right effect
      const slideRightElements = document.querySelectorAll(
        ".scroll-slide-in-right"
      );
      slideRightElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        // Check if element is in viewport
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("slide-in-active");
        }
      });

      // Add scale-in effect
      const scaleElements = document.querySelectorAll(".scroll-scale-in");
      scaleElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        // Check if element is in viewport
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("scale-in-active");
        }
      });
    };

    // Initial check for elements already in viewport
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="scroll-container">
      {children}
    </div>
  );
};

export default ScrollEffects;
