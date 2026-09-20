import React from 'react';
import { Terminal, Github, Send, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#0a0e16]/90 border-t border-white/[0.08] backdrop-blur-md mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#dfe2ee] font-display text-base font-bold">
            <span className="w-7 h-7 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center">
              <Terminal className="w-4 h-4" />
            </span>
            <span>
              Parham<span className="text-[#38bdf8]">.dev</span>
            </span>
          </div>
          <span className="hidden sm:inline text-[#3e484f] font-mono">•</span>
          <span className="font-sans text-xs sm:text-sm text-[#87929a]">
            Front-End Developer | React & Modern Web
          </span>
        </div>

        {/* Links: GitHub & Telegram */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#bdc8d1]">
          <a
            href="https://github.com/Parham-Codes"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-[#87929a]" />
            <span>GitHub</span>
          </a>
          <span className="text-[#3e484f]">•</span>
          <a
            href="https://t.me/ParhamTGK"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#38bdf8] transition-colors"
            aria-label="Telegram Profile"
          >
            <Send className="w-4 h-4 text-[#87929a]" />
            <span>Telegram</span>
          </a>
          <span className="text-[#3e484f]">•</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-[#1c2028] hover:bg-[#38bdf8] text-[#bdc8d1] hover:text-[#00354a] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#38bdf8] hover:scale-110 active:scale-95 cursor-pointer ml-1 shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
