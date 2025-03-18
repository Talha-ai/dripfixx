import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 pt-16">
      <div className="container mx-auto px-14 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="text-white max-w-lg">
            <h3 className="text-lg md:text-xl font-medium text-blue-100">
              Long Lasting
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Multi Surface
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Full Area Waterproofing of RCC/Metal Roof & Landscaping area
            </p>

            <a
              href="#"
              className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-medium transition-colors"
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
          </div>

          {/* Product Image */}
          <div className="mt-10 md:mt-0">
            <Image
              src="/RPP1-removebg.png"
              alt="Drippfix Liquid Rubber"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
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
