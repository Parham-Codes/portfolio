import React, { useState, lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ExternalLink,
  Github,
  Server,
  Layers,
  Globe,
  ArrowRight,
  Eye,
  Images,
} from 'lucide-react';
import { Button } from '../Button/Button.jsx';
import { cn } from '../../utils/cn.js';
import { smoothEase, defaultViewport } from '../../utils/animations.jsx';

// Lazy-load modal so it does not inflate the initial bundle or card renders
const ProjectDetailModal = lazy(() =>
  import('../ProjectDetailModal/ProjectDetailModal.jsx').then((m) => ({
    default: m.ProjectDetailModal,
  }))
);

/**
 * Unified ShowcaseCard Component
 *
 * Used across both Development (Coding) Projects and WordPress Projects.
 * Designed with a clean, editorial, uncluttered aesthetic:
 * Visual Priority: Screenshot → Project Name → Short Description → Technologies → Actions
 */
export const ShowcaseCard = ({
  project,
  type = 'code', // 'code' | 'wordpress'
  reversed = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const isWordPress = type === 'wordpress';

  // Accent styling mapping
  const accentKey = isWordPress ? 'emerald' : 'cyan';
  const theme = {
    cyan: {
      badge: 'bg-[#38bdf8]/12 text-[#38bdf8] border-[#38bdf8]/25',
      titleHover: 'group-hover:text-[#38bdf8]',
      primaryBtn: 'primary',
      activeBorder: 'hover:border-[#38bdf8]/40',
      iconAccent: 'text-[#38bdf8]',
    },
    emerald: {
      badge: 'bg-emerald-500/12 text-[#56e5a9] border-emerald-500/25',
      titleHover: 'group-hover:text-[#56e5a9]',
      primaryBtn: 'emerald',
      activeBorder: 'hover:border-emerald-500/40',
      iconAccent: 'text-[#56e5a9]',
    },
  }[accentKey];

  // Image source resolution
  const galleryImages = Array.isArray(project.gallery) && project.gallery.length > 0
    ? project.gallery
    : Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : [];

  const previewImage = project.image || project.coverImage || (galleryImages.length > 0 ? galleryImages[0] : null);
  const totalScreenshots = galleryImages.length;

  // Safe external URLs
  const hasLiveUrl = Boolean(
    project.liveUrl &&
      typeof project.liveUrl === 'string' &&
      project.liveUrl.trim().length > 0 &&
      project.liveUrl !== '#' &&
      project.liveUrl.startsWith('http')
  );

  const hasGitHubUrl = Boolean(
    project.githubUrl &&
      typeof project.githubUrl === 'string' &&
      project.githubUrl.trim().length > 0 &&
      project.githubUrl !== '#' &&
      project.githubUrl.startsWith('http')
  );

  const hasApiRepoUrl = Boolean(
    project.apiRepoUrl &&
      typeof project.apiRepoUrl === 'string' &&
      project.apiRepoUrl.trim().length > 0 &&
      project.apiRepoUrl !== '#' &&
      project.apiRepoUrl.startsWith('http')
  );

  // Filter 3-4 key technologies for the main card view
  const primaryTechnologies = (project.technologies || project.tags || []).slice(0, 4);

  const handleOpenDetails = (imgIndex = 0) => {
    setInitialImageIndex(imgIndex);
    setDetailsOpen(true);
  };

  return (
    <>
      <motion.article
        id={project.id}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className={cn(
          'group relative rounded-2xl sm:rounded-3xl bg-[#141923]/80 hover:bg-[#181f2c]/90 border border-white/[0.08] hover:border-white/[0.16] backdrop-blur-xl p-4 sm:p-7 md:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col gap-6 sm:gap-8 items-stretch lg:items-center card-hover-glow',
          theme.activeBorder,
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}
      >
        {/* 1. Large Visual Screenshot / Preview Column (50%) */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div
            onClick={() => handleOpenDetails(0)}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090d16] aspect-[16/10] group/img cursor-pointer shadow-lg transition-transform duration-300"
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt={project.title}
                loading="lazy"
                decoding="async"
                width="640"
                height="400"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#87929a] bg-[#0c111a]">
                <Layers className="w-8 h-8 opacity-40" />
                <span className="font-mono text-xs">Preview Pending</span>
              </div>
            )}

            {/* Subtle Gradient Shadow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/60 via-transparent to-transparent opacity-50 group-hover/img:opacity-30 transition-opacity" />

            {/* Multi-Screenshot Gallery Badge for WordPress or projects with multiple images */}
            {totalScreenshots > 1 && (
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0b0f17]/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-white/90 font-mono text-[11px] shadow-md pointer-events-none">
                <Images className="w-3.5 h-3.5 text-[#56e5a9]" />
                <span>{totalScreenshots} Screens</span>
              </div>
            )}

            {/* Hover Affordance Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="px-4 py-2 rounded-xl bg-white/15 border border-white/25 text-white font-sans text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                <Eye className="w-3.5 h-3.5" />
                <span>View Full Details</span>
              </span>
            </div>
          </div>
        </div>

        {/* 2. Editorial Information Column (50%) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 sm:gap-6">
          {/* Top Row: Category Pill & Status */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={cn(
                'px-3 py-1 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider border',
                theme.badge
              )}
            >
              {project.category}
            </span>

            {project.status && (
              <span className="font-mono text-xs text-[#87929a] flex items-center gap-1.5">
                <span className="opacity-60">•</span>
                <span>{project.status}</span>
              </span>
            )}
          </div>

          {/* Title & Short Tagline */}
          <div className="flex flex-col gap-1.5">
            <h3
              onClick={() => handleOpenDetails(0)}
              className={cn(
                'font-display text-2xl sm:text-3xl font-bold text-[#dfe2ee] transition-colors cursor-pointer leading-tight',
                theme.titleHover
              )}
            >
              {project.title}
            </h3>

            {(project.shortLabel || project.shortTitle) && (
              <p className="font-mono text-xs sm:text-sm text-[#87929a] font-normal">
                {project.shortLabel || project.shortTitle}
              </p>
            )}
          </div>

          {/* Short Description (2-3 lines max, comfortable line-height) */}
          <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Technologies Tags (Capped at 3 to 4 tags) */}
          {primaryTechnologies.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {primaryTechnologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-[#cbd5e1] border border-white/[0.06] transition-colors"
                >
                  {tech}
                </span>
              ))}
              {(project.technologies || project.tags || []).length > 4 && (
                <button
                  onClick={() => handleOpenDetails(0)}
                  className="font-mono text-[11px] text-[#87929a] hover:text-[#dfe2ee] transition-colors cursor-pointer py-1 px-1.5"
                >
                  +{(project.technologies || project.tags).length - 4} more
                </button>
              )}
            </div>
          )}

          {/* Action Buttons (Clean, prioritized, minimal) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {/* View Details Primary Trigger */}
            <Button
              variant={theme.primaryBtn}
              size="sm"
              onClick={() => handleOpenDetails(0)}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Details
            </Button>

            {/* Live Link (if real URL exists) */}
            {hasLiveUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                {isWordPress ? 'View Website' : 'Live Demo'}
              </Button>
            )}

            {/* WordPress Screenshots button (if multiple screenshots exist and live URL doesn't take all space) */}
            {isWordPress && totalScreenshots > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleOpenDetails(0)}
                icon={<Images className="w-4 h-4" />}
              >
                Screenshots
              </Button>
            )}

            {/* GitHub Link (if public repo exists) */}
            {hasGitHubUrl && (
              <Button
                variant="ghost"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-4 h-4" />}
              >
                GitHub
              </Button>
            )}

            {/* Companion API Repo (for Coding full-stack projects) */}
            {hasApiRepoUrl && (
              <Button
                variant="ghost"
                size="sm"
                href={project.apiRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Server className="w-4 h-4" />}
              >
                Backend API
              </Button>
            )}
          </div>
        </div>
      </motion.article>

      {/* Unified Project Details Modal - Rendered on demand */}
      {detailsOpen && (
        <Suspense fallback={null}>
          <ProjectDetailModal
            isOpen={detailsOpen}
            onClose={() => setDetailsOpen(false)}
            project={project}
            type={type}
            initialImageIndex={initialImageIndex}
          />
        </Suspense>
      )}
    </>
  );
};

export default ShowcaseCard;
