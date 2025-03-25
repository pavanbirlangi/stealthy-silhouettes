
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-kageyami-black border-t border-kageyami-gray/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="space-y-6">
            <a href="/" className="block">
              <div className="text-xl md:text-2xl font-bold tracking-tighter">
                <span className="font-jp">影闇</span>
                <span className="ml-2 text-lg opacity-90">KAGEYAMI</span>
              </div>
            </a>
            <p className="text-kageyami-silver max-w-xs text-sm leading-relaxed">
              Modern stealth-inspired fashion blending Japanese ninja aesthetics with contemporary streetwear.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="Twitter" />
              <SocialLink href="#" label="TikTok" />
              <SocialLink href="#" label="YouTube" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-kageyami-red font-semibold">Shop</h3>
              <FooterLinkGroup>
                <FooterLink href="#">All Collections</FooterLink>
                <FooterLink href="#">Techwear</FooterLink>
                <FooterLink href="#">Streetwear</FooterLink>
                <FooterLink href="#">Essentials</FooterLink>
                <FooterLink href="#">Limited Editions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide text-kageyami-red font-semibold">Company</h3>
              <FooterLinkGroup>
                <FooterLink href="#">Our Story</FooterLink>
                <FooterLink href="#">Stockists</FooterLink>
                <FooterLink href="#">Sustainability</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wide text-kageyami-red font-semibold">Stay Hidden, Stay Ahead</h3>
            <p className="text-kageyami-silver text-sm">Join our newsletter for exclusive drops and insider access.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-kageyami-gray/50 border-none px-4 py-2 text-sm focus:ring-1 focus:ring-kageyami-red outline-none flex-grow w-full"
              />
              <button className="bg-kageyami-red hover:bg-kageyami-red-light text-white px-4 py-2 text-sm transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-kageyami-gray/30 flex flex-col md:flex-row justify-between items-center text-kageyami-silver text-xs">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Kageyami. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <FooterSmallLink href="#">Privacy Policy</FooterSmallLink>
            <FooterSmallLink href="#">Terms of Service</FooterSmallLink>
            <FooterSmallLink href="#">Shipping Info</FooterSmallLink>
            <FooterSmallLink href="#">FAQ</FooterSmallLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkGroup = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-2">
    {children}
  </ul>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-kageyami-silver hover:text-white transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  </li>
);

const FooterSmallLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-kageyami-silver hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href} 
    aria-label={label}
    className="text-kageyami-silver hover:text-white transition-colors duration-300 text-sm"
  >
    {label}
  </a>
);

export default Footer;
