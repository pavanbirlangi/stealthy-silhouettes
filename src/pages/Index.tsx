
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Collections from '@/components/home/Collections';
import Showcase from '@/components/home/Showcase';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-kageyami-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
        <Showcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
