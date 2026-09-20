/**
 * Utility for combining conditional CSS class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
