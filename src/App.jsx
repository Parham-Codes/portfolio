import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components/Background/Background.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { HomePage } from './pages/Home/HomePage.jsx';
import { ProjectsPage } from './pages/Projects/ProjectsPage.jsx';
import { WordPressPage } from './pages/WordPress/WordPressPage.jsx';
import { useScrollToTop } from './hooks/useScrollToTop.js';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/wordpress" element={<WordPressPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
