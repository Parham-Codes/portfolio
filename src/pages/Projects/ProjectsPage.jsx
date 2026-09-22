import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  ArrowRight,
  Layers,
  Sparkles,
  Globe,
} from 'lucide-react';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard.jsx';
import { projects } from '../../data/projects.js';
import { smoothEase, defaultViewport } from '../../utils/animations.jsx';

export const ProjectsPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (!cats.includes(p.category)) {
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
        project.description.toLowerCase().includes(q) ||
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
      {/* Page Header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="flex flex-col gap-4 max-w-3xl"
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 font-mono text-xs text-[#38bdf8] font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Projects Showcase
            </span>
            <span className="font-mono text-xs text-[#56e5a9] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#56e5a9] animate-pulse" />
              {projects.length} Practical Projects
            </span>
          </div>

          <Link
            to="/wordpress"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-300 font-sans text-xs font-semibold transition-colors group"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>View WordPress Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dfe2ee] tracking-tight leading-tight">
          Projects &amp; Codebases
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
          Explore my key projects built with React, Redux Toolkit, and modern JavaScript, with clean architectures, e-commerce workflows, and REST API integration.
        </p>
      </motion.div>

      {/* Search & Filter Toolbar */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
        className="rounded-2xl bg-[#181c24]/80 border border-white/[0.08] p-4 sm:p-5 backdrop-blur-xl flex flex-col gap-4 shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Search Field */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#87929a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech (React, Redux, Node) or project name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0e16] border border-white/10 text-[#dfe2ee] placeholder:text-[#87929a] text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#87929a] hover:text-white px-1.5 py-0.5 rounded bg-white/10"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="font-mono text-xs text-[#87929a] shrink-0 self-start md:self-center">
            Showing <span className="text-[#38bdf8] font-bold">{filteredProjects.length}</span> of {projects.length} Projects
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#38bdf8] text-[#00354a] shadow-md shadow-[#38bdf8]/25'
                    : 'bg-[#1c2028] text-[#bdc8d1] hover:text-white hover:bg-[#262a33] border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-[#00354a]/20 text-[#00354a] font-bold' : 'bg-black/30 text-[#87929a]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-8 md:gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
          ))
        ) : (
          <div className="rounded-2xl bg-[#181c24]/40 border border-dashed border-white/15 p-12 text-center flex flex-col items-center justify-center gap-3">
            <Search className="w-8 h-8 text-[#87929a]" />
            <h3 className="font-display text-lg font-bold text-[#dfe2ee]">
              No projects found matching "{searchQuery}"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#87929a] max-w-md">
              Try searching for "React", "Redux", or "Node", or reset filters to see all projects.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#38bdf8] text-xs font-semibold font-sans transition-colors border border-white/10"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Bottom Conversion Prompt */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#181c24] via-[#1c2028] to-[#181c24] border border-white/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-4"
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">
            Have an opportunity or project?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] max-w-xl">
            Open to Front-End opportunities, freelance projects, and collaborative web development.
          </p>
        </div>
        <Link
          to="/#contact"
          className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#38bdf8] hover:bg-[#7bd0ff] text-[#00354a] font-sans text-sm font-bold shadow-lg shadow-[#38bdf8]/20 transition-all min-h-[44px]"
        >
          <span>Send Me a Message</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};
