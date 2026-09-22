import React from 'react';
import { Layers, Clock } from 'lucide-react';

/**
 * Universal Project Visual Placeholder
 *
 * Clean, minimal, content-agnostic developer placeholder shown for any project
 * where screenshots/cover images are pending or not yet uploaded.
 */
export const ProjectPlaceholder = ({
  title,
  subtitle = 'تصاویر پروژه پس از تکمیل و استقرار بارگذاری خواهند شد',
  badge = 'IN PROGRESS',
  accent = 'amber',
  className = '',
  compact = false,
}) => {
  const accentColors = {
    amber: {
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/10',
      text: 'text-[#f59e0b]',
      glow: 'rgba(245, 158, 11, 0.08)',
      badgeBg: 'bg-amber-500/15 text-[#fbbf24] border-amber-500/30',
    },
    cyan: {
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/10',
      text: 'text-[#38bdf8]',
      glow: 'rgba(56, 189, 248, 0.08)',
      badgeBg: 'bg-cyan-500/15 text-[#38bdf8] border-cyan-500/30',
    },
    emerald: {
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/10',
      text: 'text-[#34d399]',
      glow: 'rgba(52, 211, 153, 0.08)',
      badgeBg: 'bg-emerald-500/15 text-[#34d399] border-emerald-500/30',
    },
    indigo: {
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/10',
      text: 'text-[#818cf8]',
      glow: 'rgba(129, 140, 248, 0.08)',
      badgeBg: 'bg-indigo-500/15 text-[#818cf8] border-indigo-500/30',
    },
  };

  const currentAccent = accentColors[accent] || accentColors.amber;

  return (
    <div
      className={`w-full h-full relative overflow-hidden bg-[#090d16] flex flex-col items-center justify-center p-6 select-none ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${currentAccent.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Subtle Frame Corner Markers */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />

      {/* Center Content Group */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs gap-3">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${currentAccent.badgeBg}`}
        >
          <Clock className="w-3 h-3 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Minimal Central Icon Box */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${currentAccent.bg} border ${currentAccent.border} flex items-center justify-center ${currentAccent.text} shadow-inner transition-transform duration-300 group-hover/img:scale-110`}
        >
          <Layers className="w-6 h-6 sm:w-7 sm:h-7 opacity-90" />
        </div>

        {/* Headings */}
        <div className="flex flex-col gap-1">
          {title && (
            <h4 className="font-display font-bold text-sm sm:text-base text-[#dfe2ee] tracking-tight line-clamp-1">
              {title}
            </h4>
          )}
          <p className="font-sans text-[11px] sm:text-xs text-[#87929a] leading-relaxed">
            {compact ? 'تصاویر پروژه به‌زودی' : subtitle}
          </p>
        </div>

        {/* Monospace Code Indicator */}
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          ASSETS PENDING · 0% SHIFT
        </span>
      </div>
    </div>
  );
};
