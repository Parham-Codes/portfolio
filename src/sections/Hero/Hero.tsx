import React from 'react';
import {
  Terminal,
  Rocket,
  ArrowRight,
  Github,
  Send,
  Code2,
  Globe,
  Database,
} from 'lucide-react';
import { Button } from '../../components/Button/Button.tsx';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-start gap-8 sm:gap-10">
      {/* Availability / Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2028]/80 border border-white/[0.08] shadow-sm backdrop-blur-sm sm:backdrop-blur-xl">
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
            href="https://t.me/ItsParhamDev"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial min-h-[42px] justify-center px-3.5 py-2 rounded-xl bg-[#181c24] border border-white/[0.06] text-[#bdc8d1] hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-colors flex items-center gap-2 font-mono text-xs"
            aria-label="Telegram Profile"
          >
            <Send className="w-4 h-4" />
            <span>Telegram</span>
          </a>
        </div>
      </div>

      {/* Compact Core Stack (3 Cards Only) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
        {/* Card 1: React & Front-End */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu flex flex-col justify-between gap-3 hover:border-[#38bdf8]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#38bdf8]">
            <Code2 className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">React &amp; Front-End</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            React · JavaScript · TypeScript · Redux Toolkit · Tailwind CSS · Vite
          </p>
        </div>

        {/* Card 2: WordPress & WooCommerce */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu flex flex-col justify-between gap-3 hover:border-[#c0c1ff]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#c0c1ff]">
            <Globe className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">WordPress &amp; WooCommerce</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            WordPress · WooCommerce · Elementor Pro · Custom CSS · PHP Hooks
          </p>
        </div>

        {/* Card 3: Backend */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu flex flex-col justify-between gap-3 hover:border-[#56e5a9]/30 transition-colors">
          <div className="flex items-center gap-2 text-[#56e5a9]">
            <Database className="w-4 h-4 shrink-0" />
            <span className="font-display text-base font-bold text-[#dfe2ee]">Backend</span>
          </div>
          <p className="font-mono text-xs text-[#87929a] leading-relaxed">
            Node.js · Express.js · MongoDB · REST APIs · JWT
          </p>
        </div>
      </div>

      {/* My Stack Full-Width Card */}
      <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu flex flex-col gap-3 sm:gap-3.5">
        <h3 className="font-display text-base sm:text-lg font-bold text-[#dfe2ee] tracking-tight">
          My Stack
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* 1. React */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#121620]/60 border border-white/[0.06] hover:border-[#58c4dc]/35 hover:bg-[#121620]/90 transition-all duration-200 flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#58c4dc]/10 border border-[#58c4dc]/20 flex items-center justify-center shrink-0 text-[#58c4dc] group-hover:scale-105 transition-transform">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
              </svg>
            </div>
            <span className="font-display text-sm sm:text-base font-semibold text-[#dfe2ee] group-hover:text-white transition-colors">
              React
            </span>
          </div>

          {/* 2. Node.js */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#121620]/60 border border-white/[0.06] hover:border-[#539e43]/35 hover:bg-[#121620]/90 transition-all duration-200 flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#539e43]/10 border border-[#539e43]/20 flex items-center justify-center shrink-0 text-[#539e43] group-hover:scale-105 transition-transform">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
              </svg>
            </div>
            <span className="font-display text-sm sm:text-base font-semibold text-[#dfe2ee] group-hover:text-white transition-colors">
              Node.js
            </span>
          </div>

          {/* 3. Next.js */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#121620]/60 border border-white/[0.06] hover:border-white/30 hover:bg-[#121620]/90 transition-all duration-200 flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
              </svg>
            </div>
            <span className="font-display text-sm sm:text-base font-semibold text-[#dfe2ee] group-hover:text-white transition-colors">
              Next.js
            </span>
          </div>

          {/* 4. MongoDB */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#121620]/60 border border-white/[0.06] hover:border-[#13aa52]/35 hover:bg-[#121620]/90 transition-all duration-200 flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#13aa52]/10 border border-[#13aa52]/20 flex items-center justify-center shrink-0 text-[#13aa52] group-hover:scale-105 transition-transform">
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
              </svg>
            </div>
            <span className="font-display text-sm sm:text-base font-semibold text-[#dfe2ee] group-hover:text-white transition-colors">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
