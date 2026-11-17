import React, { Component } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

/**
 * Universal ErrorBoundary
 *
 * Catches runtime crashes and stale dynamic import failures (e.g. 404 on old chunks after deployment).
 * Automatically reloads the page once on chunk load errors to fetch the new deployment bundle.
 * Falls back to an elegant error view if the error persists.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Check if error is related to dynamic import / chunk loading failure
    const isChunkLoadError =
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed') ||
      error?.name === 'ChunkLoadError';

    if (isChunkLoadError) {
      const hasReloaded = window.sessionStorage.getItem('chunk_error_reload');
      if (!hasReloaded) {
        window.sessionStorage.setItem('chunk_error_reload', 'true');
        window.location.reload();
        return;
      }
    }
  }

  handleReload = () => {
    window.sessionStorage.removeItem('chunk_error_reload');
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#dfe2ee] mb-2">
            نسخه جدیدی از سایت منتشر شده است
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#87929a] max-w-md mb-6 leading-relaxed">
            برای دریافت آخرین به‌روزرسانی‌ها و محتوای جدید، لطفاً صفحه را مجدداً بارگذاری کنید.
          </p>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0284c7] text-[#070a12] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>بارگذاری مجدد (Reload)</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
