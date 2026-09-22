import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

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
