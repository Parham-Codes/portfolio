import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  icon,
  iconPosition = 'left',
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium font-sans rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-semibold tracking-wide',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-7 py-3 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#38bdf8] via-[#0284c7] to-[#4f46e5] text-white shadow-lg shadow-[#0284c7]/20 hover:shadow-cyan-500/30 hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-[#1c2028]/90 text-[#dfe2ee] hover:bg-[#262a33] hover:text-white border border-white/10 active:scale-[0.98]',
    outline:
      'bg-transparent text-[#dfe2ee] border border-white/20 hover:bg-white/5 hover:border-white/40 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#bdc8d1] hover:text-white hover:bg-white/5 active:scale-[0.98]',
    emerald:
      'bg-[#10b981] text-[#003824] hover:bg-[#34d399] font-bold shadow-md shadow-[#10b981]/20 active:scale-[0.98]',
    indigo:
      'bg-[#6366f1] text-white hover:bg-[#818cf8] font-bold shadow-md shadow-[#6366f1]/20 active:scale-[0.98]',
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
