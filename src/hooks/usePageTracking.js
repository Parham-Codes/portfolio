import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics 4 Measurement ID
 */
export const GA_MEASUREMENT_ID = 'G-J95LZ1NVW9';

/**
 * Route-specific document titles for clean GA4 reporting and browser history
 */
const ROUTE_TITLES = {
  '/': 'Parham Taghikhani - Front-End & WordPress Developer Portfolio',
  '/projects': 'Projects | Parham Taghikhani',
  '/wordpress': 'WordPress & WooCommerce Projects | Parham Taghikhani',
};

// Module-level cache to deduplicate initial renders across React StrictMode remounts
let lastTrackedKey = null;

/**
 * Custom hook to track SPA page views across React Router routes using GA4 (gtag.js).
 *
 * Features:
 * - Tracks virtual page views on navigation between '/', '/projects', and '/wordpress'.
 * - Deduplicates events across React StrictMode in development and fast re-renders.
 * - Ignores in-page hash jumps (e.g. #experience, #contact) to prevent duplicate page_view events.
 * - Seamlessly handles GitHub Pages subpath deployment (/portfolio/...).
 */
export function usePageTracking() {
  const location = useLocation();
  const lastTrackedRef = useRef(null);

  useEffect(() => {
    const routePath = location.pathname;
    const currentKey = `${routePath}${location.search}`;

    // Deduplicate: prevent duplicate tracking in React StrictMode or identical routes
    if (lastTrackedRef.current === currentKey || lastTrackedKey === currentKey) {
      return;
    }

    lastTrackedRef.current = currentKey;
    lastTrackedKey = currentKey;

    // Resolve page title
    const pageTitle = ROUTE_TITLES[routePath] || document.title || 'Parham Taghikhani - Portfolio';
    if (typeof document !== 'undefined') {
      document.title = pageTitle;
    }

    // Dispatch page_view event to Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const pagePath = window.location.pathname + window.location.search;
      const pageLocation = window.location.href;

      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: pagePath,
        send_to: GA_MEASUREMENT_ID,
      });
    }
  }, [location.pathname, location.search]);
}

/**
 * Utility helper to send custom events to Google Analytics 4
 * @param {string} eventName
 * @param {Record<string, unknown>} eventParams
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...eventParams,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}
