'use client';

import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const position = window.scrollY;
      
      // Get half the window height
      const threshold = window.innerHeight * 0.5;
      
      // Update state based on position
      setScrolled(position > threshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away to update state with initial window position
    handleScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
} 