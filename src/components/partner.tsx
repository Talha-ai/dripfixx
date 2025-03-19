import React from 'react';

const PartnerSection = () => {
  return (
    <div className="text-center md:text-left px-6 md:px-12 py-10">
      <h2 className="text-2xl font-bold text-gray-800">Become a Partner</h2>
      <p className="mt-4 text-gray-700">
        We are actively recruiting Dealers, Applicators, and Consultants across
        India. We can grow hand-in-hand if you belong to industries such as
        Waterproofing, Corrosion Protection, Chemical Protection, Engineered
        Coatings, or Related Industrial Products.
      </p>
      <button className="mt-6 px-6 py-2 bg-[#0000FF] text-white rounded-full hover:bg-[#0000FF] transition">
        Know More
      </button>
    </div>
  );
};

const SupportSection = () => {
  return (
    <div className="text-center px-6 md:px-12 py-6 bg-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Quick Support</h3>
      <p className="mt-2 text-gray-700">
        📞 <span className="font-medium">8980 160 160</span>
      </p>
      <p className="text-gray-700">
        📧{' '}
        <a
          href="mailto:support@elephantshield.com"
          className="text-[#0000FF] underline"
        >
          support@elephantshield.com
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-center text-gray-600 text-sm px-6 py-4 bg-gray-900 text-white">
      <p>
        Elephant Shield Global Distribution Inc owns the Trademark, Formulation,
        & Copyrights and is authorized for marketing, distribution, training,
        and appointing dealers/distributors for all Elephant Shield & Liquid
        Rubber Products.
      </p>
      <p className="mt-2">
        Any unauthorized use will invite trademark infringement.
      </p>
      <p className="mt-4">
        © 2025 Elephant Shield - All rights reserved.{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <PartnerSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default MainComponent;
