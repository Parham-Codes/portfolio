import React from 'react';
import { ShowcaseCard } from '../ShowcaseCard/ShowcaseCard.jsx';

/**
 * ProjectCard (Development / Coding Projects)
 *
 * Employs the Unified Showcase Card architecture with type="code".
 * Features clean editorial hierarchy:
 * Screenshot → Project Title → Description → Key Tech → Actions
 */
export const ProjectCard = ({ project, reversed = false }) => {
  return (
    <ShowcaseCard
      project={project}
      type="code"
      reversed={reversed}
    />
  );
};

export default ProjectCard;
