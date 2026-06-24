import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased selection:bg-callas-lightBlue selection:text-callas-darkBlue">
      {/* Fixed top navigation bar */}
      <Navbar />
      
      {/* Main content push down by navbar height (h-20 = 80px) */}
      <main className="flex-grow pt-20 animate-fade">
        {children}
      </main>
      
      {/* Global site footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;