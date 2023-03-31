import React from 'react';
import about1 from '../../images/about/about1.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-yellow-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl">
              About Us
            </h2>
           <h1 className='text-2xl font-extrabold text-black '>
            Vision Solar System:
           </h1>
           <div className="card w-96 bg-primary text-primary-content ">
  <div className="card-body py-5">

    <p>Established in the year 2022 at Kolkata, Kasba, We "Reclair Energy” are a Private  based firm, engaged as the foremost Manufacturer Of Water Heater and Solar Street Light etc.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
   
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
