
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-5 md:px-10 py-4 md:py-6',
        {
          'bg-kageyami-black/90 backdrop-blur-md shadow-md': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="text-2xl md:text-3xl font-bold tracking-tighter text-kageyami-smoke hover:text-white transition-colors"
        >
          <span className="font-jp">影闇</span>
          <span className="ml-2 text-xl opacity-90">KAGEYAMI</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#collections">Collections</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#showcase">Showcase</NavLink>
          <NavLink href="#testimonials">Community</NavLink>
          <button className="px-4 py-2 bg-kageyami-red text-white font-medium hover:bg-kageyami-red-light transition-colors duration-300 tracking-wide">
            SHOP NOW
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-kageyami-smoke hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-kageyami-black/95 backdrop-blur-md z-40 pt-20 px-5 flex flex-col items-center transition-all duration-300 ease-in-out',
          {
            'opacity-100 pointer-events-auto': isMenuOpen,
            'opacity-0 pointer-events-none': !isMenuOpen
          }
        )}
      >
        <div className="flex flex-col items-center space-y-6 w-full">
          <MobileNavLink href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#showcase" onClick={() => setIsMenuOpen(false)}>Showcase</MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Community</MobileNavLink>
          <button 
            className="w-full py-3 bg-kageyami-red text-white font-medium hover:bg-kageyami-red-light transition-colors duration-300 tracking-wide mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-kageyami-silver hover:text-white transition-colors duration-300 tracking-wide text-sm uppercase font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-kageyami-silver hover:text-white transition-colors duration-300 tracking-wide text-lg uppercase font-medium py-3 border-b border-kageyami-gray/30 w-full text-center"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
