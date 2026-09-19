import React from 'react';
import {
  Terminal,
  Rocket,
  FileText,
  Github,
  Send,
  Code2,
  Globe,
  Database,
  Layers,
} from 'lucide-react';
import { Button } from '../../components/Button/Button.tsx';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-16 md:pb-24 flex flex-col items-start gap-8">
      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2028]/80 border border-white/[0.08] shadow-sm backdrop-blur-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56e5a9] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#56e5a9]" />
        </span>
        <span className="font-mono text-xs font-semibold text-[#56e5a9] tracking-wider uppercase">
          OPEN TO FRONT-END OPPORTUNITIES &amp; FREELANCE PROJECTS
        </span>
      </div>

      {/* Main Catchphrase & Typography Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end w-full">
        <div className="lg:col-span-8 flex flex-col gap-3.5 sm:gap-4">
          <p className="font-mono text-xs sm:text-sm text-[#38bdf8] uppercase tracking-wider sm:tracking-widest flex items-center gap-2">
            <Terminal className="w-4 h-4 shrink-0" />
            <span>FRONT-END &amp; WORDPRESS DEVELOPER</span>
          </p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#dfe2ee] tracking-tight leading-[1.12] sm:leading-[1.08]">
            Hi, I'm Parham.{' '}
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#8ed5ff] to-[#c0c1ff] text-transparent bg-clip-text">
              I build modern, responsive web experiences.
            </span>
          </h1>
          <p className="font-sans text-[#bdc8d1] text-sm sm:text-lg max-w-2xl pt-1 sm:pt-2 leading-relaxed">
            React-focused Front-End Developer with hands-on experience building modern web interfaces, WordPress/WooCommerce websites, and REST-powered applications with Node.js and Express.
          </p>
        </div>

        {/* Hero Quick Summary Badge */}
        <div className="lg:col-span-4 w-full">
          <div className="rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl p-4 sm:p-5 shadow-2xl flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-[#87929a]">CAPABILITIES</span>
            </div>
            <div className="font-mono text-xs sm:text-[13px] text-[#dfe2ee] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[#87929a]">CORE:</span>
                <span className="text-[#38bdf8] font-semibold">React + JavaScript</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#87929a]">STATE:</span>
                <span className="text-[#38bdf8] font-semibold">Redux Toolkit</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#87929a]">CMS / E-COMMERCE:</span>
                <span className="text-[#c0c1ff] font-semibold">WordPress + WooCommerce</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#87929a]">BACKEND:</span>
                <span className="text-[#56e5a9] font-semibold">Node.js + Express + MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons & Quick Anchors */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-2 w-full">
        <Button
          variant="primary"
          size="md"
          to="/projects"
          icon={<Rocket className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          View My Projects
        </Button>
        <Button
          variant="secondary"
          size="md"
          href="#contact"
          icon={<FileText className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Let's Work Together
        </Button>

        <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto pt-1 sm:pt-0">
          <a
            href="https://github.com/Parham-Codes"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial min-h-[44px] justify-center px-3.5 py-2 rounded-xl bg-[#181c24] border border-white/[0.06] text-[#bdc8d1] hover:text-[#38bdf8] transition-colors flex items-center gap-2 font-mono text-xs"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://t.me/ParhamTGK"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial min-h-[44px] justify-center px-3.5 py-2 rounded-xl bg-[#181c24] border border-white/[0.06] text-[#bdc8d1] hover:text-[#38bdf8] transition-colors flex items-center gap-2 font-mono text-xs"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Practical Capability Strip */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4">
        {/* Metric 1 */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-[#38bdf8]/30 transition-all">
          <span className="font-mono text-[11px] sm:text-xs text-[#87929a] uppercase tracking-wider flex items-center gap-1.5 truncate">
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
            <span>Primary Focus</span>
          </span>
          <div className="pt-2 sm:pt-3 flex flex-col gap-0.5">
            <span className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">React &amp; Front-End</span>
            <span className="font-sans text-xs text-[#bdc8d1] pt-1">
              Component structure, responsive UI, hooks, and clean client-side routing
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-[#c0c1ff]/30 transition-all">
          <span className="font-mono text-[11px] sm:text-xs text-[#87929a] uppercase tracking-wider flex items-center gap-1.5 truncate">
            <Globe className="w-3.5 h-3.5 text-[#c0c1ff] shrink-0" />
            <span>CMS &amp; E-Commerce</span>
          </span>
          <div className="pt-2 sm:pt-3 flex flex-col gap-0.5">
            <span className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">WordPress &amp; Woo</span>
            <span className="font-sans text-xs text-[#bdc8d1] pt-1">
              Elementor Pro, custom CSS, WoodMart, Astra, and practical PHP hooks
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-[#38bdf8]/30 transition-all">
          <span className="font-mono text-[11px] sm:text-xs text-[#87929a] uppercase tracking-wider flex items-center gap-1.5 truncate">
            <Layers className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
            <span>State &amp; APIs</span>
          </span>
          <div className="pt-2 sm:pt-3 flex flex-col gap-0.5">
            <span className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">Redux Toolkit</span>
            <span className="font-sans text-xs text-[#bdc8d1] pt-1">
              Predictable state management, Axios integrations, and async data flows
            </span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-[#56e5a9]/30 transition-all">
          <span className="font-mono text-[11px] sm:text-xs text-[#87929a] uppercase tracking-wider flex items-center gap-1.5 truncate">
            <Database className="w-3.5 h-3.5 text-[#56e5a9] shrink-0" />
            <span>Growing Area</span>
          </span>
          <div className="pt-2 sm:pt-3 flex flex-col gap-0.5">
            <span className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">Node.js &amp; Express</span>
            <span className="font-sans text-xs text-[#bdc8d1] pt-1">
              RESTful APIs, MongoDB/Mongoose, JWT auth, and HTTP-only cookies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
