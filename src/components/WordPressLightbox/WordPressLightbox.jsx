import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { smoothEase } from '../../utils/animations.jsx';

export const WordPressLightbox = ({
  isOpen,
  onClose,
  images = [],
  initialIndex = 0,
  title = 'Project Screenshots',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.max(0, Math.min(initialIndex, (images?.length || 1) - 1)));
    }
  }, [isOpen, initialIndex, images?.length]);

  const handlePrev = useCallback(() => {
    if (!images || images.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images]);

  const handleNext = useCallback(() => {
    if (!images || images.length <= 1) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  return createPortal(
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} screenshot lightbox`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: smoothEase }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-3 sm:p-6 bg-black/90 backdrop-blur-xl select-none"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="w-full max-w-6xl flex items-center justify-between gap-4 z-10 py-2 px-1"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Title and Counter */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-8 h-8 rounded-full bg-white/10 text-[#38bdf8] flex items-center justify-center shrink-0">
              <ImageIcon className="w-4 h-4" />
            </span>
            <div className="flex flex-col min-w-0">
              <h4 className="font-display text-sm sm:text-base font-bold text-white truncate">
                {title}
              </h4>
              {images.length > 0 && (
                <span className="font-mono text-xs text-[#87929a]">
                  Screenshot {currentIndex + 1} of {images.length}
                </span>
              )}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close screenshot gallery"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#dfe2ee] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Stage with Image and Navigation Controls */}
        <div
          className="relative flex-1 w-full max-w-6xl flex items-center justify-center min-h-0 my-2 sm:my-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          {hasMultiple && (
            <button
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181c24]/90 hover:bg-[#262a33] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Active Image View */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden p-1 sm:p-4">
            {currentImage ? (
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={`${title} - Screenshot ${currentIndex + 1}`}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="max-h-full max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 text-center p-8 rounded-2xl bg-[#181c24]/80 border border-white/10 max-w-md">
                <ImageIcon className="w-12 h-12 text-[#87929a]" />
                <p className="font-sans text-sm text-[#bdc8d1]">
                  Screenshot preview is being prepared.
                </p>
              </div>
            )}
          </div>

          {/* Next Button */}
          {hasMultiple && (
            <button
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181c24]/90 hover:bg-[#262a33] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnail Strip (if multiple screenshots) */}
        {hasMultiple && (
          <div
            className="w-full max-w-4xl flex items-center justify-center gap-2 sm:gap-3 py-2 px-4 overflow-x-auto scrollbar-none z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View screenshot ${idx + 1}`}
                  className={`relative w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#38bdf8] scale-105 shadow-md shadow-[#38bdf8]/30'
                      : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#38bdf8]/10" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};
