import React from 'react';
import BannerImg from '../Banner/84.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(${BannerImg})` }}>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl py-6 font-bold text-base-100">The only Platform to Invest Directly in Solar</h1>
            {/* <p className="py-6 text-primary-content">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;