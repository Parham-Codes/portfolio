import React from 'react';
import {
  Terminal,
  Rocket,
  ArrowRight,
  Github,
  Linkedin,
  Code2,
  Globe,
  Database,
} from 'lucide-react';
import { Button } from '../../components/Button/Button.tsx';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-start gap-8 sm:gap-10">
      {/* Availability / Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2028]/80 border border-white/[0.08] shadow-sm backdrop-blur-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56e5a9] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#56e5a9]" />
        </span>
        <span className="font-mono text-xs font-semibold text-[#56e5a9] tracking-wider uppercase">
          OPEN TO FRONT-END OPPORTUNITIES &amp; FREELANCE PROJECTS
        </span>
      </div>

      {/* Main Headline & Supporting Paragraph (Clean Single-Column) */}
      <div className="flex flex-col gap-3.5 sm:gap-4 max-w-3xl">
        <p className="font-mono text-xs sm:text-sm text-[#38bdf8] uppercase tracking-wider sm:tracking-widest flex items-center gap-2">
          <Terminal className="w-4 h-4 shrink-0" />
          <span>FRONT-END &amp; WORDPRESS DEVELOPER</span>
        </p>

        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#dfe2ee] tracking-tight leading-[1.15] sm:leading-[1.1]">
          Hi, I'm Parham.{' '}
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#8ed5ff] to-[#c0c1ff] text-transparent bg-clip-text">
            I build modern, responsive web experiences.
          </span>
        </h1>

        <p className="font-sans text-[#bdc8d1] text-sm sm:text-lg max-w-2xl pt-1 leading-relaxed">
          React-focused Front-End Developer with hands-on experience building modern web interfaces, WordPress/WooCommerce websites, and REST-powered applications with Node.js and Express.
        </p>
      </div>

      {/* Action Buttons & Social Links */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full">
        <Button
          variant="primary"
          size="md"
          to="/projects"
          icon={<Rocket className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          View Projects
        </Button>
        <Button
          variant="secondary"
          size="md"
          href="#contact"
          icon={<ArrowRight className="w-4 h-4" />}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          Let's Work Together
        </Button>

        <div className="flex items-center gap-2.5 pt-1 sm:pt-0 sm:ml-auto">
          <a
            href="https://github.com/Parham-Codes"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial min-h-[42px] justify-center px-3.5 py-2 rounded-xl bg-[#181c24] border border-white/[0.06] text-[#bdc8d1] hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-colors flex items-center gap-2 font-mono text-xs"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/parham-taghikhani"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial min-h-[42px] justify-center px-3.5 py-2 rounded-xl bg-[#181c24] border border-white/[0.06] text-[#bdc8d1] hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-colors flex items-center gap-2 font-mono text-xs"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Compact Core Stack (3 Cards Only) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
        {/* Card 1: React & Front-End */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between gap-3 hover:border-[#38bdf8]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#38bdf8]">
            <Code2 className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">React &amp; Front-End</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            React · JavaScript · TypeScript · Redux Toolkit · Tailwind CSS · Vite
          </p>
        </div>

        {/* Card 2: WordPress & WooCommerce */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between gap-3 hover:border-[#c0c1ff]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#c0c1ff]">
            <Globe className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">WordPress &amp; WooCommerce</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            WordPress · WooCommerce · Elementor Pro · WoodMart · Astra · Custom CSS
          </p>
        </div>

        {/* Card 3: Backend */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between gap-3 hover:border-[#56e5a9]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#56e5a9]">
            <Database className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">Backend</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            Node.js · Express.js · MongoDB · REST APIs · JWT
          </p>
        </div>
      </div>
    </section>
  );
};
