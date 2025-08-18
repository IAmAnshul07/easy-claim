import React, { useEffect, useRef } from "react";

interface ParallaxBannerProps {
  children: React.ReactNode;
  imageUrl: string;
  className?: string;
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  children,
  imageUrl,
  className = ""
}) => {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Parallax speed
        bannerRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 text-white relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
        minHeight: "85vh"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container text-center px-3 relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxBanner;
