import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Globe,
  Code2,
} from 'lucide-react';
import { WordPressProjectCard } from '../../components/WordPressProjectCard/WordPressProjectCard.jsx';
import { wordpressProjects } from '../../data/wordpressProjects.js';
import { smoothEase, defaultViewport } from '../../utils/animations.jsx';

export const WordPressPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from wordpressProjects
  const categories = useMemo(() => {
    const cats = ['All'];
    wordpressProjects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  // Filter WordPress projects by query and category
  const filteredProjects = useMemo(() => {
    return wordpressProjects.filter((project) => {
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
      {/* Navigation link back to Coding Projects */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: smoothEase }}
        className="flex items-center justify-between"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-sans text-[#87929a] hover:text-[#38bdf8] transition-colors group px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/5"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#38bdf8]" />
          <span>Back to Coding Projects</span>
        </Link>

        <span className="font-mono text-xs text-[#87929a] hidden sm:inline-block">
          Independent Collection
        </span>
      </motion.div>

      {/* Page Header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="flex flex-col gap-4 max-w-3xl"
      >
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-[#56e5a9] font-bold flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            WordPress Showcase
          </span>
          <span className="font-mono text-xs text-[#56e5a9] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#56e5a9] animate-pulse" />
            {wordpressProjects.length} {wordpressProjects.length === 1 ? 'Client Project' : 'Client Projects'}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#38bdf8] font-semibold">
            Websites &amp; Client Work
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dfe2ee] tracking-tight leading-tight">
            WordPress &amp; WooCommerce Projects
          </h1>
        </div>

        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
          A dedicated collection of client websites, online stores, and digital experiences customized with WordPress, WooCommerce, Elementor Pro, and tailored RTL typography.
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
              placeholder="Search by tech (Elementor, WooCommerce) or site name..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0e16] border border-white/10 text-[#dfe2ee] placeholder:text-[#87929a] text-sm focus:outline-none focus:border-[#56e5a9] focus:ring-1 focus:ring-[#56e5a9] transition-all"
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

          {/* Quick Counter */}
          <div className="font-mono text-xs text-[#87929a] shrink-0 self-start md:self-center">
            Showing <span className="text-[#56e5a9] font-bold">{filteredProjects.length}</span> of {wordpressProjects.length} WordPress {wordpressProjects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>

        {/* Category Pills (if more than 1 category) */}
        {categories.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? wordpressProjects.length
                  : wordpressProjects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-sans text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#56e5a9] text-[#003824] shadow-md shadow-[#56e5a9]/25 font-bold'
                      : 'bg-[#1c2028] text-[#bdc8d1] hover:text-white hover:bg-[#262a33] border border-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-[#003824]/20 text-[#003824] font-bold' : 'bg-black/30 text-[#87929a]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* WordPress Projects List */}
      <div className="flex flex-col gap-8 md:gap-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <WordPressProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))
        ) : (
          <div className="rounded-2xl bg-[#181c24]/40 border border-dashed border-white/15 p-12 text-center flex flex-col items-center justify-center gap-3">
            <Search className="w-8 h-8 text-[#87929a]" />
            <h3 className="font-display text-lg font-bold text-[#dfe2ee]">
              No WordPress projects found matching "{searchQuery}"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#87929a] max-w-md">
              Try searching for "WooCommerce", "Elementor", or reset filters to see all client projects.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#56e5a9] text-xs font-semibold font-sans transition-colors border border-white/10 cursor-pointer"
            >
              Show All WordPress Projects
            </button>
          </div>
        )}
      </div>

      {/* Dual Explore CTA: Switch back to Coding Projects or Get in Touch */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#181c24] via-[#1c2028] to-[#181c24] border border-white/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left mt-4"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Code2 className="w-4 h-4 text-[#38bdf8]" />
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">
              Explore Coding Repositories
            </span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee]">
            Interested in React &amp; Front-End Codebases?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] max-w-xl">
            Check out my hands-on React 19, Redux Toolkit, and REST API applications with live demos and GitHub repositories.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#262a33] hover:bg-[#31353e] text-[#dfe2ee] hover:text-white font-sans text-sm font-semibold border border-white/10 transition-all min-h-[44px]"
          >
            <span>Coding Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#7bd0ff] text-[#00354a] font-sans text-sm font-bold shadow-lg shadow-[#38bdf8]/20 transition-all min-h-[44px]"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
