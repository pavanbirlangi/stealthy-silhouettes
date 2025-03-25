
import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import Motion from './motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip-up';
  style?: CSSProperties;
}

const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
  variant = 'fade-up',
  style,
}) => {
  return (
    <Motion
      className={cn("scroll-reveal", className)}
      variant={variant}
      threshold={threshold}
      delay={delay}
      once={once}
      style={style}
    >
      {children}
    </Motion>
  );
};

export default RevealText;
