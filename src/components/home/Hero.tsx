
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.setProperty('--scroll', scrollValue.toString());
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-kageyami-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1546031055-b4c0d09b1fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5) contrast(1.2)',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-kageyami-black/70 via-transparent to-kageyami-black" />
      
      {/* Animated content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-5 text-center">
        <h1 className="opacity-0 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-shadow-lg">
          <span className="block font-jp mb-2">影闇</span>
          <span className="font-light">WEAR THE UNSEEN.</span>
          <span className="block font-medium mt-2">MOVE IN SILENCE.</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in animate-delay-300 mt-6 md:mt-8 max-w-xl text-kageyami-silver text-lg md:text-xl text-balance text-shadow-md">
          Modern stealth-inspired fashion for those who move between worlds with purpose and precision.
        </p>
        
        <div className="opacity-0 animate-fade-in animate-delay-500 mt-10 md:mt-12">
          <a 
            href="#collections" 
            className="px-8 py-3 bg-kageyami-red hover:bg-kageyami-red-light text-white font-medium tracking-wide transition-all duration-300 inline-block hover-lift"
          >
            EXPLORE THE COLLECTION
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-kageyami-silver mb-2">Scroll</span>
            <div className="w-[1px] h-10 bg-kageyami-silver/50 animate-pulse-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
