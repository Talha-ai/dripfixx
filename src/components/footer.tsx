import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const PartnerSection = () => {
  return (
    <div className="text-center px-6 md:px-12 py-10">
      <h2 className="text-4xl font-bold ">Become a Partner</h2>
      <p className="mt-4 ">
        We are actively recruiting Dealers, Applicators, and Consultants across
        India. We can grow hand-in-hand if you belong to industries such as
        Waterproofing, Corrosion Protection, Chemical Protection, Engineered
        Coatings, or Related Industrial Products.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        Know More
      </button>
    </div>
  );
};

const SupportSection = () => {
  return (
    <div className="text-center px-6 md:px-12 py-6 w-full my-10">
      <h3 className="text-4xl  font-semibold  mb-10">Quick Support</h3>
      <div className="flex justify-center items-center gap-5 text-xl mb-10">
        <p className="mt-2 ">
          📞 <span className="font-medium">9999999999</span>
        </p>
        <p className="mt-2 flex gap-2 items-center ">
          <FaWhatsapp size={20} />{' '}
          <span className="font-medium">9999999999</span>
        </p>
        <p className="">
          📧
          <a href="mailto:support@elephantshield.com" className=" underline">
            support@elephantshield.com
          </a>
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-center w-full text-sm px-6 py-4 bg-gray-900 text-white">
      <p>
        Drippfix owns the Trademark, Formulation, & Copyrights and is authorized
        for marketing, distribution, training, and appointing
        dealers/distributors for all Drippfix Products.
      </p>
      <p className="mt-2">
        Any unauthorized use will invite trademark infringement.
      </p>
      <p className="mt-4">
        © 2025 Drippfix - All rights reserved.{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center w-full text-white">
      <PartnerSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default MainComponent;
