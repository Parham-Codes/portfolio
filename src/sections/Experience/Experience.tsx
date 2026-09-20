import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { experience } from '../../data/experience.js';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 flex flex-col gap-6 sm:gap-8">
      <SectionTitle
        eyebrow="Experience"
        title="Development Experience"
        description="Practical experience developing responsive React interfaces, customizing WordPress & WooCommerce sites, and connecting REST APIs."
      />

      {/* Visual Timeline - Compact */}
      <div className="relative pl-6 sm:pl-8 flex flex-col gap-5 sm:gap-6 before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col gap-2 group p-4 sm:p-5 rounded-xl bg-[#181c24]/60 hover:bg-[#181c24]/90 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
          >
            {/* Timeline Node */}
            <div className="absolute -left-9 sm:-left-11 top-4 w-5 h-5 rounded-full bg-[#0b0f17] flex items-center justify-center border border-white/10 shadow-sm">
              <div className={`w-2 h-2 rounded-full ${item.dotColor}`} />
            </div>

            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#dfe2ee]">
                {item.role}
              </h3>
              <span
                className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto border border-white/10 ${item.badgeBg}`}
              >
                {item.period}
              </span>
            </div>

            {/* Focus Area */}
            <span className="font-mono text-xs text-[#87929a]">
              {item.focusArea}
            </span>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#1c2028] text-[#87929a] border border-white/[0.05]"
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
