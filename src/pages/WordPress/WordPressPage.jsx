import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Search,
  ArrowRight,
  Globe,
  Code2,
} from 'lucide-react';
import { WordPressProjectCard } from '../../components/WordPressProjectCard/WordPressProjectCard.jsx';
import { wordpressProjects } from '../../data/wordpressProjects.js';
import { smoothEase, defaultViewport, useIsMobile } from '../../utils/animations.jsx';

/**
 * WordPressPage (WordPress & Client Projects)
 *
 * Part of the Unified Project Showcase System.
 * Shares structural layout, typography hierarchy, spacing, and interaction patterns
 * with ProjectsPage, with content and emerald accents tailored to WordPress projects.
 */
export const WordPressPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
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
            <span className="px-3 py-1 rounded-full bg-emerald-500/12 border border-emerald-500/25 font-mono text-xs text-[#56e5a9] font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              WordPress Showcase
            </span>
            <span className="font-mono text-xs text-[#87929a]">
              {wordpressProjects.length} Projects
            </span>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/20 text-[#38bdf8] font-sans text-xs font-semibold transition-colors group"
          >
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Development Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dfe2ee] tracking-tight leading-tight">
          WordPress Projects
        </h1>

        {/* Short Description */}
        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
          Client websites, online stores, and digital experiences customized with WordPress, WooCommerce, Elementor Pro, and tailored RTL typography.
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
            placeholder="Search projects by tech (Elementor, WooCommerce) or title..."
            className="w-full pl-10 pr-16 py-2 rounded-xl bg-[#090d16] border border-white/[0.08] text-[#dfe2ee] placeholder:text-[#87929a] text-xs sm:text-sm focus:outline-none focus:border-[#56e5a9] focus:ring-1 focus:ring-[#56e5a9] transition-all"
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
          <span className="text-[#56e5a9] font-bold">{filteredProjects.length}</span>
          <span>of {wordpressProjects.length}</span>
        </div>
      </motion.div>

      {/* 3. Project Showcase List */}
      <section className="flex flex-col gap-8 sm:gap-12" aria-label="WordPress Projects Showcase">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <WordPressProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))
        ) : (
          <div className="rounded-2xl bg-[#141923]/40 border border-dashed border-white/15 p-12 text-center flex flex-col items-center justify-center gap-3">
            <Search className="w-8 h-8 text-[#87929a]" />
            <h3 className="font-display text-lg font-bold text-[#dfe2ee]">
              No WordPress projects found matching "{searchQuery}"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#87929a] max-w-md">
              Try searching for "WooCommerce", "Elementor", or clear search query to browse all client projects.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#1e2533] hover:bg-[#283244] text-[#56e5a9] text-xs font-semibold font-sans transition-colors border border-white/10 cursor-pointer"
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
            Need a Custom WordPress or WooCommerce Website?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] max-w-xl">
            Available for client projects, corporate websites, store setups, and custom plugin integration.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#dfe2ee] hover:text-white font-sans text-sm font-semibold border border-white/10 transition-all min-h-[44px]"
          >
            <span>Development Projects</span>
            <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#56e5a9] hover:bg-[#7ff3c0] text-[#003824] font-sans text-sm font-bold shadow-lg shadow-[#56e5a9]/20 transition-all min-h-[44px]"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </motion.footer>
    </div>
  );
};

export default WordPressPage;
