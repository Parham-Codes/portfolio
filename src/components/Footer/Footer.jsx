import React from 'react';
import { Terminal, Github, Send, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#0a0e16]/90 border-t border-white/[0.08] backdrop-blur-md mt-16 sm:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Brand & Subtitle & Status Badge */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#dfe2ee] font-display text-base font-bold">
            <span className="w-7 h-7 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </span>
            <span>
              Parham <span className="text-[#38bdf8]">Taghikhani</span>
            </span>
          </div>

          <span className="hidden sm:inline text-[#3e484f] font-mono">•</span>

          <div className="flex items-center gap-2.5">
            <span className="font-sans text-xs sm:text-sm text-[#87929a]">
              Front-End Developer
            </span>
            <span className="text-[#3e484f] font-mono">•</span>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 shadow-sm shadow-emerald-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-300 tracking-wide uppercase whitespace-nowrap">
                Open to Work
              </span>
            </div>
          </div>
        </div>

        {/* Links: GitHub, Telegram, Email, and Back-to-Top */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs text-[#bdc8d1]">
          <a
            href="https://github.com/Parham-Codes"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:text-[#38bdf8] hover:bg-white/[0.03] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-[#87929a]" />
            <span>GitHub</span>
          </a>
          <span className="text-[#3e484f] select-none">•</span>
          <a
            href="https://t.me/ItsParhamDev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:text-[#38bdf8] hover:bg-white/[0.03] transition-colors"
            aria-label="Telegram Profile"
          >
            <Send className="w-4 h-4 text-[#87929a]" />
            <span>Telegram</span>
          </a>
          <span className="text-[#3e484f] select-none">•</span>
          <a
            href="mailto:parhamtaghikhani.31@gmail.com"
            className="flex items-center gap-1.5 py-1.5 px-2 rounded-lg hover:text-[#38bdf8] hover:bg-white/[0.03] transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 text-[#87929a]" />
            <span>Email</span>
          </a>
          <span className="hidden sm:inline text-[#3e484f] select-none">•</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-[#1c2028] hover:bg-[#38bdf8] text-[#bdc8d1] hover:text-[#00354a] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#38bdf8] hover:scale-105 active:scale-95 cursor-pointer ml-0.5 sm:ml-1 shadow-sm shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Developer Credit Line */}
      <div className="border-t border-white/[0.04] py-4 px-4 text-center">
        <p className="font-mono text-[11px] sm:text-xs text-[#87929a]/70 tracking-wide">
          Designed &amp; Built by{' '}
          <a
            href="https://github.com/Parham-Codes"
            target="_blank"
            rel="noreferrer"
            className="text-[#dfe2ee] hover:text-[#38bdf8] font-medium transition-colors underline-offset-4 hover:underline"
          >
            Parham Taghikhani
          </a>{' '}
          &copy; 2026
        </p>
      </div>
    </footer>
  );
};
