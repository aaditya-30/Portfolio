import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import PocoyoCursor from './PocoyoCursor';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#0a0f16] text-white selection:bg-blue-500/30 overflow-hidden">
      <Background />
      <PocoyoCursor />
      
      <main className="container mx-auto px-4 relative z-10 flex flex-col min-h-screen">
        {children}
      </main>
      
      {/* Footer outside main for full width */}
      <Footer />
      <Navbar />
    </div>
  );
};

export default Layout;
