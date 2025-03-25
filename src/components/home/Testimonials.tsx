
import React from 'react';
import RevealText from '../ui/RevealText';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Kageyami's techwear pieces have transformed my urban mobility. Functional, stylish, and I can move silently through the city.",
      author: "Kenji M.",
      location: "Tokyo",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      quote: "The Shadow Operative Jacket is a masterpiece. Water-resistant, breathable, and with hidden pockets that keep my essentials secure.",
      author: "Lena K.",
      location: "Berlin",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=564&q=80"
    },
    {
      id: 3,
      quote: "When I'm wearing Kageyami, I feel like I've stepped into the future. The minimalist aesthetic speaks volumes without saying a word.",
      author: "Marcus J.",
      location: "New York",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-kageyami-charcoal to-kageyami-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <RevealText>
          <span className="text-kageyami-red uppercase text-sm font-medium tracking-wider">Community Voice</span>
        </RevealText>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-3 mb-12">
          <RevealText delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              The Shadow Community
            </h2>
          </RevealText>
          
          <RevealText delay={200}>
            <a href="#" className="inline-flex items-center text-kageyami-silver group mt-4 md:mt-0">
              <span className="font-medium tracking-wide group-hover:text-white transition-colors duration-300">JOIN US</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealText key={testimonial.id} delay={100 * (index + 1)}>
              <TestimonialCard testimonial={testimonial} />
            </RevealText>
          ))}
        </div>
        
        <RevealText delay={400}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium mb-6">Follow us for exclusive content and community highlights</h3>
            <div className="flex justify-center space-x-6">
              <SocialButton label="Instagram" />
              <SocialButton label="Twitter" />
              <SocialButton label="TikTok" />
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: { quote: string; author: string; location: string; image: string } }) => (
  <div className="glass-panel p-6 h-full flex flex-col">
    <div className="mb-6 flex-grow">
      <p className="text-kageyami-silver italic leading-relaxed">"{testimonial.quote}"</p>
    </div>
    
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-medium">{testimonial.author}</h4>
        <p className="text-kageyami-silver text-sm">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const SocialButton = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="px-5 py-2 border border-kageyami-gray/50 hover:border-white text-kageyami-silver hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide"
  >
    {label}
  </a>
);

export default Testimonials;
