import React from 'react';
import BannerImg from '../../../images/banner/bann.jpeg';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(${BannerImg})` }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-base-100">Hello there</h1>
            <p className="py-6 text-neutral-focus">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;