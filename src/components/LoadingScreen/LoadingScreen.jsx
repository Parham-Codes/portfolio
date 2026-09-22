import React, { useState, useEffect } from 'react';

/**
 * Full-Page Professional Loading Experience
 *
 * Covers 100% of the viewport on initial app mount to prevent premature visibility
 * of naked header/footer elements or unstyled layout shifts (CLS = 0).
 * Fades out smoothly as soon as the DOM and primary resources are mounted and ready.
 */
export const LoadingScreen = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check when DOM and initial rendering frame is ready
    let timer;
    const handleReady = () => {
      // Double rAF ensures the browser has computed layout and painted initial DOM
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Graceful tiny transition buffer (200ms) to ensure stability without artificial lag
          timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsMounted(false);
              if (onFinish) onFinish();
            }, 350); // Matches transition duration
          }, 200);
        });
      });
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady, { once: true });
      // Fallback safety timeout (max 1.2s if an external asset stalls)
      timer = setTimeout(handleReady, 1200);
    }

    return () => {
      window.removeEventListener('load', handleReady);
      if (timer) clearTimeout(timer);
    };
  }, [onFinish]);

  if (!isMounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070a12] select-none transition-opacity duration-350 ease-out pointer-events-none ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow aura */}
      <div className="absolute w-72 h-72 rounded-full bg-[#0284c7]/12 blur-[90px] transform-gpu pointer-events-none" />

      {/* Central High-Tech Geometric Loader */}
      <div className="relative flex flex-col items-center gap-5 z-10">
        {/* Futuristic Concentric Ring Spinner */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          {/* Subtle Outer Track */}
          <div className="absolute inset-0 rounded-full border border-white/[0.08]" />

          {/* Glowing Active Ring Segment */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38bdf8] border-r-[#38bdf8]/40 animate-spin"
            style={{ animationDuration: '0.9s' }}
          />

          {/* Inner Pulsing Core */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] animate-pulse" />
        </div>

        {/* Minimal Monospace Status Readout */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs sm:text-[13px] font-bold text-[#dfe2ee] tracking-[0.25em] uppercase">
            PARHAM.DEV
          </span>
          {/* Dynamic glowing progress hairline */}
          <div className="w-24 sm:w-28 h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative">
            <div
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent rounded-full animate-shimmer"
              style={{
                animation: 'shimmer 1.4s infinite linear',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
