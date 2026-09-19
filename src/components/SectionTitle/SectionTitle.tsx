import React from 'react';
import { cn } from '../../utils/cn.ts';

export interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  rightElement?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  eyebrowColor?: 'primary' | 'tertiary' | 'secondary';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  rightElement,
  align = 'left',
  className = '',
  eyebrowColor = 'primary',
}) => {
  const colorMap = {
    primary: 'text-[#38bdf8]',
    tertiary: 'text-[#56e5a9]',
    secondary: 'text-[#c0c1ff]',
  };

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row gap-4 mb-8 md:mb-12',
        rightElement ? 'md:items-end md:justify-between' : '',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      <div className={cn('flex flex-col gap-2', align === 'center' ? 'max-w-2xl' : 'max-w-2xl')}>
        <span
          className={cn(
            'font-mono text-xs font-semibold uppercase tracking-[0.2em]',
            colorMap[eyebrowColor]
          )}
        >
          {eyebrow}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#dfe2ee] leading-[1.2] sm:leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p className="font-sans text-[#94a3b8] text-sm sm:text-base md:text-lg leading-relaxed mt-1">
            {description}
          </p>
        )}
      </div>
      {rightElement && <div className="shrink-0">{rightElement}</div>}
    </div>
  );
};
