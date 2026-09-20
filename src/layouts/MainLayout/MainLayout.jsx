import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#0b0f17] min-h-screen text-[#dfe2ee] font-sans relative overflow-x-hidden selection:bg-[#38bdf8] selection:text-[#00354a]">
      {/* Ambient background light orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#38bdf8]/12 rounded-full blur-[70px] sm:blur-[130px] animate-float-slow will-change-transform" />
        <div className="absolute top-1/3 -right-20 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-[#6366f1]/15 rounded-full blur-[80px] sm:blur-[140px] animate-float-reverse will-change-transform" />
        <div className="absolute -bottom-20 left-1/3 w-72 sm:w-[26rem] h-72 sm:h-[26rem] bg-[#56e5a9]/10 rounded-full blur-[70px] sm:blur-[130px] animate-float-slow will-change-transform" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
