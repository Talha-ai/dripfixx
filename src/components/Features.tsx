import Image from 'next/image';
import React from 'react';
import {
  FaShieldAlt,
  FaWater,
  FaLeaf,
  FaPaintRoller,
  FaRegClock,
} from 'react-icons/fa';

const Features = () => {
  const features = [
    { icon: <FaPaintRoller />, value: '950%', label: 'Stretchable' },
    { icon: <FaWater />, value: '100%', label: 'Waterproof' },
    { icon: <FaShieldAlt />, value: '95%', label: 'UV Resistant' },
    { icon: <FaLeaf />, value: '0%', label: 'Eco-Friendly' },
    { icon: <FaRegClock />, value: '15+ Years', label: 'Durability' },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Features Grid */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0000FF]">
            Key Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center"
              >
                <div className="text-[#0000FF] text-4xl mb-2">
                  {feature.icon}
                </div>
                <span className="text-2xl font-bold text-red-600 mt-2">
                  {feature.value}
                </span>
                <span className="text-gray-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Info */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-[#0000FF]">
            Direct Application on Any Surface
          </h3>
          <p className="text-gray-700 mb-6">
            Application on any surface without primer is one of many unique
            features of Drippfix® - Liquid Rubber that leverage the end user to
            think beyond limit of architectural challenges while choosing
            waterproofing and corrosion protection solution. In addition,
            Drippfix® - Liquid Rubber is TOP COAT COMPATIBLE with any
            water-based paint to meet aesthetic requirements.
          </p>

          <div className="flex justify-center">
            <Image
              src="/RPP1-removebg.png"
              alt="Drippfix Liquid Rubber"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Characteristics */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/RPP1-removebg.png"
              alt="Drippfix Liquid Rubber"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0000FF] mb-4">
              Unique Product with Unique Characteristics
            </h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>
                The upper facing of the coreless waterproofing self-adhesive
                membrane BM SELF serves dual purposes: reinforcement and extra
                protection.
              </li>
              <li>Cold applied, no heating required</li>
              <li>Easy, swift, and clean to install</li>
              <li>Permanent flexibility and safeguard against water</li>
              <li>Effective barrier for both water and vapor</li>
              <li>Absorbs substrate movement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
