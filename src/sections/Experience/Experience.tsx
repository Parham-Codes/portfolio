import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { experience } from '../../data/experience.js';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 flex flex-col gap-8">
      <SectionTitle
        eyebrow="Practical Experience"
        title="Front-End &amp; WordPress Development Work"
        description="Hands-on experience developing responsive React interfaces, customizing WordPress &amp; WooCommerce sites, and connecting REST APIs."
      />

      {/* Visual Timeline */}
      <div className="relative pl-8 sm:pl-10 flex flex-col gap-8 sm:gap-10 before:absolute before:left-[11px] sm:before:left-[13px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
        {experience.map((item, idx) => (
          <div key={idx} className="relative flex flex-col gap-2 group">
            {/* Timeline Node */}
            <div className="absolute -left-8 sm:-left-10 top-1 w-6 h-6 rounded-full bg-[#0b0f17] flex items-center justify-center border border-white/10 shadow-md">
              <div className={`w-2.5 h-2.5 rounded-full ${item.dotColor} ${idx === 0 ? 'animate-pulse' : ''}`} />
            </div>

            {/* Header / Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <h3 className="font-display text-base sm:text-xl font-bold text-[#dfe2ee] group-hover:text-[#38bdf8] transition-colors">
                {item.role}
              </h3>
              <span
                className={`font-mono text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full self-start sm:self-auto border border-white/10 ${item.badgeBg}`}
              >
                {item.period}
              </span>
            </div>

            {/* Focus Area */}
            <span className="font-mono text-xs sm:text-sm text-[#87929a]">
              {item.focusArea}
            </span>

            {/* Description */}
            <p className="font-sans text-xs sm:text-base text-[#bdc8d1] leading-relaxed pt-1 max-w-3xl">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-[#1c2028] text-[#bdc8d1] border border-white/[0.05]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
