import React from 'react';
import { Hero } from '../../sections/Hero/Hero.jsx';
import { About } from '../../sections/About/About.jsx';
import { ProjectsCTA } from '../../sections/ProjectsCTA/ProjectsCTA.jsx';
import { Experience } from '../../sections/Experience/Experience.jsx';
import { Contact } from '../../sections/Contact/Contact.jsx';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProjectsCTA />
      <Experience />
      <Contact />
    </div>
  );
};
