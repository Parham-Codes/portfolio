import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Auto-recover from stale chunk 404s after new deployments
if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', () => {
    const hasReloaded = window.sessionStorage.getItem('vite_preload_reload');
    if (!hasReloaded) {
      window.sessionStorage.setItem('vite_preload_reload', 'true');
      window.location.reload();
    }
  });

  window.addEventListener('load', () => {
    window.sessionStorage.removeItem('vite_preload_reload');
    window.sessionStorage.removeItem('chunk_error_reload');
  });
}

// On GitHub Pages, the site is deployed under '/portfolio'.
// In local development / preview root, fallback gracefully to '/'.
const basename =
  typeof window !== 'undefined' && window.location.pathname.startsWith('/portfolio')
    ? '/portfolio'
    : (import.meta.env.BASE_URL && import.meta.env.BASE_URL.startsWith('/portfolio')
        ? '/portfolio'
        : '/');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
