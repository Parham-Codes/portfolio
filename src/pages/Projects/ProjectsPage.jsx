import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  ArrowRight,
  Code2,
  Globe,
  Sparkles,
} from 'lucide-react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import { smoothEase, defaultViewport, useIsMobile } from '../../utils/animations.jsx';

/**
 * ProjectsPage (Development / Coding Projects)
 *
 * Part of the Unified Project Showcase System.
 * Shares structural layout, typography hierarchy, spacing, and interaction patterns
 * with WordPressPage, with content and cyan accents tailored to development projects.
 */
export const ProjectsPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  // Filter projects by search query and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        (project.description && project.description.toLowerCase().includes(q)) ||
        (project.shortLabel && project.shortLabel.toLowerCase().includes(q)) ||
        (project.technologies &&
          project.technologies.some((t) => t.toLowerCase().includes(q))) ||
        (project.features &&
          project.features.some((f) => f.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-8 sm:py-12 flex flex-col gap-10 sm:gap-14">
      {/* 1. Page Header (Unified Structure) */}
      <motion.header
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="flex flex-col gap-4 max-w-3xl"
      >
        {/* Eyebrow and Page Switcher */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#38bdf8]/12 border border-[#38bdf8]/25 font-mono text-xs text-[#38bdf8] font-bold flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              Development Showcase
            </span>
            <span className="font-mono text-xs text-[#87929a]">
              {projects.length} Projects
            </span>
          </div>

          <Link
            to="/wordpress"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-[#56e5a9] font-sans text-xs font-semibold transition-colors group"
          >
            <Globe className="w-3.5 h-3.5 text-[#56e5a9]" />
            <span>WordPress Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dfe2ee] tracking-tight leading-tight">
          Development Projects
        </h1>

        {/* Short Description */}
        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
          Web applications and software engineering projects built with React, modern JavaScript, modular state management, and REST APIs.
        </p>
      </motion.header>

      {/* 2. Project Controls (Streamlined, Minimal Filter Bar) */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.06, ease: smoothEase }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-2xl bg-[#141923]/80 sm:bg-[#141923]/60 border border-white/[0.07] backdrop-blur-sm sm:backdrop-blur-md"
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#87929a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech (React, Redux) or title..."
            className="w-full pl-10 pr-16 py-2 rounded-xl bg-[#090d16] border border-white/[0.08] text-[#dfe2ee] placeholder:text-[#87929a] text-xs sm:text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#87929a] hover:text-white px-1.5 py-0.5 rounded bg-white/10 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Result Counter */}
        <div className="font-mono text-xs text-[#87929a] shrink-0 px-2 flex items-center gap-1.5 self-end sm:self-center">
          <span>Showing</span>
          <span className="text-[#38bdf8] font-bold">{filteredProjects.length}</span>
          <span>of {projects.length}</span>
        </div>
      </motion.div>

      {/* 3. Project Showcase List */}
      <section className="flex flex-col gap-8 sm:gap-12" aria-label="Projects Showcase">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))
        ) : (
          <div className="rounded-2xl bg-[#141923]/40 border border-dashed border-white/15 p-12 text-center flex flex-col items-center justify-center gap-3">
            <Search className="w-8 h-8 text-[#87929a]" />
            <h3 className="font-display text-lg font-bold text-[#dfe2ee]">
              No development projects found matching "{searchQuery}"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#87929a] max-w-md">
              Try searching for "React", "Vite", or clear search query to browse all projects.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#1e2533] hover:bg-[#283244] text-[#38bdf8] text-xs font-semibold font-sans transition-colors border border-white/10 cursor-pointer"
            >
              Show All Projects
            </button>
          </div>
        )}
      </section>

      {/* 4. Bottom CTA (Unified Structure) */}
      <motion.footer
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#141923] via-[#19202c] to-[#141923] border border-white/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-4 shadow-xl"
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">
            Looking for a Front-End or Full-Stack Developer?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] max-w-xl">
            Open to software engineering opportunities, product development, and collaborative web projects.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            to="/wordpress"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#dfe2ee] hover:text-white font-sans text-sm font-semibold border border-white/10 transition-all min-h-[44px]"
          >
            <span>WordPress Projects</span>
            <ArrowRight className="w-4 h-4 text-[#56e5a9]" />
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#7bd0ff] text-[#00354a] font-sans text-sm font-bold shadow-lg shadow-[#38bdf8]/20 transition-all min-h-[44px]"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </motion.footer>
    </div>
  );
};

export default ProjectsPage;
