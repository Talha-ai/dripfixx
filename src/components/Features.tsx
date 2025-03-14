import Image from 'next/image';
import React from 'react';
import { FaPaintRoller } from 'react-icons/fa6';

const Features = () => {
  return (
    <div className="relative">
      <div className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaPaintRoller size={45} />
              <span className="mt-2">950%</span>
              <span>Strechable</span>
            </div>
          </div>
          <div className="max-w-5xl my-10 mx-auto mt-10 h-[1px] bg-gray-500"></div>

          <div>
            <p>
              Direct Application on Any Surface, Application on any surface
              without primer is one of many unique features of &quot;Elephant
              Shield&apos;s - Liquid Rubber ®&quot; that leverage the end user
              to think beyond limit of architectural challenges while choosing
              waterproofing and corrosion protection solution. In addition,
              Elephant Shield’s - Liquid Rubber® is TOP COAT COMPATIBLE with any
              water-based paint to meet aesthetic requirements. Limitless
              Applications of Elephant Shield&apos;s - Liquid Rubber® for
            </p>

            <Image
              src="/RPP1-removebg.png"
              alt="Elephant Shield's Liquid Rubber"
              width={400}
              height={400}
              className="object-contain mx-auto mt-10"
            />
          </div>

          <div className="max-w-5xl my-10 mx-auto mt-10 h-[1px] bg-gray-500"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-full px-6 md:px-12 py-10">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/RPP1-removebg.png"
                alt="Elephant Shield's Liquid Rubber"
                width={400}
                height={400}
                className="object-contain rounded-full"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
              <h1 className="text-2xl font-bold text-white">
                Unique Product with <br className="hidden md:block" /> Unique
                Characteristics
              </h1>
              <ol className="mt-4 space-y-3 text-white list-disc list-inside">
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
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
