import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Features from '../components/Features';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Info />
      {/* <div className="max-w-6xl mx-auto px-4 my-12">
        <div className="h-px bg-gray-200"></div>
      </div> */}
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
