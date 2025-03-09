import Image from 'next/image';
import React from 'react';

const BackgroundImages = () => {
  return (
    <div className="relative h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        {/* <Image
          src="/RPP1.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 pt-16">
        <div className="text-white max-w-md">
          <h3 className="text-lg md:text-xl font-medium opacity-80">
            Long Lasting
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Multi Surface</h1>
          <p className="text-lg md:text-xl mb-6">
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

        {/* Product Image (Bucket) */}
        <div className="hidden md:block">
          <Image
            src="/RPP1.png"
            alt="Elephant Shield's Liquid Rubber"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {/* <div className="absolute bottom-8 left-8 flex space-x-4">
          <button className="text-white bg-gray-800/40 hover:bg-gray-700/60 p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="text-white bg-gray-800/40 hover:bg-gray-700/60 p-2 rounded-full">
            <svg
              className="w-6 h-6"
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
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BackgroundImages;
