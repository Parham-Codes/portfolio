import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  ExternalLink,
  Sparkles,
  FolderGit2,
  CheckCircle2,
  Github,
  Info,
  Server,
  Eye,
} from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { projects } from '../../data/projects.js';

export const ProjectsTeaser: React.FC = () => {
  // Show the top 2 flagship featured projects: 1. ForTech (Full E-Commerce), 2. ArticleHub (React CRUD)
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section id="featured-projects" className="py-16 md:py-24 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Featured Work &amp; Real Applications"
          description="A showcase of flagship React projects featuring full-scale authentication, role-based workflows, REST API integrations, and robust application architecture."
        />

        {/* Quick Link to Projects Page */}
        <div className="shrink-0 self-start sm:self-end">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1c2028] hover:bg-[#262a33] text-[#38bdf8] hover:text-white border border-white/10 hover:border-[#38bdf8]/40 transition-all font-sans text-xs sm:text-sm font-semibold shadow-md"
          >
            <span>See All Projects ({projects.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 2 Curated Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {featured.map((project) => {
          const liveUrl = (project as any).liveUrl;
          const hasRealLiveUrl = Boolean(
            liveUrl &&
              typeof liveUrl === 'string' &&
              liveUrl.trim().length > 0 &&
              liveUrl !== '#' &&
              liveUrl.startsWith('http')
          );
          const apiRepoUrl = (project as any).apiRepoUrl;

          return (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#181c24]/90 border border-white/[0.08] card-hover-glow transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Window Header */}
              <div className="px-4 py-2.5 bg-[#121620] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                </div>
                <span className="font-mono text-[11px] text-[#87929a] truncate max-w-[170px]">
                  {project.windowFile}
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#38bdf8]/15 text-[#38bdf8] font-bold border border-[#38bdf8]/30">
                  {project.hudBadge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1 justify-between">
                {/* Header Info: Category & Title */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold px-5 py-2.5 rounded-full bg-[#0a0e16] text-[#38bdf8] border border-[#38bdf8]/30">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#87929a]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#dfe2ee] group-hover:text-[#38bdf8] transition-colors">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-[#38bdf8] font-semibold">
                    {project.shortLabel || project.shortTitle}
                  </span>

                  <p className="font-sans text-xs text-[#bdc8d1] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technical Companion Connection for ForTech */}
                {apiRepoUrl && (
                  <div className="p-3 rounded-xl bg-[#121620] border border-[#38bdf8]/25 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <Server className="w-4 h-4 text-[#38bdf8] shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono text-[10px] text-[#87929a] uppercase font-bold tracking-wider">
                          Companion Backend API
                        </span>
                        <span className="font-sans text-xs text-[#dfe2ee] font-semibold truncate">
                          JSON Server (ForTech-Backend)
                        </span>
                      </div>
                    </div>
                    <a
                      href={apiRepoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 font-mono text-[10px] text-[#38bdf8] hover:text-white flex items-center gap-1 font-semibold px-2 py-1 rounded bg-[#1c2028] border border-white/10 hover:border-[#38bdf8]/40 transition-all"
                    >
                      <span>API Repo</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                )}

                {/* Important Features (2–4 items) */}
                <div className="p-3 rounded-xl bg-[#121620] border border-white/[0.05] flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#87929a]">
                    Key Features
                  </span>
                  <ul className="flex flex-col gap-1.5 font-sans text-xs text-[#bdc8d1]">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#56e5a9] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Accuracy Note (if present) */}
                {project.accuracyNote && (
                  <div className="flex items-start gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0f131c] border border-white/[0.05] text-[#87929a] font-mono text-[10px] leading-relaxed">
                    <Info className="w-3 h-3 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.accuracyNote}</span>
                  </div>
                )}

                {/* Technology Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[#0f131c] text-[#87929a] border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: [View Project] [Live Demo] [GitHub] [API Repository] */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      to={`/projects#${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#7bd0ff] text-[#00354a] font-sans text-xs font-bold shadow-sm transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project</span>
                    </Link>

                    {hasRealLiveUrl && (
                      <a
                        href={project.liveUrl!}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-black font-sans text-xs font-bold shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c2028] hover:bg-[#262a33] text-[#dfe2ee] hover:text-white font-sans text-xs font-semibold border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{apiRepoUrl ? 'Frontend Repo' : 'GitHub'}</span>
                    </a>

                    {apiRepoUrl && (
                      <a
                        href={apiRepoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c2028] hover:bg-[#262a33] text-[#38bdf8] hover:text-white font-sans text-xs font-semibold border border-[#38bdf8]/30 hover:border-[#38bdf8] transition-colors"
                      >
                        <Server className="w-3.5 h-3.5" />
                        <span>API Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* High-Impact Dedicated Page Gateway Portal */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#181c24] via-[#151922] to-[#121620] border border-[#38bdf8]/20 p-5 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ambient glow in background */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#6366f1]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 font-mono text-xs text-[#38bdf8] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Full Projects Page
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#dfe2ee]">
              Detailed Technical Specs &amp; Architecture
            </h3>
            <p className="font-sans text-sm text-[#bdc8d1] leading-relaxed">
              Explore the full catalog of projects with deep technical breakdowns, architecture notes, GitHub repositories, and interactive technical previews.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#7bd0ff] hover:to-[#38bdf8] text-[#00354a] font-sans font-bold text-sm shadow-xl hover:shadow-[#38bdf8]/25 transition-all group"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
