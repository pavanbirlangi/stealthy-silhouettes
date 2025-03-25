
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('revealed');
            }, delay);
            
            if (once && observerRef.current) {
              observerRef.current.unobserve(element);
            }
          } else if (!once) {
            element.classList.remove('revealed');
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
  }, [threshold, delay, once]);

  return (
    <div 
      ref={ref} 
      className={cn("scroll-reveal", className)}
    >
      {children}
    </div>
  );
};

export default RevealText;
