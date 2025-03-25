
import React from 'react';
import { cn } from '@/lib/utils';
import Motion from './motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
}

const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
  variant = 'fade-up',
}) => {
  return (
    <Motion
      className={cn("scroll-reveal", className)}
      variant={variant}
      threshold={threshold}
      delay={delay}
      once={once}
    >
      {children}
    </Motion>
  );
};

export default RevealText;
