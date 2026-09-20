import React from 'react';
import { Hero } from '../../sections/Hero/Hero.tsx';
import { ProjectsCta } from '../../sections/Projects/ProjectsCta.tsx';
import { Experience } from '../../sections/Experience/Experience.tsx';
import { Contact } from '../../sections/Contact/Contact.tsx';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProjectsCta />
      <Experience />
      <Contact />
    </div>
  );
};
