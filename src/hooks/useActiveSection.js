import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveSection(sectionIds, defaultSection = 'hero') {
  const { pathname, hash } = useLocation();
  const isHomePage = pathname === '/';

  const getInitialSection = () => {
    if (!isHomePage) return null;
    const cleanHash = hash ? hash.replace('#', '') : '';
    if (cleanHash && sectionIds.includes(cleanHash)) {
      return cleanHash;
    }
    return defaultSection;
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!isHomePage) {
      setActiveSection(null);
      return;
    }

    // Set initial active section on Home navigation
    const cleanHash = hash ? hash.replace('#', '') : '';
    if (cleanHash && sectionIds.includes(cleanHash)) {
      setActiveSection(cleanHash);
    } else if (window.scrollY < 120) {
      setActiveSection(defaultSection);
    }

    let observer = null;
    let cancelled = false;
    let timerId = null;
    let attempts = 0;

    const visibilityMap = new Map();

    const initObserver = () => {
      if (cancelled) return;

      const sectionElements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      // If sections aren't ready in the DOM yet, retry with backoff
      if (sectionElements.length < sectionIds.length && attempts < 25) {
        attempts++;
        timerId = setTimeout(initObserver, 20);
        return;
      }

      if (sectionElements.length === 0) return;

      if (typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                visibilityMap.set(entry.target.id, entry.intersectionRatio);
              } else {
                visibilityMap.delete(entry.target.id);
              }
            });

            // Top of page
            if (window.scrollY < 120) {
              setActiveSection(defaultSection);
              return;
            }

            // Bottom of page: if scrolled near the bottom, contact is active
            const isAtBottom =
              window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 100;
            if (isAtBottom && sectionIds.includes('contact')) {
              setActiveSection('contact');
              return;
            }

            if (visibilityMap.size > 0) {
              let bestId = null;
              let maxRatio = -1;
              for (const [id, ratio] of visibilityMap.entries()) {
                if (ratio > maxRatio) {
                  maxRatio = ratio;
                  bestId = id;
                }
              }
              if (bestId) {
                setActiveSection(bestId);
              }
            }
          },
          {
            rootMargin: '-15% 0px -40% 0px',
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
          }
        );

        sectionElements.forEach((el) => observer.observe(el));
      }
    };

    initObserver();

    // Scroll listener for top and bottom boundaries
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection(defaultSection);
        return;
      }
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      if (isAtBottom && sectionIds.includes('contact')) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelled = true;
      if (timerId) clearTimeout(timerId);
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, hash, defaultSection, sectionIds.join(',')]);

  return activeSection;
}

