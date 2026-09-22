import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';
import { experience } from '../../data/experience.js';
import { smoothEase, defaultViewport, useIsMobile } from '../../utils/animations.jsx';

export const Experience = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: smoothEase,
      },
    },
  };

  return (
    <section id="experience" className="py-10 sm:py-14 flex flex-col gap-4 sm:gap-5 scroll-mt-24 sm:scroll-mt-28">
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <SectionTitle
          eyebrow="Experience"
          title="Development Experience"
          description="Practical experience developing responsive React interfaces, customizing WordPress &amp; WooCommerce sites, and connecting REST APIs."
        />
      </motion.div>

      {/* Visual Timeline - Compact */}
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion || isMobile ? false : "hidden"}
        whileInView={isMobile ? undefined : "visible"}
        viewport={defaultViewport}
        className="relative pl-6 sm:pl-8 flex flex-col gap-5 sm:gap-6 before:absolute before:left-[9px] sm:before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10"
      >
        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
