import React from 'react';

const Info = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-[#37589d]">Drippfix®</h2>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          India&apos;s Most Advanced Waterproofing Solution
        </h3>

        <p className="text-lg mb-6 text-gray-600">
          Drippfix® - Liquid Rubber is India&apos;s most unique, easiest and
          durable Waterproofing, Corrosion Control & Chemical Protection system
          - a breakthrough technology from CANADA.
        </p>

        <p className="text-lg mb-6 text-gray-600">
          Our innovative solution allows freedom to think beyond the limits of
          architectural design and industrial processes in the true sense.
        </p>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold mb-3 text-[#37589d]">
            Multi-Solution Advantage
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5 text-gray-700">
            <li>Multi-use application</li>
            <li>Multi-surface compatibility</li>
            <li>Multi-area protection</li>
            <li>Multi-application solution</li>
          </ul>

          <p className="mt-4 font-medium italic text-[#37589d]">
            Offers incomparable advantages above all other existing products in
            the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
