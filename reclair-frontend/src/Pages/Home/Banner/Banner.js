import React from 'react';
import PopupModel from '../../../Component/PopupModel';

import BannerImg from '../../../images/banner/bann.jpeg';


const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-xl " style={{backgroundImage: `url(${BannerImg})` }}>
        <div className="hero-content text-center">
          {/* <h2> Do you want to install a solar plant but do not want to spent money?? </h2>
          <a href="/solarEnquery"> Contact us for solution</a> */}

          {/* We do solar project with our own investment and sell solar energy to you ==> (in the solarEnquery page)  */}
          <div className="max-w-lg className='z-40'">
            <h1 className="text-4xl py-6 font-bold text-base-100">The only Platform to Invest Directly in Solar Project</h1>
            {/* <p className="py-6 text-primary-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            {/* <button className="btn btn-primary">Get Started</button> */}
            <PopupModel /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;