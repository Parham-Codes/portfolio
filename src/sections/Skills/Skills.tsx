import React, { useState } from 'react';
import {
  Code2,
  GitMerge,
  FileCode,
  Palette,
  Server,
  Network,
  Database,
  Lock,
  GitBranch,
  Wrench,
  Bug,
  Layout,
  Globe,
  Code,
  ChevronDown,
} from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';
import { skillTiers } from '../../data/skills.js';

export const Skills: React.FC = () => {
  // On mobile, keep track of which tier is expanded (first one open by default)
  const [expandedTiers, setExpandedTiers] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleTier = (idx: number) => {
    setExpandedTiers((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'deployed_code':
        return <Code2 className="w-4 h-4 text-[#38bdf8]" />;
      case 'account_tree':
        return <GitMerge className="w-4 h-4 text-[#38bdf8]" />;
      case 'javascript':
        return <FileCode className="w-4 h-4 text-[#38bdf8]" />;
      case 'css':
        return <Palette className="w-4 h-4 text-[#38bdf8]" />;
      case 'dns':
        return <Server className="w-4 h-4 text-[#56e5a9]" />;
      case 'api':
        return <Network className="w-4 h-4 text-[#56e5a9]" />;
      case 'storage':
        return <Database className="w-4 h-4 text-[#56e5a9]" />;
      case 'lock':
        return <Lock className="w-4 h-4 text-[#56e5a9]" />;
      case 'terminal':
        return <GitBranch className="w-4 h-4 text-[#38bdf8]" />;
      case 'build':
        return <Wrench className="w-4 h-4 text-[#38bdf8]" />;
      case 'developer_mode':
        return <Bug className="w-4 h-4 text-[#38bdf8]" />;
      case 'devices':
        return <Layout className="w-4 h-4 text-[#38bdf8]" />;
      case 'globe':
        return <Globe className="w-4 h-4 text-[#c0c1ff]" />;
      case 'code':
        return <Code className="w-4 h-4 text-[#c0c1ff]" />;
      case 'palette':
        return <Palette className="w-4 h-4 text-[#c0c1ff]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#38bdf8]" />;
    }
  };

  const tierColors = {
    primary: {
      tag: 'text-[#38bdf8]',
      dot: 'bg-[#38bdf8]',
      bar: 'bg-gradient-to-r from-[#38bdf8] to-[#0284c7]',
      borderHighlight: 'border-white/[0.08] hover:border-[#38bdf8]/40',
      pill: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20',
    },
    secondary: {
      tag: 'text-[#c0c1ff]',
      dot: 'bg-[#c0c1ff]',
      bar: 'bg-gradient-to-r from-[#c0c1ff] to-[#6366f1]',
      borderHighlight: 'border-white/[0.08] hover:border-[#c0c1ff]/40',
      pill: 'bg-[#c0c1ff]/10 text-[#c0c1ff] border-[#c0c1ff]/20',
    },
    tertiary: {
      tag: 'text-[#56e5a9]',
      dot: 'bg-[#56e5a9]',
      bar: 'bg-gradient-to-r from-[#56e5a9] to-[#059669]',
      borderHighlight: 'border-white/[0.08] hover:border-[#56e5a9]/40',
      pill: 'bg-[#56e5a9]/10 text-[#56e5a9] border-[#56e5a9]/20',
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 flex flex-col gap-6 sm:gap-8">
      <SectionTitle
        eyebrow="Tech Stack &amp; Skills"
        title="Technical Skills &amp; Comfort Levels"
        description="A transparent breakdown of my primary front-end focus, practical WordPress customization, and growing backend foundations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
        {skillTiers.map((tierData, idx) => {
          const colors = tierColors[tierData.accent as keyof typeof tierColors] || tierColors.primary;
          const isFrontEnd = idx === 0;
          const isWordPress = idx === 1;
          const isExpanded = !!expandedTiers[idx];

          return (
            <div
              key={idx}
              className={`rounded-2xl bg-[#181c24]/90 border backdrop-blur-2xl p-4 sm:p-5 lg:p-6 shadow-xl flex flex-col gap-4 relative overflow-hidden transition-all ${
                isFrontEnd
                  ? 'border-[#38bdf8]/30 shadow-cyan-950/20 ring-1 ring-[#38bdf8]/20'
                  : isWordPress
                  ? 'border-[#c0c1ff]/25 shadow-indigo-950/10'
                  : colors.borderHighlight
              }`}
            >
              {/* Tier Header - Clickable toggle on mobile, static on desktop */}
              <div
                onClick={() => toggleTier(idx)}
                className="flex flex-col gap-1.5 pb-2 border-b border-white/[0.06] cursor-pointer md:cursor-default select-none group/header"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTier(idx);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider ${colors.tag}`}>
                    {tierData.tier}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`} />
                    {/* Mobile toggle arrow */}
                    <div className="md:hidden p-1 rounded-md bg-white/[0.04] text-[#87929a] group-hover/header:text-[#dfe2ee]">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#38bdf8]' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#dfe2ee] group-hover/header:text-[#38bdf8] md:group-hover/header:text-[#dfe2ee] transition-colors">
                    {tierData.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#bdc8d1] leading-relaxed">
                  {tierData.description}
                </p>

                {/* Mobile status banner indicating count */}
                <div className="flex md:hidden items-center justify-between pt-1 font-mono text-[11px] text-[#87929a]">
                  <span>{tierData.skills.length} skills included</span>
                  <span className={isExpanded ? 'text-[#38bdf8]' : 'text-[#87929a]'}>
                    {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
                  </span>
                </div>
              </div>

              {/* Skills List: On mobile toggled by isExpanded, on desktop (md:) ALWAYS visible */}
              <div
                className={`flex-col gap-2.5 ${
                  isExpanded ? 'flex' : 'hidden md:flex'
                }`}
              >
                {tierData.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#1c2028]/80 border border-white/[0.04] hover:border-white/[0.15] hover:bg-[#202530] transition-all duration-200 flex flex-col gap-1.5 group/skill"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-sans text-xs sm:text-[13px] text-[#dfe2ee] font-semibold flex items-center gap-2 truncate group-hover/skill:text-white">
                        {getSkillIcon(skill.icon)}
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <span className={`font-mono text-xs font-bold shrink-0 ${skill.color} group-hover/skill:scale-105 transition-transform`}>
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full h-1.5 bg-[#262a33] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out group-hover/skill:brightness-125 ${colors.bar}`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    <p className="font-sans text-[11px] text-[#87929a] leading-tight">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
