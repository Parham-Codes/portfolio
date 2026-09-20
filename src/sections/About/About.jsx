import React from 'react';
import {
  Code2,
  Globe,
  Database,
  Layers,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 flex flex-col gap-8">
      <SectionTitle
        eyebrow="About Me"
        title="Background &amp; Development Approach"
        description="Turning designs and ideas into responsive, maintainable interfaces with clean component structure and practical state management."
      />

      {/* Main Narrative Paragraph */}
      <div className="rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 shadow-xl">
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed">
          I’m a <span className="text-[#38bdf8] font-semibold">Front-End Developer</span> focused on React and modern web interfaces. I enjoy turning ideas and designs into responsive, maintainable interfaces with clean component structure and practical state management.
        </p>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed pt-3">
          Alongside React, I have hands-on experience building and customizing <span className="text-[#c0c1ff] font-semibold">WordPress and WooCommerce</span> websites, especially with Elementor Pro, custom CSS, theme-level customization, and practical PHP hooks.
        </p>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed pt-3">
          I also work with <span className="text-[#56e5a9] font-semibold">Node.js, Express and MongoDB</span> to build and connect REST APIs, authentication flows and backend functionality.
        </p>
      </div>

      {/* 3 Major Theme Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* CARD 1: React & Front-End (Visually dominant - Col 5) */}
        <div className="md:col-span-5 rounded-2xl bg-[#181c24]/90 border border-[#38bdf8]/30 backdrop-blur-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/20 flex flex-col justify-between relative overflow-hidden group card-hover-glow">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex flex-col gap-4 z-10">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#262a33] border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] shadow-inner group-hover:rotate-6 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30">
                Primary Focus
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee] group-hover:text-[#38bdf8] transition-colors">
              React &amp; Front-End
            </h3>
            <p className="font-sans text-sm text-[#bdc8d1] leading-relaxed">
              Building responsive interfaces with React, reusable components, React Router, Redux Toolkit and modern JavaScript.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06] z-10">
            {['React', 'React Router', 'Redux Toolkit', 'JavaScript ES6+', 'Tailwind CSS', 'Vite'].map((t, idx) => (
              <span key={idx} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#1c2028] text-[#38bdf8] border border-white/[0.05] hover:border-[#38bdf8]/30 hover:bg-[#202530] transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CARD 2: WordPress & WooCommerce (Col 4) */}
        <div className="md:col-span-4 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between relative overflow-hidden group card-hover-glow">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex flex-col gap-4 z-10">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#262a33] border border-[#c0c1ff]/30 flex items-center justify-center text-[#c0c1ff] shadow-inner group-hover:rotate-6 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#c0c1ff]/15 text-[#c0c1ff] border border-[#c0c1ff]/30">
                Practical Experience
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee] group-hover:text-[#c0c1ff] transition-colors">
              WordPress &amp; WooCommerce
            </h3>
            <p className="font-sans text-sm text-[#bdc8d1] leading-relaxed">
              Hands-on experience with Elementor Pro, WooCommerce, WoodMart, Astra, LearnDash, ACF, custom CSS and practical WordPress customization.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06] z-10">
            {['Elementor Pro', 'Custom CSS', 'WooCommerce', 'WoodMart', 'LearnDash', 'PHP Hooks'].map((t, idx) => (
              <span key={idx} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#1c2028] text-[#c0c1ff] border border-white/[0.05] hover:border-[#c0c1ff]/30 hover:bg-[#202530] transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CARD 3: Backend Foundations (Col 3) */}
        <div className="md:col-span-3 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between relative overflow-hidden group card-hover-glow">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#56e5a9]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="flex flex-col gap-4 z-10">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-[#262a33] border border-[#56e5a9]/30 flex items-center justify-center text-[#56e5a9] shadow-inner group-hover:rotate-6 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-[#56e5a9]/15 text-[#56e5a9] border border-[#56e5a9]/30">
                Foundations
              </span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#dfe2ee] group-hover:text-[#56e5a9] transition-colors">
              Backend Foundations
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
              Building REST APIs with Node.js and Express, working with MongoDB/Mongoose and implementing JWT-based authentication, cookies and role-based access.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06] z-10">
            {['Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'].map((t, idx) => (
              <span key={idx} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#1c2028] text-[#56e5a9] border border-white/[0.05] hover:border-[#56e5a9]/30 hover:bg-[#202530] transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
