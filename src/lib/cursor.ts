
// Custom cursor effects
export const initCustomCursor = () => {
  const cursorDot = document.createElement('div');
  cursorDot.id = 'cursor-dot';
  cursorDot.className = 'fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white';
  document.body.appendChild(cursorDot);

  const cursorTrail = document.getElementById('cursor-trail');
  
  let cursorVisible = true;
  let cursorEnlarged = false;
  
  // Mouse position
  let endX = 0;
  let endY = 0;
  let mouseX = 0;
  let mouseY = 0;
  
  // Animation frame ID
  let animationFrameId: number | null = null;

  // Mouse movement
  const mouseMove = (e: MouseEvent) => {
    // Update position
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show cursor
    if (!cursorVisible) {
      cursorDot.style.opacity = '1';
      if (cursorTrail) cursorTrail.style.opacity = '1';
      cursorVisible = true;
    }
    
    // Update size for hover states
    const target = e.target as HTMLElement;
    if (target) {
      const isLinkOrButton = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.parentElement?.tagName.toLowerCase() === 'a' ||
        target.parentElement?.tagName.toLowerCase() === 'button' ||
        target.classList.contains('cursor-pointer');
        
      if (isLinkOrButton) {
        if (!cursorEnlarged) {
          if (cursorTrail) {
            cursorTrail.style.transform = 'scale(1.5)';
            cursorTrail.style.backgroundColor = 'rgba(191, 0, 0, 0.4)';
          }
          cursorDot.style.transform = 'scale(0.5)';
          cursorEnlarged = true;
        }
      } else {
        if (cursorEnlarged) {
          if (cursorTrail) {
            cursorTrail.style.transform = 'scale(1)';
            cursorTrail.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
          }
          cursorDot.style.transform = 'scale(1)';
          cursorEnlarged = false;
        }
      }
    }
    
    // Start animation loop if not already running
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateCursor);
    }
  };

  const updateCursor = () => {
    // Smooth animation with easing
    endX = lerp(endX, mouseX, 0.2);
    endY = lerp(endY, mouseY, 0.2);
    
    // Apply position with transform for better performance
    cursorDot.style.transform = `translate(${endX}px, ${endY}px) scale(1)`;
    if (cursorTrail) {
      cursorTrail.style.transform = `translate(${endX}px, ${endY}px) ${cursorEnlarged ? 'scale(2.5)' : 'scale(1)'}`;
    }
    
    // Continue animation loop
    animationFrameId = requestAnimationFrame(updateCursor);
  };
  
  // Mouse leave - hide cursor
  const mouseLeave = () => {
    cursorDot.style.opacity = '0';
    if (cursorTrail) cursorTrail.style.opacity = '0';
    cursorVisible = false;
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };
  
  // Mouse enter - show cursor
  const mouseEnter = () => {
    cursorDot.style.opacity = '1';
    if (cursorTrail) cursorTrail.style.opacity = '1';
    cursorVisible = true;
    
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateCursor);
    }
  };

  // Click animation
  const click = () => {
    if (cursorTrail) {
      cursorTrail.classList.add('cursor-ping');
      setTimeout(() => {
        cursorTrail.classList.remove('cursor-ping');
      }, 700);
    }
  };
  
  // Linear interpolation helper
  const lerp = (start: number, end: number, amt: number): number => {
    return (1 - amt) * start + amt * end;
  };
  
  // Add event listeners
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseenter', mouseEnter);
  document.addEventListener('mouseleave', mouseLeave);
  document.addEventListener('click', click);
  
  // Clean up on unmount
  return () => {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseenter', mouseEnter);
    document.removeEventListener('mouseleave', mouseLeave);
    document.removeEventListener('click', click);
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    
    if (cursorDot.parentNode) {
      document.body.removeChild(cursorDot);
    }
  };
};

// Initialize split text animations
export const initSplitText = () => {
  document.querySelectorAll('.split-text').forEach((element) => {
    const text = element.textContent || '';
    element.textContent = '';
    
    // Create a wrapper for characters
    const wrapper = document.createElement('span');
    wrapper.className = 'inline-block';
    
    // Split the text into individual characters
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'char-split';
      span.textContent = char;
      span.style.transitionDelay = `${index * 30}ms`;
      wrapper.appendChild(span);
    });
    
    element.appendChild(wrapper);
  });
};
