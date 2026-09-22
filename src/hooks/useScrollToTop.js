import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable automatic browser scroll restoration on reload/route change
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const cleanHash = hash ? hash.replace('#', '') : '';

    // If there's an anchor hash (other than #hero or empty), scroll to that section
    if (cleanHash && cleanHash !== 'hero') {
      let attempts = 0;
      let timerId = null;
      let cancelled = false;

      const scrollToTarget = () => {
        if (cancelled) return;
        const element = document.getElementById(cleanHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 25) {
          // Retry for up to ~500ms while DOM mounts
          attempts++;
          timerId = setTimeout(scrollToTarget, 20);
        }
      };

      // Run on next animation frame to allow DOM mount
      const rafId = requestAnimationFrame(scrollToTarget);

      return () => {
        cancelled = true;
        cancelAnimationFrame(rafId);
        if (timerId) clearTimeout(timerId);
      };
    }

    // Always scroll strictly to the very top (0, 0) when no target hash is specified
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Fast next-frame backup ensuring dynamic content/animations don't displace scroll position
    const rafId = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);
}

