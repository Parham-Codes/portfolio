import React from 'react';
import { ShowcaseCard } from '../ShowcaseCard/ShowcaseCard.jsx';

/**
 * WordPressProjectCard (WordPress & Client Projects)
 *
 * Employs the Unified Showcase Card architecture with type="wordpress".
 * Shares the identical visual language, spacing, and hierarchy with Development Projects:
 * Screenshot → Project Title → Description → Key Tech → Actions
 */
export const WordPressProjectCard = ({ project, reversed = false }) => {
  return (
    <ShowcaseCard
      project={project}
      type="wordpress"
      reversed={reversed}
    />
  );
};

export default WordPressProjectCard;
