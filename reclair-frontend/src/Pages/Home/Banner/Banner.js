import React from 'react';
import slide1 from '../../../images/about/1.jpg';
import slide2 from '../../../images/about/2.jpg';
import slide3 from '../../../images/about/3.jpg';
const Banner = () => {
  return (
    <div>
      <h4 className='text-center font-bold text-2xl'>Pioneers of Solar and Renewable Energy</h4>
<div className="carousel w-full">
<div id="item1" className="carousel-item w-full">
<img src={slide1} className="w-full" />
</div> 
<div id="item2" className="carousel-item w-full">
<img src={slide2} className="w-full" />
</div> 
<div id="item3" className="carousel-item w-full">
<img src={slide3} className="w-full" />
</div> 

</div> 
<div className="flex justify-center w-full py-2 gap-2">
<a href="#item1" className="btn btn-xs">1</a> 
<a href="#item2" className="btn btn-xs">2</a> 
<a href="#item3" className="btn btn-xs">3</a> 

</div>
    </div>
);
};

export default Banner;