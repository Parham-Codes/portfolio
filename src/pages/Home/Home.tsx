import React from 'react';
import { Hero } from '../../sections/Hero/Hero.tsx';
import { About } from '../../sections/About/About.tsx';
import { Skills } from '../../sections/Skills/Skills.tsx';
import { ProjectsTeaser } from '../../sections/Projects/ProjectsTeaser.tsx';
import { Experience } from '../../sections/Experience/Experience.tsx';
import { Contact } from '../../sections/Contact/Contact.tsx';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <ProjectsTeaser />
      <Experience />
      <Contact />
    </div>
  );
};
