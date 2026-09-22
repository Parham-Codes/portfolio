import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Terminal, Github, Menu, X, ArrowUpRight, Layers, Globe } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { cn } from '../../utils/cn.js';
import { smoothEase } from '../../utils/animations.jsx';

const navItems = [
  { id: 'hero', label: 'Overview', path: '/' },
  { id: 'projects', label: 'Projects', path: '/projects', isRoute: true },
  { id: 'wordpress', label: 'WordPress', path: '/wordpress', isRoute: true },
  { id: 'experience', label: 'Experience', path: '/#experience' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
];

const SECTION_IDS = ['hero', 'experience', 'contact'];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(SECTION_IDS, 'hero');
  const shouldReduceMotion = useReducedMotion();

  const isProjectsPage = location.pathname === '/projects';
  const isWordPressPage = location.pathname === '/wordpress';
  const isDedicatedPage = isProjectsPage || isWordPressPage;

  const getItemIsActive = (item) => {
    if (item.id === 'projects') return isProjectsPage;
    if (item.id === 'wordpress') return isWordPressPage;
    return !isDedicatedPage && activeSection === item.id;
  };

  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);

    if (item.isRoute) {
      if (location.pathname !== item.path) {
        navigate(item.path);
      }
      return;
    }

    e.preventDefault();

    if (item.id === 'hero') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (window.location.hash) {
          window.history.pushState(null, '', window.location.pathname);
        }
      } else {
        navigate('/');
      }
      return;
    }

    if (item.id === 'experience') {
      if (location.pathname === '/') {
        const target = document.getElementById('experience');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#experience');
        }
      } else {
        navigate('/#experience');
      }
      return;
    }

    if (item.id === 'contact') {
      if (location.pathname === '/') {
        const target = document.getElementById('contact');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#contact');
        }
      } else {
        navigate('/#contact');
      }
      return;
    }
  };

  const handleContactClick = (e) => {
    e?.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    } else {
      navigate('/#contact');
    }
  };

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: smoothEase }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-2 sm:pt-3 px-2 sm:px-6"
      >
        <div className="h-14 sm:h-16 w-full max-w-6xl rounded-full bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-md sm:backdrop-blur-xl shadow-xl px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo & Open to Work Badge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (window.location.hash) {
                    window.history.pushState(null, '', window.location.pathname);
                  }
                }
              }}
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#6366f1] flex items-center justify-center text-[#0a0e16] shadow-md shadow-[#38bdf8]/20 group-hover:scale-105 transition-transform shrink-0">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </div>
              <span className="font-display text-sm sm:text-base md:text-lg font-bold text-[#dfe2ee] tracking-tight leading-none">
                Parham <span className="text-[#38bdf8]">Taghikhani</span>
              </span>
            </Link>

            {/* Open to Work Badge - perfectly centered vertically, bolder and more substantial */}
            <div className="inline-flex items-center self-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 shadow-sm shadow-emerald-950/60 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-extrabold text-emerald-300 tracking-wider uppercase whitespace-nowrap leading-none">
                Open to Work
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121620]/60 p-1 rounded-full border border-white/[0.05]">
            {navItems.map((item) => {
              const isActive = getItemIsActive(item);

              if (item.isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'font-sans text-xs sm:text-sm font-semibold rounded-full px-3.5 py-1.5 transition-all duration-200 flex items-center gap-1.5',
                      isActive
                        ? 'bg-[#38bdf8] text-[#00354a] shadow-md shadow-[#38bdf8]/25'
                        : 'text-[#bdc8d1] hover:text-[#dfe2ee] hover:bg-white/[0.06]'
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    'font-sans text-xs sm:text-sm font-semibold rounded-full px-3.5 py-1.5 transition-all duration-200',
                    isActive
                      ? 'bg-[#38bdf8] text-[#00354a] shadow-md shadow-[#38bdf8]/25'
                      : 'text-[#bdc8d1] hover:text-[#dfe2ee] hover:bg-white/[0.06]'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://github.com/Parham-Codes"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center bg-[#262a33]/60 text-[#bdc8d1] hover:bg-[#31353e] hover:text-white transition-colors border border-white/[0.06]"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={handleContactClick}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#38bdf8] text-[#00354a] font-sans text-xs sm:text-sm font-bold hover:bg-[#7bd0ff] transition-all shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_4px_25px_rgba(56,189,248,0.4)] cursor-pointer"
            >
              Get in Touch
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-[#262a33]/80 text-[#bdc8d1] hover:text-white border border-white/10"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-18 sm:top-20 inset-x-3 sm:inset-x-4 max-w-md mx-auto z-50 rounded-2xl bg-[#181c24]/98 border border-white/15 backdrop-blur-lg p-4 sm:p-5 shadow-2xl flex flex-col gap-3 animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-wider font-semibold">
              Navigation Menu
            </span>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 shadow-sm shadow-emerald-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] font-bold text-emerald-300 tracking-wide uppercase whitespace-nowrap">
                Open to Work
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = getItemIsActive(item);

              if (item.isRoute) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'font-sans text-sm font-semibold rounded-xl px-3.5 py-3 flex items-center justify-between transition-all min-h-[44px]',
                      isActive
                        ? 'bg-[#38bdf8] text-[#00354a]'
                        : 'text-[#bdc8d1] hover:text-white hover:bg-white/5 active:bg-white/10'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {item.id === 'wordpress' ? (
                        <Globe className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                      <span>
                        {item.id === 'projects'
                          ? 'Coding Projects (Hub)'
                          : item.id === 'wordpress'
                          ? 'WordPress Projects'
                          : item.label}
                      </span>
                    </div>
                    <ArrowUpRight className={cn('w-4 h-4', isActive ? 'text-[#00354a]' : 'opacity-70')} />
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    'font-sans text-sm font-semibold rounded-xl px-3.5 py-3 flex items-center justify-between transition-all min-h-[44px]',
                    isActive
                      ? 'bg-[#38bdf8] text-[#00354a]'
                      : 'text-[#bdc8d1] hover:text-white hover:bg-white/5 active:bg-white/10'
                    )}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={cn('w-4 h-4', isActive ? 'text-[#00354a]' : 'opacity-70')} />
                </a>
              );
            })}
          </div>

          {/* Mobile Drawer Quick Links */}
          <div className="pt-2 border-t border-white/10 flex items-center gap-2">
            <a
              href="https://github.com/Parham-Codes"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-h-[44px] py-2.5 px-3 rounded-xl bg-[#262a33] text-[#dfe2ee] font-sans text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#31353e] transition-colors border border-white/10"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
          </div>

          <button
            onClick={handleContactClick}
            className="w-full min-h-[44px] flex items-center justify-center py-2.5 rounded-xl bg-[#38bdf8] text-[#00354a] font-sans text-sm font-bold shadow-lg hover:bg-[#7bd0ff] transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      )}
    </>
  );
};
