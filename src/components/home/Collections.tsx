
import React, { useState } from 'react';
import RevealText from '../ui/RevealText';
import Motion from '../ui/motion';

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const collections = [
    {
      id: 'streetwear',
      name: 'Streetwear',
      description: 'Urban sensibility with shadow-warrior inspiration',
      image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 'techwear',
      name: 'Techwear',
      description: 'Functional precision with innovative materials',
      image: 'https://images.unsplash.com/photo-1626379961798-54f7b241a5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 'essentials',
      name: 'Essentials',
      description: 'Minimalist foundations with maximum impact',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'
    },
    {
      id: 'limited',
      name: 'Limited Edition',
      description: 'Exclusive drops that appear and vanish',
      image: 'https://images.unsplash.com/photo-1604198990726-2ca05f2c7ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];

  return (
    <section id="collections" className="py-24 md:py-32 bg-kageyami-charcoal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-kageyami-red/3 blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-kageyami-red/3 blur-[100px] animate-pulse-subtle animation-delay-700" />
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        <Motion variant="fade-up">
          <span className="text-kageyami-red uppercase text-sm font-medium tracking-wider">Shop by Category</span>
        </Motion>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 mb-12">
          <Motion variant="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Collections
            </h2>
          </Motion>
          
          <Motion variant="fade-up" delay={200}>
            <a href="#" className="inline-flex items-center text-kageyami-silver group mt-4 md:mt-0 relative overflow-hidden">
              <span className="font-medium tracking-wide group-hover:text-white transition-colors duration-300">VIEW ALL</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-kageyami-red group-hover:w-full transition-all duration-500"></span>
            </a>
          </Motion>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 perspective-1000">
          {collections.map((collection, index) => (
            <Motion
              key={collection.id}
              variant={index % 2 === 0 ? 'fade-up' : 'fade-down'}
              delay={150 * (index + 1)}
              className="transform transition-all duration-700"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: hoveredIndex === index ? 'rotateY(5deg)' : 'rotateY(0)'
              }}
            >
              <CollectionCard 
                collection={collection} 
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollectionCard = ({ 
  collection, 
  onHover, 
  onLeave 
}: { 
  collection: { id: string; name: string; description: string; image: string };
  onHover: () => void;
  onLeave: () => void;
}) => (
  <a 
    href={`#${collection.id}`} 
    className="group block relative"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <div className="overflow-hidden relative aspect-[3/4] shadow-lg shadow-black/30 transition-all duration-700 group-hover:shadow-xl group-hover:shadow-kageyami-red/10">
      <img 
        src={collection.image} 
        alt={collection.name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kageyami-black/90 via-kageyami-black/30 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <h3 className="font-semibold text-xl mb-2 relative">
          {collection.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-kageyami-red group-hover:w-1/3 transition-all duration-500 ease-out"></span>
        </h3>
        <p className="text-kageyami-silver text-sm">{collection.description}</p>
        
        <div className="mt-4 overflow-hidden">
          <span className="inline-flex items-center text-kageyami-red transform translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
            Shop Now
          </span>
          <span className="inline-flex items-center text-kageyami-red transform translate-y-full group-hover:translate-y-0 absolute transition-transform duration-300">
            <span>Explore</span>
            <span className="ml-1 transform group-hover:translate-x-1 transition-all duration-300">→</span>
          </span>
        </div>
      </div>

      {/* Hover corner lines effect */}
      <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-[30px] group-hover:h-[30px] border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500 ease-out"></div>
      <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-[30px] group-hover:h-[30px] border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500 ease-out"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 group-hover:w-[30px] group-hover:h-[30px] border-b-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500 ease-out"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-[30px] group-hover:h-[30px] border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500 ease-out"></div>
    </div>
  </a>
);

export default Collections;
