
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Collections from '@/components/home/Collections';
import Showcase from '@/components/home/Showcase';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      observer.observe(el);
    });

    // Add scroll listener for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simulate page load animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`min-h-screen bg-kageyami-black text-white overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(191, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 50%)',
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Collections />
        <About />
        <Showcase />
        <Testimonials />
      </main>
      
      <Footer />
      
      {/* Cursor trail effect */}
      <div id="cursor-trail" className="fixed pointer-events-none z-50 w-5 h-5 rounded-full mix-blend-difference" />
    </div>
  );
};

export default Index;
