
import React, { useEffect, useRef, useState } from 'react';
import Motion from '../ui/motion';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.setProperty('--scroll', scrollValue.toString());
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start entrance animation after a short delay
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-kageyami-black transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1546031055-b4c0d09b1fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) contrast(1.2)',
          transform: `translateY(calc(var(--scroll) * -0.15px)) scale(${isVisible ? 1 : 1.1})`,
        }}
      />
      
      {/* Moving overlay elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[20%] right-[30%] w-64 h-64 rounded-full bg-kageyami-red/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)` }}
        />
        <div 
          className="absolute bottom-[25%] left-[20%] w-48 h-48 rounded-full bg-kageyami-red/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-kageyami-black/70 via-transparent to-kageyami-black" />
      
      {/* Animated content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-5 text-center">
        <Motion 
          variant="fade-up" 
          delay={600} 
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-shadow-lg">
            <span className="block font-jp mb-2 animate-pulse-subtle">影闇</span>
            <span className="font-light block transform transition-transform hover:scale-105 duration-700">WEAR THE UNSEEN.</span>
            <span className="block font-medium mt-2">MOVE IN SILENCE.</span>
          </h1>
        </Motion>
        
        <Motion 
          variant="fade-up" 
          delay={900}
        >
          <p className="mt-6 md:mt-8 max-w-xl text-kageyami-silver text-lg md:text-xl text-balance text-shadow-md">
            Modern stealth-inspired fashion for those who move between worlds with purpose and precision.
          </p>
        </Motion>
        
        <Motion 
          variant="fade-up" 
          delay={1200}
        >
          <div className="mt-10 md:mt-12">
            <a 
              href="#collections" 
              className="group relative px-8 py-3 bg-kageyami-red text-white font-medium tracking-wide inline-block overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-100%] block">
                EXPLORE THE COLLECTION
              </span>
              <span className="absolute inset-0 z-0 flex items-center justify-center bg-kageyami-red-light transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
                DISCOVER THE SHADOWS
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 ease-in-out delay-150"></span>
            </a>
          </div>
        </Motion>
        
        {/* Scroll indicator */}
        <Motion 
          variant="fade-up" 
          delay={1500}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <span className="text-xs uppercase tracking-widest text-kageyami-silver mb-2">Scroll</span>
            <div className="w-[1px] h-10 bg-kageyami-silver/50 animate-pulse-subtle" />
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Hero;
