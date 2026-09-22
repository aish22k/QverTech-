import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  const scrollToTop = () => {
    // If there's an anchor hash (e.g. #contact), let browser or custom logic handle it
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Force instant scroll to the very top across all browser implementations
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // 1. Immediately before paint
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    scrollToTop();
  }, [pathname, search, hash]);

  // 2. Right after mount and after microtasks/animations
  useEffect(() => {
    scrollToTop();

    const raf = requestAnimationFrame(scrollToTop);
    const timer1 = setTimeout(scrollToTop, 20);
    const timer2 = setTimeout(scrollToTop, 100);
    const timer3 = setTimeout(scrollToTop, 300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, search, hash]);

  return null;
};
