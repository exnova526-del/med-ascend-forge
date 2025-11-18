import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import heroBanner from "@/assets/anna-hero.jpg";
const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const titleParallax = useParallax(titleRef, {
    speed: 0.3,
    direction: 'down',
    opacity: true
  });
  const subtitleParallax = useParallax(subtitleRef, {
    speed: 0.4,
    direction: 'down'
  });
  const buttonParallax = useParallax(buttonRef, {
    speed: 0.5,
    direction: 'down'
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-darkerBrown/95 via-darkerBrown/80 to-transparent z-10 animate-gradient-shift" />
        <img src={heroBanner} alt="Hero Banner" className="w-full h-full object-cover object-[70%_center] transition-transform duration-100 ease-out" style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }} />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <div className="text-center max-w-4xl">
          <h1 className="font-playfair text-7xl sm:text-8xl md:text-9xl font-normal text-offWhite mb-4 leading-tight tracking-[0.2em] animate-fade-down opacity-0 [animation-delay:200ms]">
            ANNA<br />
            FONTES
          </h1>
          
          <p className="font-playfair text-sm sm:text-base text-offWhite/90 mb-12 tracking-[0.3em] animate-fade-up opacity-0 [animation-delay:600ms]">MEDICINA PELA UFMG</p>
          
          <div className="w-24 h-[2px] bg-accent mx-auto mb-12 animate-scale-in opacity-0 [animation-delay:800ms]" />
          
          <div className="animate-fade-up opacity-0 [animation-delay:1000ms]">
            <Button onClick={scrollToCourses} className="font-playfair tracking-[0.3em] text-offWhite transition-all text-xl shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:translate-y-[-2px] bg-gradient-to-r from-burgundy via-primary to-burgundy bg-[length:200%_100%] animate-gradient-shift hover:from-primary hover:via-burgundy hover:to-primary">
              DESCUBRA O MÉTODO
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBanner;