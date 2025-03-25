
import React, { useEffect, useRef, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'rotate-in';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  style?: CSSProperties;
}

const Motion: React.FC<MotionProps> = ({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const getVariantClasses = (variant: AnimationVariant): string => {
    const baseClasses = 'opacity-0 transition-all';
    
    const variantClasses = {
      'fade-up': 'translate-y-10',
      'fade-down': '-translate-y-10',
      'fade-left': 'translate-x-10',
      'fade-right': '-translate-x-10',
      'zoom-in': 'scale-90',
      'zoom-out': 'scale-110',
      'flip-up': 'rotateX-90',
      'rotate-in': 'rotate-12',
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };

  const getAnimatedClasses = (variant: AnimationVariant): string => {
    return 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0 rotateX-0';
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply initial styling
    element.classList.add(...getVariantClasses(variant).split(' '));
    element.style.transitionDuration = `${duration}ms`;
    element.style.transitionDelay = `${delay}ms`;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.remove(...getVariantClasses(variant).split(' '));
              element.classList.add(...getAnimatedClasses(variant).split(' '));
            }, 100); // Small buffer for smoother animation
            
            if (once && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          } else if (!once) {
            element.classList.add(...getVariantClasses(variant).split(' '));
            element.classList.remove(...getAnimatedClasses(variant).split(' '));
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [variant, delay, duration, threshold, once]);

  return (
    <div 
      ref={ref} 
      className={cn(className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Motion;

// Custom classes for rotation and 3D transforms
const rotateClasses = {
  'rotateX-90': 'transform rotateX(90deg)',
  'rotateX-0': 'transform rotateX(0deg)',
  'rotate-12': 'transform rotate(12deg)',
  'rotate-0': 'transform rotate(0deg)',
};
