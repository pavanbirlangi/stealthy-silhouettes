
import React from 'react';
import RevealText from '../ui/RevealText';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-kageyami-red/5 blur-3xl rounded-full" />
        <div className="absolute left-1/4 bottom-1/4 w-1/4 h-1/4 bg-kageyami-red/5 blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <RevealText>
              <div className="relative">
                <div className="w-full h-[500px] lg:h-[600px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                    alt="Traditional Japanese gate with modern fashion fusion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 glass-panel">
                  <p className="text-sm md:text-base text-kageyami-silver">
                    <span className="text-white font-jp text-lg mb-2 block">影闇</span>
                    Ka·ge·ya·mi /kah-geh-yah-mee/ <br />
                    <span className="italic">n.</span> The shadow in darkness; what moves unseen.
                  </p>
                </div>
              </div>
            </RevealText>
          </div>
          
          {/* Text side */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <RevealText delay={100}>
              <span className="text-kageyami-red uppercase text-sm font-medium tracking-wider">Brand Philosophy</span>
            </RevealText>
            
            <RevealText delay={200}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">
                The Art of Stealth in Motion
              </h2>
            </RevealText>
            
            <RevealText delay={300}>
              <p className="mt-6 text-kageyami-silver text-lg leading-relaxed">
                Born from the ancient traditions of Japanese shadow warriors and forged in the crucible of modern urban landscapes, Kageyami stands at the intersection of heritage and innovation.
              </p>
            </RevealText>
            
            <RevealText delay={400}>
              <p className="mt-4 text-kageyami-silver text-lg leading-relaxed">
                Our designs embrace the philosophy that true power lies not in being seen, but in controlling when and how you are perceived. Every piece is engineered for those who move with purpose, who understand that presence is about impact, not visibility.
              </p>
            </RevealText>
            
            <RevealText delay={500}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <ValuePillar label="Stealth" />
                <ValuePillar label="Strength" />
                <ValuePillar label="Style" />
              </div>
            </RevealText>
            
            <RevealText delay={600}>
              <div className="mt-10">
                <a href="#" className="inline-flex items-center text-white group">
                  <span className="font-medium tracking-wide group-hover:text-kageyami-red transition-colors duration-300">DISCOVER OUR STORY</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuePillar = ({ label }: { label: string }) => (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
      <div className="w-full h-[1px] bg-kageyami-red/70" />
    </div>
    <h3 className="font-medium text-lg">{label}</h3>
  </div>
);

export default About;
