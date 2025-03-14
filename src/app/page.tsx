import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundImages from '../components/BackgroundImages';
import Info from '../components/Info';
import Features from '../components/Features';
import MainComponent from '../components/footer';

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen text-white">
        <Navbar />

        <BackgroundImages />
        <div className="max-w-5xl mx-auto mt-10 h-[1px] bg-gray-500"></div>

        <Info />
        <div className="max-w-5xl mx-auto mt-10 h-[1px] bg-gray-500"></div>

        <Features />
        <MainComponent />
      </div>
    </>
  );
};

export default HomePage;
