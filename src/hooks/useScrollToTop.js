import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable automatic browser scroll restoration on reload/route change
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If there's an anchor hash (other than #hero or empty), scroll to it
    const cleanHash = hash ? hash.replace('#', '') : '';
    if (cleanHash && cleanHash !== 'hero') {
      const element = document.getElementById(cleanHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Always scroll strictly to the very top (0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // A fast next-tick backup ensuring dynamic content/animations don't displace the scroll position
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);
}
