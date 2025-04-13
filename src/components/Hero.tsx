'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const products = [
    {
      title: 'High Solids Acrylic',
      subtitle: 'Waterproof Coating',
      description:
        'Full Area Waterproofing of RCC/Metal Roof & Landscaping area',
      image: '/RPP1-removebg.png',
      pdf: '/acrylic-waterproof.pdf',
    },
    {
      title: 'Elastomeric Bituminous',
      subtitle: 'Modified Waterproof Coating',
      description:
        'Superior flexibility and durability for all waterproofing needs',
      image: '/RPP1-removebg.png',
      pdf: '/bituminous-coating.pdf',
    },
    {
      title: 'Aluminum Surfaced',
      subtitle: 'Self Adhesive Flashing Tape',
      description: 'Easy application for joints, seams and critical areas',
      image: '/RPP3-removebg.png',
      pdf: '/flashing-tape.pdf',
    },
  ];

  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToProduct = (index: React.SetStateAction<number>) => {
    setCurrentProduct(index);
  };

  const openPdf = (pdfPath: string | URL | undefined) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="relative bg-gradient-to-r from-[#37589d] to-[#37589d] pt-16">
      <div className="container mx-auto px-4 md:px-14 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          {/* Left content with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-white max-w-lg"
            >
              <h3 className="text-lg md:text-xl font-medium text-blue-100">
                Long Lasting
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {products[currentProduct].title}
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                {products[currentProduct].subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8">
                {products[currentProduct].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-white text-[#37589d] hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Buy Now
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <button
                  onClick={() => openPdf(products[currentProduct].pdf)}
                  className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#37589d] px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="flex space-x-2 mt-8">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProduct(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentProduct === index ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right image with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={products[currentProduct].image}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="mt-10 md:mt-0"
            >
              <div className="relative w-[200px] h-[200px] sm:w-[500px] sm:h-[500px]">
                <Image
                  src={products[currentProduct].image}
                  alt={products[currentProduct].title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,138.7C840,149,960,139,1080,122.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
