import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  opacity?: boolean;
  scale?: boolean;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
) => {
  const {
    speed = 0.5,
    direction = 'up',
    opacity = false,
    scale = false,
  } = options;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate offset based on element position in viewport
      const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
      const offsetValue = scrollProgress * 100 * speed;

      setOffset(offsetValue);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  // Generate transform string based on direction
  const getTransform = () => {
    let transform = '';
    
    switch (direction) {
      case 'up':
        transform = `translateY(${-offset}px)`;
        break;
      case 'down':
        transform = `translateY(${offset}px)`;
        break;
      case 'left':
        transform = `translateX(${-offset}px)`;
        break;
      case 'right':
        transform = `translateX(${offset}px)`;
        break;
    }

    if (scale) {
      const scaleValue = 1 + (offset / 1000);
      transform += ` scale(${Math.max(1, scaleValue)})`;
    }

    return transform;
  };

  const getOpacity = () => {
    if (!opacity) return 1;
    return Math.max(0.3, 1 - (offset / 200));
  };

  return {
    transform: getTransform(),
    opacity: getOpacity(),
    style: {
      transform: getTransform(),
      opacity: getOpacity(),
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    },
  };
};
