import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';

export const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 flex flex-col gap-4 sm:gap-5">
      <SectionTitle
        eyebrow="About Me"
        title="Background &amp; Approach"
        description="Turning designs and ideas into responsive, maintainable web experiences with clean architecture and practical problem solving."
      />

      {/* Single Concise Professional Introduction */}
      <div className="rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col gap-4">
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed">
          I’m a <span className="text-[#38bdf8] font-semibold">Front-End Developer</span> focused on building responsive, performant, and user-friendly web applications. I turn complex requirements and design mockups into intuitive, clean interfaces that deliver seamless user experiences.
        </p>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed">
          My practical development experience spans single-page applications, custom WordPress &amp; WooCommerce websites, and interactive client portals. I care deeply about writing clean, maintainable code, organizing component hierarchies thoughtfully, and ensuring responsive layouts perform reliably across all screen sizes.
        </p>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#bdc8d1] leading-relaxed">
          Beyond front-end engineering, I regularly collaborate with RESTful APIs, manage application state, and integrate backend services—bringing an end-to-end perspective and strong attention to detail to every project I contribute to.
        </p>
      </div>
    </section>
  );
};

