
import React, { useRef } from 'react';
import RevealText from '../ui/RevealText';

const Showcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      alt: "Model in stealth-inspired outfit",
      caption: "Urban Shinobi Collection / FW23"
    },
    {
      src: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Technical outerwear",
      caption: "Midnight Protector Series"
    },
    {
      src: "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      alt: "Monochrome outfit in urban setting",
      caption: "Shadow Operative Essentials"
    },
    {
      src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "High-fashion ninja-inspired look",
      caption: "Limited Kage Capsule"
    },
    {
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      alt: "Street style with techwear influences",
      caption: "Street Phantom Edition"
    }
  ];

  const handleScrollClick = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 400; // Adjust scroll amount as needed
    const currentScroll = scrollRef.current.scrollLeft;
    
    scrollRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="showcase" className="py-24 md:py-32 bg-kageyami-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-kageyami-charcoal/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-kageyami-charcoal/20 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <RevealText>
          <span className="text-kageyami-red uppercase text-sm font-medium tracking-wider">Visual Showcase</span>
        </RevealText>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 mb-12">
          <RevealText delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              The Kageyami Look
            </h2>
          </RevealText>
          
          <RevealText delay={200}>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button 
                onClick={() => handleScrollClick('left')}
                className="w-10 h-10 flex items-center justify-center border border-kageyami-gray/50 hover:border-white transition-colors"
                aria-label="Scroll left"
              >
                <span>←</span>
              </button>
              <button 
                onClick={() => handleScrollClick('right')}
                className="w-10 h-10 flex items-center justify-center border border-kageyami-gray/50 hover:border-white transition-colors"
                aria-label="Scroll right"
              >
                <span>→</span>
              </button>
            </div>
          </RevealText>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto hide-scrollbar pb-6 -mx-5 px-5"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[280px] md:w-[350px] opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-[450px] md:h-[500px] overflow-hidden relative group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-kageyami-black via-kageyami-black/80 to-transparent">
                  <p className="text-kageyami-silver text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
