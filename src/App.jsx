import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { HomePage } from './pages/Home/HomePage.jsx';
import { ProjectsPage } from './pages/Projects/ProjectsPage.jsx';
import { useScrollToTop } from './hooks/useScrollToTop.js';

export const App = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#0b0f17] text-[#dfe2ee] font-sans antialiased selection:bg-[#38bdf8]/30 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.08),rgba(255,255,255,0))] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_60%,rgba(99,102,241,0.05),rgba(255,255,255,0))] pointer-events-none" />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
