import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Layers, Github, ExternalLink } from 'lucide-react';
import { Button } from '../../components/Button/Button.jsx';
import { projects } from '../../data/projects.js';
import { smoothEase, defaultViewport, useIsMobile } from '../../utils/animations.jsx';

export const ProjectsCTA = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  // Take top 3 featured projects
  const displayProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="projects-cta" className="py-12 sm:py-16 flex flex-col gap-8">
      {/* Header */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#38bdf8] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Selected Projects
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#dfe2ee]">
          Projects I've Built
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed max-w-2xl">
          A few things I've built with React, modern JavaScript, and web technologies.
        </p>
      </motion.div>

      {/* 3 Simple Project Cards with Stagger */}
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion || isMobile ? false : "hidden"}
        whileInView={isMobile ? undefined : "visible"}
        viewport={defaultViewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch"
      >
        {displayProjects.map((project) => {
          const mainStacks = (project.technologies || []).slice(0, 4);

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl bg-[#181c24]/95 sm:bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-sm sm:backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors duration-300 shadow-xl group"
            >
              {/* Image on top */}
              <div className="w-full h-44 sm:h-48 overflow-hidden bg-[#121620] relative">
                <img
                  src={project.cardImage || project.image || `${import.meta.env.BASE_URL}images/placeholders/project-placeholder.svg`}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/placeholders/project-placeholder.svg`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c24] via-transparent to-transparent opacity-80" />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="font-display text-lg font-bold text-[#dfe2ee] group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Main Stacks Only */}
                <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                  {mainStacks.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#1c2028] text-[#8ed5ff] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub Repo + Live Demo if exists */}
              <div className="p-5 pt-0 flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#262a33] text-[#bdc8d1] hover:text-white hover:bg-[#31353e] font-mono text-xs transition-colors border border-white/5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#38bdf8]/15 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#00354a] font-mono text-xs font-semibold transition-all border border-[#38bdf8]/30"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Explore CTA Banner */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="rounded-2xl sm:rounded-3xl bg-[#181c24]/95 sm:bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-sm sm:backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#dfe2ee]">
            Want to see all projects and technical details?
          </h3>
          <p className="font-sans text-sm text-[#bdc8d1] leading-relaxed">
            Explore the complete gallery with architecture breakdowns, features, and repositories.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Button
            variant="secondary"
            size="md"
            to="/wordpress"
            className="w-full sm:w-auto"
          >
            WordPress Work
          </Button>
          <Button
            variant="primary"
            size="md"
            to="/projects"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Development Projects
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
