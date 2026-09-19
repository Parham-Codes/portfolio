import React from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard.tsx';
import { projects } from '../../data/projects.js';

export const Projects: React.FC = () => {
  return (
    <section id="featured-projects" className="py-16 md:py-24 flex flex-col gap-10">
      <SectionTitle
        eyebrow="Portfolio &amp; Work"
        title="Featured Projects"
        description="Hands-on web applications focused on React, state management, e-commerce workflows, and API integration."
      />

      <div className="flex flex-col gap-8 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project as any} reversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};
