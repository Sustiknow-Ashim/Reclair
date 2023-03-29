import React from 'react';
import about1 from '../../images/about/about1.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <h1 className="mt-3 max-w-3xl  font-semibold text-red-600 text-2xl">
              Vision: Empower a billion lives through sustainable, affordable & innovative energy solutions.
            </h1>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="mx-auto h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={about1}
              alt="Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
