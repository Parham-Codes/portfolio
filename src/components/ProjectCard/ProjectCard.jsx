import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Globe,
  BookOpen,
  Info,
  Check,
  Layers,
  Eye,
  Server,
  ArrowRight,
  Code2,
  Cpu,
  X,
} from 'lucide-react';
import { Button } from '../Button/Button.jsx';
import { cn } from '../../utils/cn.js';

export const ProjectCard = ({ project, reversed = false }) => {
  const [activeModal, setActiveModal] = useState(false);

  const accentStyleMap = {
    cyan: {
      badge: 'bg-[#38bdf8]/15 text-[#38bdf8] border-[#38bdf8]/30',
      titleHover: 'group-hover:text-[#38bdf8]',
      checkIcon: 'text-[#38bdf8]',
      btnVariant: 'primary',
      hudIconBg: 'bg-[#38bdf8]/20 text-[#38bdf8]',
      hudBadge: 'bg-[#38bdf8]/15 text-[#38bdf8] border-[#38bdf8]/30',
      headerDot: 'bg-[#38bdf8]',
    },
    indigo: {
      badge: 'bg-[#6366f1]/15 text-[#c0c1ff] border-[#6366f1]/30',
      titleHover: 'group-hover:text-[#c0c1ff]',
      checkIcon: 'text-[#c0c1ff]',
      btnVariant: 'indigo',
      hudIconBg: 'bg-[#6366f1]/30 text-[#c0c1ff]',
      hudBadge: 'bg-[#c0c1ff]/15 text-[#c0c1ff] border-[#c0c1ff]/30',
      headerDot: 'bg-[#6366f1]',
    },
    emerald: {
      badge: 'bg-[#10b981]/15 text-[#56e5a9] border-[#10b981]/30',
      titleHover: 'group-hover:text-[#56e5a9]',
      checkIcon: 'text-[#56e5a9]',
      btnVariant: 'emerald',
      hudIconBg: 'bg-[#10b981]/20 text-[#56e5a9]',
      hudBadge: 'bg-[#56e5a9]/15 text-[#56e5a9] border-[#56e5a9]/30',
      headerDot: 'bg-[#56e5a9]',
    },
  };

  const accentStyles = accentStyleMap[project.accent] || accentStyleMap.cyan;

  const getWindowIcon = () => {
    if (project.accent === 'indigo') return <Globe className="w-4 h-4 text-[#87929a]" />;
    if (project.accent === 'emerald') return <BookOpen className="w-4 h-4 text-[#87929a]" />;
    return <Terminal className="w-4 h-4 text-[#87929a]" />;
  };

  const hasRealLiveUrl = Boolean(
    project.liveUrl &&
      typeof project.liveUrl === 'string' &&
      project.liveUrl.trim().length > 0 &&
      project.liveUrl !== '#' &&
      project.liveUrl.startsWith('http')
  );

  // Prevent background scrolling when modal is active and allow ESC to close
  useEffect(() => {
    if (!activeModal) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    // Prevent layout shift from scrollbar disappearing
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  return (
    <>
      <div
        id={project.id}
        className={cn(
          'group rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl transform-gpu p-4 sm:p-7 md:p-8 lg:p-10 shadow-2xl flex flex-col gap-6 sm:gap-8 items-center transition-all duration-300 card-hover-glow',
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}
      >
        {/* Spec Overview Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 justify-between">
          {/* Category & Status Bar */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={cn(
                'px-5 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider border',
                accentStyles.badge
              )}
            >
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#87929a] flex items-center gap-1.5">
              <span>•</span>
              <span>{project.status}</span>
            </span>
          </div>

          {/* Title & Short Label */}
          <div className="flex flex-col gap-2">
            <h3
              className={cn(
                'font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#dfe2ee] transition-colors',
                accentStyles.titleHover
              )}
            >
              {project.title}
            </h3>

            {(project.shortLabel || project.shortTitle) && (
              <span className="font-mono text-xs sm:text-sm text-[#38bdf8] font-medium">
                {project.shortLabel || project.shortTitle}
              </span>
            )}

            {project.accuracyNote && (
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#121620] border border-amber-500/20 text-amber-300/90 font-mono text-[11px] leading-relaxed">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Technical Note:</strong> {project.accuracyNote}
                </span>
              </div>
            )}

            <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* 2-4 Concrete Features */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#1c2028]/80 border border-white/[0.06] flex flex-col gap-2">
            <span className="font-mono text-xs text-[#87929a] font-semibold uppercase tracking-wider">
              Key Features:
            </span>
            <ul className="flex flex-col gap-1.5 font-sans text-xs sm:text-sm text-[#bdc8d1]">
              {(project.features || project.keyWins).slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2
                    className={cn('w-4 h-4 shrink-0 mt-0.5', accentStyles.checkIcon)}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags (4-7 most relevant) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {(project.technologies || project.tags).slice(0, 7).map((tag, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#262a33]/70 text-[#dfe2ee] border border-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Focused Action Buttons (Priority: View Project -> Live Demo -> GitHub -> API Repository) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
            <Button
              variant={accentStyles.btnVariant}
              size="sm"
              icon={<Eye className="w-4 h-4" />}
              onClick={() => setActiveModal(true)}
              className="w-full sm:w-auto"
            >
              View Project
            </Button>
            {hasRealLiveUrl && (
              <Button
                variant="emerald"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                icon={<ExternalLink className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                icon={<Github className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                GitHub
              </Button>
            )}
            {project.apiRepoUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.apiRepoUrl}
                target="_blank"
                rel="noreferrer"
                icon={<Server className="w-4 h-4 text-[#38bdf8]" />}
                className="w-full sm:w-auto text-[#38bdf8] border-[#38bdf8]/30 hover:border-[#38bdf8]"
              >
                API Repository
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
            <span className="font-mono text-[11px] sm:text-xs text-[#87929a] truncate max-w-[170px] sm:max-w-none">
              {project.windowFile}
            </span>
            {getWindowIcon()}
          </div>

          {/* Graphic Container */}
          <div
            className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden group/img cursor-pointer"
            onClick={() => setActiveModal(true)}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* Dark vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16] via-[#0a0e16]/20 to-transparent" />

            {/* Overlay Info Card */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3.5 rounded-xl bg-[#0f131c]/95 border border-white/[0.1] backdrop-blur-md sm:backdrop-blur-xl shadow-xl flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div
                  className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                    accentStyles.hudIconBg
                  )}
                >
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display text-xs sm:text-sm font-bold text-white truncate">
                    {project.hudTitle}
                  </span>
                  <span className="font-mono text-[10px] text-[#87929a] truncate">
                    {project.hudSub}
                  </span>
                </div>
              </div>
              <span
                className={cn(
                  'font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0',
                  accentStyles.hudBadge
                )}
              >
                {project.hudBadge}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Preview — Rendered directly at document.body via Portal to guarantee it sits above header */}
      {activeModal &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveModal(false)}
          >
            {/* Modal Dialog Card */}
            <div
              className="relative w-full max-w-2xl max-h-[90vh] my-auto overflow-y-auto rounded-2xl bg-[#181c24] border border-white/20 p-5 sm:p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-4 sm:gap-5 text-left animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with explicit top-right Close (×) button */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse shrink-0" />
                  <h4
                    id={`modal-title-${project.id}`}
                    className="font-display text-lg sm:text-xl font-bold text-white truncate"
                  >
                    {project.name || project.title}
                  </h4>
                  {(project.shortLabel || project.shortTitle) && (
                    <span className="font-mono text-xs text-[#87929a] hidden sm:inline truncate">
                      ({project.shortLabel || project.shortTitle})
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-rose-500/20 text-gray-300 hover:text-rose-300 border border-white/15 hover:border-rose-500/40 flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-sm group"
                  aria-label="Close modal"
                  title="Close (ESC)"
                >
                  <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Image Preview */}
              <div className="rounded-xl overflow-hidden border border-white/10 max-h-52 sm:max-h-64">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>

            {/* Accuracy Note Banner */}
            {project.accuracyNote && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-[#121620] border border-amber-500/25 text-amber-300/90 font-mono text-xs leading-relaxed">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Technical Accuracy Note:</strong>{' '}
                  {project.accuracyNote}
                </span>
              </div>
            )}

            {/* 1. Overview */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#38bdf8]">
                1. Overview
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#bdc8d1] leading-relaxed whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Architecture Breakdown (ForTech and projects with architecture defined) */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-[#121620] border border-white/10 flex flex-col gap-2.5">
                <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#38bdf8] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  Application Architecture
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {project.architecture.frontend && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">Frontend: </span>
                      <span className="text-[#dfe2ee] font-semibold">{project.architecture.frontend}</span>
                    </div>
                  )}
                  {project.architecture.routing && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">Routing: </span>
                      <span className="text-[#dfe2ee] font-semibold">{project.architecture.routing}</span>
                    </div>
                  )}
                  {project.architecture.stateManagement && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">State: </span>
                      <span className="text-[#dfe2ee] font-semibold">{project.architecture.stateManagement}</span>
                    </div>
                  )}
                  {project.architecture.http && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">HTTP Client: </span>
                      <span className="text-[#dfe2ee] font-semibold">{project.architecture.http}</span>
                    </div>
                  )}
                  {project.architecture.ui && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">UI System: </span>
                      <span className="text-[#dfe2ee] font-semibold">{project.architecture.ui}</span>
                    </div>
                  )}
                  {project.architecture.apiData && (
                    <div className="p-2 rounded-lg bg-[#0a0e16] border border-white/5">
                      <span className="text-[#87929a]">API / Data: </span>
                      <span className="text-[#38bdf8] font-semibold">{project.architecture.apiData}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Dedicated ForTech Backend / API Companion Section */}
            {project.apiRepoUrl && (
              <div className="p-4 rounded-xl bg-[#121620] border border-[#38bdf8]/30 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#38bdf8] flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    API / Backend Repository
                  </span>
                  <a
                    href={project.apiRepoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-[#38bdf8] hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <span>View API Repository</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                <p className="font-sans text-xs text-[#bdc8d1] leading-relaxed">
                  JSON Server based API/data layer created as the backend companion for the ForTech React application. Provides REST-style mock endpoints and structured schemas in <code className="font-mono text-[11px] text-[#38bdf8] bg-[#0a0e16] px-1.5 py-0.5 rounded">db.json</code> for products, users, and orders during frontend development and testing.
                </p>
              </div>
            )}

            {/* 2. Main Features */}
            <div className="bg-[#0f131c] p-3.5 sm:p-4 rounded-xl border border-white/5 flex flex-col gap-2">
              <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">
                2. Main Features
              </span>
              {(project.features || project.keyWins).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                  <Check className="w-3.5 h-3.5 text-[#56e5a9] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* 3. Technical Highlights / Focus */}
            {(project.technicalFocus || project.keyWins) && (
              <div className="bg-[#0f131c] p-3.5 sm:p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">
                  3. Technical Focus &amp; Highlights
                </span>
                {(project.technicalFocus || project.keyWins).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Complete Technology Stack */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase font-bold tracking-wider text-[#87929a]">
                4. Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(project.technologies || project.tags).map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#dfe2ee] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveModal(false)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              {hasRealLiveUrl && (
                <Button
                  variant="emerald"
                  size="sm"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="w-full sm:w-auto font-bold"
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  icon={<Github className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  GitHub
                </Button>
              )}
              {project.apiRepoUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.apiRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  icon={<Server className="w-4 h-4 text-[#38bdf8]" />}
                  className="w-full sm:w-auto text-[#38bdf8] border-[#38bdf8]/30 hover:border-[#38bdf8]"
                >
                  API Repository
                </Button>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
