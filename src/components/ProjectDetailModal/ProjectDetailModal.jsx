import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Layers,
  Globe,
  Info,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '../Button/Button.jsx';
import { cn } from '../../utils/cn.js';
import { smoothEase } from '../../utils/animations.jsx';

/**
 * Unified ProjectDetailModal
 *
 * Provides a rich, comprehensive detailed view for both Coding and WordPress projects.
 * Houses in-depth case study info, architecture breakdown, full technology stacks,
 * technical notes, and screenshot galleries while keeping the main cards clean.
 */
export const ProjectDetailModal = ({
  isOpen,
  onClose,
  project,
  type = 'code', // 'code' | 'wordpress'
  initialImageIndex = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isWordPress = type === 'wordpress';

  // Accent styling based on project type or project accent
  const accentColor = isWordPress ? 'emerald' : 'cyan';
  const themeStyles = {
    cyan: {
      badge: 'bg-[#38bdf8]/15 text-[#38bdf8] border-[#38bdf8]/30',
      textAccent: 'text-[#38bdf8]',
      borderAccent: 'border-[#38bdf8]/30',
      btnVariant: 'primary',
      activeThumb: 'ring-2 ring-[#38bdf8] border-transparent',
      checkIcon: 'text-[#38bdf8]',
    },
    emerald: {
      badge: 'bg-emerald-500/15 text-[#56e5a9] border-emerald-500/30',
      textAccent: 'text-[#56e5a9]',
      borderAccent: 'border-emerald-500/30',
      btnVariant: 'emerald',
      activeThumb: 'ring-2 ring-[#56e5a9] border-transparent',
      checkIcon: 'text-[#56e5a9]',
    },
  }[accentColor];

  // Image handling
  const images = Array.isArray(project?.gallery) && project.gallery.length > 0
    ? project.gallery
    : Array.isArray(project?.images) && project.images.length > 0
    ? project.images
    : project?.image
    ? [project.image]
    : [];

  const [activeImageIndex, setActiveImageIndex] = useState(initialImageIndex);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(Math.max(0, Math.min(initialImageIndex, Math.max(0, images.length - 1))));
    }
  }, [isOpen, initialImageIndex, images.length]);

  // Keyboard navigation & scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (images.length > 1) {
        if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen || !project) return null;

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

  const activeImage = images[activeImageIndex] || project.image;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#05080e]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#0f141f] border border-white/[0.1] shadow-2xl shadow-black/80 overflow-hidden z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 sm:py-5 border-b border-white/[0.08] bg-[#141a26]/90 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2.5 flex-wrap min-w-0">
                <span
                  className={cn(
                    'px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider border',
                    themeStyles.badge
                  )}
                >
                  {project.category}
                </span>
                {project.status && (
                  <span className="font-mono text-xs text-[#87929a] hidden sm:inline-flex items-center gap-1.5">
                    <span>•</span>
                    <span>{project.status}</span>
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-[#87929a] hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer border border-white/[0.06]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-8 scrollbar-thin scrollbar-thumb-white/10">
              {/* Title & Short Tagline */}
              <div className="flex flex-col gap-1.5">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#dfe2ee] tracking-tight">
                  {project.title}
                </h2>
                {(project.shortLabel || project.shortTitle) && (
                  <p className={cn('font-mono text-xs sm:text-sm font-medium', themeStyles.textAccent)}>
                    {project.shortLabel || project.shortTitle}
                  </p>
                )}
              </div>

              {/* Screenshot / Gallery Viewer */}
              {activeImage && (
                <div className="flex flex-col gap-3">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#070a12] aspect-[16/10] max-h-[460px] group shadow-inner">
                    <img
                      src={activeImage}
                      alt={project.title}
                      decoding="async"
                      width="800"
                      height="500"
                      className="w-full h-full object-cover object-top transition-transform duration-500"
                    />

                    {/* Image navigation buttons if multiple screenshots */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === 0 ? images.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/10 opacity-80 hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === images.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/10 opacity-80 hover:opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image index counter */}
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#dfe2ee]">
                          {activeImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Row if multiple images */}
                  {images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={cn(
                            'relative w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer',
                            activeImageIndex === idx
                              ? themeStyles.activeThumb
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          )}
                        >
                          <img
                            src={img}
                            alt={`${project.title} thumb ${idx + 1}`}
                            loading="lazy"
                            decoding="async"
                            width="80"
                            height="50"
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Action Links Bar */}
              {(hasLiveUrl || hasGitHubUrl || hasApiRepoUrl) && (
                <div className="flex flex-wrap items-center gap-3 pt-1 pb-2 border-b border-white/[0.06]">
                  {hasLiveUrl && (
                    <Button
                      variant={themeStyles.btnVariant}
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      {isWordPress ? 'View Live Website' : 'Live Application'}
                    </Button>
                  )}

                  {hasGitHubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Github className="w-4 h-4" />}
                    >
                      GitHub Repository
                    </Button>
                  )}

                  {hasApiRepoUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.apiRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Server className="w-4 h-4" />}
                    >
                      API Repository
                    </Button>
                  )}
                </div>
              )}

              {/* Technical Note / Accuracy Note Callout (if any) */}
              {project.accuracyNote && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#131926] border border-amber-500/20 text-amber-200/90 font-mono text-xs leading-relaxed">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 font-bold block mb-0.5">Scope &amp; Architecture Note:</strong>
                    <span>{project.accuracyNote}</span>
                  </div>
                </div>
              )}

              {/* Overview & Full Description */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-mono text-xs font-bold text-[#87929a] uppercase tracking-wider">
                  Project Overview
                </h4>
                <div className="font-sans text-sm sm:text-base text-[#dfe2ee] leading-relaxed space-y-3 whitespace-pre-line">
                  {project.fullDescription || project.description}
                </div>
              </div>

              {/* Key Features & Deliverables */}
              {Array.isArray(project.features) && project.features.length > 0 && (
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs font-bold text-[#87929a] uppercase tracking-wider">
                    {isWordPress ? 'Key Deliverables & Customizations' : 'Key Features & Capabilities'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                      >
                        <CheckCircle2 className={cn('w-4 h-4 shrink-0 mt-0.5', themeStyles.checkIcon)} />
                        <span className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Breakdown (for Coding) OR Implementation Focus (for WordPress) */}
              {project.architecture ? (
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs font-bold text-[#87929a] uppercase tracking-wider">
                    System Architecture
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div
                        key={key}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-1"
                      >
                        <span className="font-mono text-[10px] text-[#87929a] uppercase tracking-wider">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="font-sans text-xs sm:text-sm font-semibold text-[#dfe2ee]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : Array.isArray(project.technicalFocus) && project.technicalFocus.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs font-bold text-[#87929a] uppercase tracking-wider">
                    Technical Implementation Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.technicalFocus.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2"
                      >
                        <span className={cn('w-1.5 h-1.5 rounded-full', isWordPress ? 'bg-[#56e5a9]' : 'bg-[#38bdf8]')} />
                        <span className="font-sans text-xs sm:text-sm text-[#bdc8d1]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Full Technology Stack */}
              {Array.isArray(project.technologies || project.tags) && (
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-mono text-xs font-bold text-[#87929a] uppercase tracking-wider">
                    Technologies, Libraries &amp; Tools
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {(project.technologies || project.tags).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#181e2b] border border-white/[0.06] font-mono text-xs text-[#dfe2ee]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-white/[0.08] bg-[#141a26]/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
              <span className="font-mono text-xs text-[#87929a]">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd> to exit
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white font-sans transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectDetailModal;
