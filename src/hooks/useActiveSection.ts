import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], defaultSection: string = 'hero'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Zero-reflow detection using native IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
      const sectionElements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (sectionElements.length === 0) return;

      const visibilityMap = new Map<string, number>();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibilityMap.set(entry.target.id, entry.intersectionRatio);
            } else {
              visibilityMap.delete(entry.target.id);
            }
          });

          if (window.scrollY < 120) {
            setActiveSection(defaultSection);
            return;
          }

          if (visibilityMap.size > 0) {
            let bestId = defaultSection;
            let maxRatio = -1;
            for (const [id, ratio] of visibilityMap.entries()) {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                bestId = id;
              }
            }
            setActiveSection(bestId);
          }
        },
        {
          rootMargin: '-15% 0px -45% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        }
      );

      sectionElements.forEach((el) => observer.observe(el));

      const handleScrollTop = () => {
        if (window.scrollY < 120) {
          setActiveSection(defaultSection);
        }
      };

      window.addEventListener('scroll', handleScrollTop, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScrollTop);
      };
    }

    // Lightweight rAF fallback if IntersectionObserver is unavailable
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollPosition = window.scrollY + 200;
        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(id);
              return;
            }
          }
        }
        if (window.scrollY < 200) {
          setActiveSection(defaultSection);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [sectionIds.join(','), defaultSection]);

  return activeSection;
}
