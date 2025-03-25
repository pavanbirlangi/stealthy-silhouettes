
import React from 'react';
import RevealText from '../ui/RevealText';

const Collections = () => {
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
    <section id="collections" className="py-24 md:py-32 bg-kageyami-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <RevealText>
          <span className="text-kageyami-red uppercase text-sm font-medium tracking-wider">Shop by Category</span>
        </RevealText>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 mb-12">
          <RevealText delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Collections
            </h2>
          </RevealText>
          
          <RevealText delay={200}>
            <a href="#" className="inline-flex items-center text-kageyami-silver group mt-4 md:mt-0">
              <span className="font-medium tracking-wide group-hover:text-white transition-colors duration-300">VIEW ALL</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {collections.map((collection, index) => (
            <RevealText key={collection.id} delay={100 * (index + 1)}>
              <CollectionCard collection={collection} />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollectionCard = ({ collection }: { collection: { id: string; name: string; description: string; image: string } }) => (
  <a href={`#${collection.id}`} className="group block">
    <div className="overflow-hidden relative aspect-[3/4]">
      <img 
        src={collection.image} 
        alt={collection.name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kageyami-black/90 via-kageyami-black/30 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-semibold text-xl mb-2">{collection.name}</h3>
        <p className="text-kageyami-silver text-sm">{collection.description}</p>
        
        <div className="mt-4 overflow-hidden">
          <span className="inline-flex items-center text-kageyami-red transform translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
            Shop Now
          </span>
          <span className="inline-flex items-center text-kageyami-red transform translate-y-full group-hover:translate-y-0 absolute transition-transform duration-300">
            <span>Explore</span>
            <span className="ml-1">→</span>
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default Collections;
