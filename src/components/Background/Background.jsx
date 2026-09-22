import React from 'react';

/**
 * Background Component
 *
 * Premium Dark Developer Portfolio background with subtle futuristic accents,
 * soft multi-layered ambient glows, an architectural developer grid with
 * intersection crosshairs, and gentle compositor-only GPU drift.
 *
 * Designed to enhance glassmorphic cards with natural depth while keeping
 * the center clean, readable, and distraction-free.
 */
export const Background = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none contain-strict"
      style={{ contain: 'strict' }}
    >
      {/* 1. Deep Midnight Base Gradient Canvas */}
      <div className="absolute inset-0 bg-[#070a12] bg-[radial-gradient(120%_120%_at_50%_0%,#0d1527_0%,#070a13_55%,#05080e_100%)]" />

      {/* 2. Soft Ambient Lighting Pools (Diffused Gaussian Glows) */}
      {/* Top-Left / Header: Cyan & Sky Glow */}
      <div
        className="absolute -top-[12%] -left-[10%] w-[420px] h-[420px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-br from-[#0284c7]/16 via-[#38bdf8]/08 to-transparent blur-[70px] sm:blur-[150px] animate-ambient-slow transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Top-Right: Deep Indigo & Subtle Violet Glow */}
      <div
        className="absolute -top-[10%] -right-[8%] w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-[#6366f1]/12 via-[#818cf8]/06 to-transparent blur-[75px] sm:blur-[160px] animate-ambient-reverse transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Mid-Left / Project Section: Deep Navy / Teal Glow */}
      <div
        className="absolute top-[42%] -left-[12%] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-r from-[#0369a1]/10 via-[#0e7490]/05 to-transparent blur-[80px] sm:blur-[140px] animate-ambient-pulse transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Bottom-Right / Experience & Footer: Muted Indigo Depth */}
      <div
        className="absolute -bottom-[12%] -right-[8%] w-[400px] h-[400px] sm:w-[680px] sm:h-[680px] rounded-full bg-gradient-to-tl from-[#4f46e5]/10 via-[#312e81]/06 to-transparent blur-[80px] sm:blur-[140px] transform-gpu"
      />

      {/* 3. Subtle Architectural Developer Grid (Faded at Edges and Center Focus) */}
      <div
        className="absolute inset-0 opacity-[0.42] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,black_25%,transparent_82%)]"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Primary 48px square grid */}
            <pattern
              id="dev-grid-pattern"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="rgba(148, 163, 184, 0.05)"
                strokeWidth="1"
              />
            </pattern>

            {/* Micro intersection crosshairs every 96px */}
            <pattern
              id="dev-crosshairs-pattern"
              width="96"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              {/* Subtle 5px cross marker (+) at grid intersection */}
              <path
                d="M 46 48 H 50 M 48 46 V 50"
                fill="none"
                stroke="rgba(56, 189, 248, 0.16)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Grid base lines */}
          <rect width="100%" height="100%" fill="url(#dev-grid-pattern)" />
          {/* Grid crosshair accents */}
          <rect width="100%" height="100%" fill="url(#dev-crosshairs-pattern)" />
        </svg>
      </div>

      {/* 4. Minimal Architectural Horizon & Guide Lines */}
      {/* Delicate Horizon Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* Frame Guidelines (Desktop only, framing the main column with faint structural lines) */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden xl:block">
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* 5. Edge Vignette for Depth & Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,9,15,0.65)_100%)]" />
    </div>
  );
};

export default Background;
