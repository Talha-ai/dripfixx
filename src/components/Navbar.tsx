import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-transparent z-50 bg-gradient-to-b from-black/80 to-transparent pt-2">
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
                <a href="#" className=" hover:text-blue-500 font-medium">
                  Application Area
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 font-medium">
                  How To Use
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 font-medium">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 font-medium">
                  Resources
                </a>
              </li>
            </ul>

            <button className="bg-blue-500 hover:bg-blue-600  px-4 py-2 rounded-md font-medium transition duration-300">
              Buy Now
            </button>
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-3">
              <li>
                <a href="#" className=" hover:text-blue-500 text-xl">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 text-xl">
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 text-xl">
                  <FaPhone />
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-blue-500 text-xl">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button - can be expanded in the future */}
          <div className="md:hidden flex items-center">
            <button className=" hover:text-blue-500">
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
      </div>
    </nav>
  );
};

export default Navbar;
