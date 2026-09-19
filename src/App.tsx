/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout.tsx';
import { Home } from './pages/Home/Home.tsx';
import { ProjectsPage } from './pages/Projects/ProjectsPage.tsx';
import { useScrollToTop } from './hooks/useScrollToTop.ts';

function AppContent() {
  useScrollToTop();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


