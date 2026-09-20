/**
 * Reusable animation variants and helper components using `motion/react`.
 * Respects prefers-reduced-motion and keeps animations lightweight,
 * compositor-friendly, and performant across mobile and desktop.
 */
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Common viewport settings for scroll-triggered entrance animations
export const defaultViewport = { once: true, amount: 0.15 };

// Easing curves
export const smoothEase = [0.16, 1, 0.3, 1];

// Reusable motion variants
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.5,
      delay: custom.delay ?? 0,
      ease: smoothEase,
    },
  }),
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration ?? 0.45,
      delay: custom.delay ?? 0,
      ease: smoothEase,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.08,
      delayChildren: custom.delayChildren ?? 0.05,
    },
  }),
};

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

/**
 * Reusable wrapper that fades up when scrolling into view.
 */
export const FadeUp = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  amount = 0.15,
  as = 'div',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Reusable wrapper that fades in when scrolling into view.
 */
export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.45,
  amount = 0.15,
  as = 'div',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <Component
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: smoothEase }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
