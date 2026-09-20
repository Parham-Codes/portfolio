import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button/Button.tsx';

export const ProjectsCta: React.FC = () => {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="rounded-2xl bg-[#181c24]/80 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            Selected Projects
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#dfe2ee] tracking-tight">
            Projects I've Built
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
            A few things I've built with React, WordPress, and modern web technologies.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Button
            variant="primary"
            size="md"
            to="/projects"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full md:w-auto font-bold"
          >
            Explore My Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
