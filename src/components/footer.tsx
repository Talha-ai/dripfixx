import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const PartnerSection = () => {
  return (
    <div className="text-center px-6 md:px-12 py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Become a Partner
        </h2>
        <p className="text-gray-700 mb-6">
          We are actively recruiting Dealers, Applicators, and Consultants
          across India. We can grow hand-in-hand if you belong to industries
          such as Waterproofing, Corrosion Protection, Chemical Protection,
          Engineered Coatings, or Related Industrial Products.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium">
          Know More
        </button>
      </div>
    </div>
  );
};

const SupportSection = () => {
  return (
    <div className="text-center px-6 md:px-12 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-blue-700 mb-8">Quick Support</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-xl text-gray-700">
            <FaPhone className="text-red-600" size={20} />
            <span className="font-medium">9999999999</span>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-700">
            <FaWhatsapp className="text-green-600" size={20} />
            <span className="font-medium">9999999999</span>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-700">
            <FaEnvelope className="text-blue-600" size={20} />
            <a
              href="mailto:support@drippfix.com"
              className="font-medium hover:text-blue-600"
            >
              support@drippfix.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <PartnerSection />
      <SupportSection />
      <div className="text-center w-full text-sm px-6 py-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p>
            Drippfix owns the Trademark, Formulation, & Copyrights and is
            authorized for marketing, distribution, training, and appointing
            dealers/distributors for all Drippfix Products.
          </p>
          <p className="mt-2">
            Any unauthorized use will invite trademark infringement.
          </p>
          <p className="mt-4">
            © 2025 Drippfix - All rights reserved.{' '}
            <a href="#" className="text-blue-300 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
