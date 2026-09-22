import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ExternalLink,
  CheckCircle2,
  Globe,
  Layers,
  Eye,
  Github,
  Image as ImageIcon,
  Layout,
  Sparkles,
} from 'lucide-react';
import { Button } from '../Button/Button.jsx';
import { WordPressLightbox } from '../WordPressLightbox/WordPressLightbox.jsx';
import { cn } from '../../utils/cn.js';
import { smoothEase, defaultViewport } from '../../utils/animations.jsx';

export const WordPressProjectCard = ({ project, reversed = false }) => {
  const shouldReduceMotion = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasRealLiveUrl = Boolean(
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

  // Support both gallery and images array conventions seamlessly
  const images = Array.isArray(project.gallery) && project.gallery.length > 0
    ? project.gallery
    : Array.isArray(project.images)
    ? project.images
    : [];
  const hasImages = images.length > 0;
  const primaryImage = project.image || project.coverImage || (hasImages ? images[0] : null);

  const openLightbox = (index = 0) => {
    if (!hasImages) return;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        id={project.id}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
        className={cn(
          'group rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu p-4 sm:p-7 md:p-8 lg:p-10 shadow-2xl flex flex-col gap-6 sm:gap-8 items-center transition-colors duration-300 card-hover-glow',
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}
      >
        {/* Spec Overview Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 justify-between">
          {/* Category & Status Bar */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-5 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider border bg-emerald-500/15 text-[#56e5a9] border-emerald-500/30 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#56e5a9]" />
              {project.category || 'WordPress Website'}
            </span>
            {project.status && (
              <span className="font-mono text-xs text-[#87929a] flex items-center gap-1.5">
                <span>•</span>
                <span>{project.status}</span>
              </span>
            )}
          </div>

          {/* Title & Short Label */}
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dfe2ee] transition-colors group-hover:text-[#56e5a9]">
              {project.title}
            </h3>

            {project.shortLabel && (
              <span className="font-mono text-xs sm:text-sm text-[#38bdf8] font-medium">
                {project.shortLabel}
              </span>
            )}

            <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Concrete Features & Implementation Highlights */}
          {Array.isArray(project.features) && project.features.length > 0 && (
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#1c2028]/80 border border-white/[0.06] flex flex-col gap-2">
              <span className="font-mono text-xs text-[#87929a] font-semibold uppercase tracking-wider">
                Key Deliverables &amp; Features:
              </span>
              <ul className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm text-[#bdc8d1]">
                {project.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#56e5a9]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Tags */}
          {Array.isArray(project.technologies) && project.technologies.length > 0 && (
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {project.technologies.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a33]/70 text-[#dfe2ee] border border-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons: Live Website, Inspect Screenshots, and optional GitHub */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
            {hasRealLiveUrl && (
              <Button
                variant="emerald"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold"
              >
                View Website
              </Button>
            )}

            {hasImages ? (
              <Button
                variant="primary"
                size="sm"
                icon={<Eye className="w-4 h-4" />}
                onClick={() => openLightbox(0)}
                className="w-full sm:w-auto"
              >
                Inspect Screenshots ({images.length})
              </Button>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#87929a] font-mono text-xs">
                <ImageIcon className="w-3.5 h-3.5 text-[#87929a]" />
                <span>Screenshots being prepared</span>
              </div>
            )}

            {hasGitHubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                GitHub
              </Button>
            )}
          </div>
        </div>

        {/* Showcase Visual Window Column */}
        <div className="w-full lg:w-1/2 flex flex-col rounded-xl overflow-hidden bg-[#0a0e16] border border-white/[0.08] shadow-2xl">
          {/* Window Header */}
          <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#1c2028] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/80" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/80" />
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-[#87929a] truncate max-w-[200px] sm:max-w-none">
              {project.windowFile || `${project.title} // WordPress & Elementor`}
            </span>
            <Globe className="w-4 h-4 text-[#87929a]" />
          </div>

          {/* Graphic / Screenshot Container */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden bg-[#0d121c] flex flex-col justify-between">
            {hasImages && primaryImage ? (
              <div
                className="relative w-full h-full group/img cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={primaryImage}
                  alt={`${project.title} Cover Screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                />
                {/* Dark vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/20 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-[#0f131c]/95 border border-white/[0.1] backdrop-blur-md shadow-xl flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-[#56e5a9] flex items-center justify-center shrink-0">
                      <ImageIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-display text-xs sm:text-sm font-bold text-white truncate">
                        {project.title}
                      </span>
                      <span className="font-mono text-[10px] text-[#87929a] truncate">
                        Click to view full screenshot gallery
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border bg-emerald-500/15 text-[#56e5a9] border-emerald-500/30 shrink-0">
                    {images.length} {images.length === 1 ? 'SCREENSHOT' : 'SCREENSHOTS'}
                  </span>
                </div>
              </div>
            ) : (
              /* Fallback / Pre-upload State */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Subtle decorative grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-3 max-w-xs">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1c2028] to-[#262a33] border border-white/10 flex items-center justify-center text-[#56e5a9] shadow-xl">
                    <Layout className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-base font-bold text-[#dfe2ee]">
                      {project.title}
                    </h4>
                    <p className="font-sans text-xs text-[#87929a] leading-relaxed">
                      Custom WordPress &amp; WooCommerce client architecture. Screenshot showcase ready for image upload.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>Client Production Build</span>
                  </div>
                </div>

                {/* Bottom Overlay Bar */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-[#0f131c]/95 border border-white/[0.08] backdrop-blur-md flex items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-md bg-[#38bdf8]/15 text-[#38bdf8] flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-xs text-[#bdc8d1] truncate">
                      {project.shortLabel || 'Custom WordPress Build'}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border bg-white/5 text-[#87929a] border-white/10 shrink-0">
                    CMS ARCHITECTURE
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Multiple Screenshots Quick Thumbnail Bar */}
          {hasImages && images.length > 1 && (
            <div className="px-3 py-2 bg-[#121620] border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="font-mono text-[10px] text-[#87929a] shrink-0 uppercase">
                Previews:
              </span>
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="w-10 h-7 rounded border border-white/20 hover:border-[#38bdf8] overflow-hidden shrink-0 transition-all cursor-pointer"
                  title={`View screenshot ${idx + 1}`}
                >
                  <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {hasImages && (
        <WordPressLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={images}
          initialIndex={lightboxIndex}
          title={project.title}
        />
      )}
    </>
  );
};
