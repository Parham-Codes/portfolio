import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components/Background/Background.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { useScrollToTop } from './hooks/useScrollToTop.js';

// Route-level code splitting: each page loads on demand
const HomePage = lazy(() =>
  import('./pages/Home/HomePage.jsx').then((module) => ({ default: module.HomePage }))
);
const ProjectsPage = lazy(() =>
  import('./pages/Projects/ProjectsPage.jsx').then((module) => ({ default: module.ProjectsPage }))
);
const WordPressPage = lazy(() =>
  import('./pages/WordPress/WordPressPage.jsx').then((module) => ({ default: module.WordPressPage }))
);

const PageRouteLoader = () => (
  <div className="w-full min-h-[45vh] flex items-center justify-center" aria-busy="true">
    <div className="w-6 h-6 rounded-full border-2 border-[#38bdf8]/20 border-t-[#38bdf8] animate-spin" />
  </div>
);

export const App = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#070a12] text-[#dfe2ee] font-sans antialiased selection:bg-[#38bdf8]/30 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Modern Developer Background with Ambient Glows & Architectural Grid */}
      <Background />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 z-10">
        <Suspense fallback={<PageRouteLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/wordpress" element={<WordPressPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
