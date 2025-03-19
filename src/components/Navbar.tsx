'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <Image
                alt="Drippfix logo"
                src="/prf3.png"
                width={100}
                height={100}
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Main navigation and button */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#37589d] font-medium"
                >
                  Application Area
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#37589d] font-medium"
                >
                  How To Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#37589d] font-medium"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-[#37589d] font-medium"
                >
                  Resources
                </a>
              </li>
            </ul>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-3">
              <li>
                <a
                  href="#"
                  className="text-[#37589d] hover:text-[#37589d] text-lg"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#37589d] hover:text-[#37589d] text-lg"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#37589d] hover:text-[#37589d] text-lg"
                >
                  <FaPhone />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#37589d] hover:text-[#37589d] text-lg"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-[#37589d]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-2 px-4">
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-[#37589d] font-medium py-2"
                >
                  Application Area
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-[#37589d] font-medium py-2"
                >
                  How To Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-[#37589d] font-medium py-2"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-[#37589d] font-medium py-2"
                >
                  Resources
                </a>
              </li>
            </ul>
            <div className="mt-4 px-4">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
                Buy Now
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href="#"
                className="text-[#37589d] hover:text-[#37589d] text-lg"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[#37589d] hover:text-[#37589d] text-lg"
              >
                <FaEnvelope />
              </a>
              <a
                href="#"
                className="text-[#37589d] hover:text-[#37589d] text-lg"
              >
                <FaPhone />
              </a>
              <a
                href="#"
                className="text-[#37589d] hover:text-[#37589d] text-lg"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
