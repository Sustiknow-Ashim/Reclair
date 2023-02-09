import React from 'react';
import card2 from '../../images/about/check-mark.svg';
import card1 from '../../images/about/envelope.svg';
import card3 from '../../images/about/envelope.svg';
import why from '../../images/about/1.jpg';
const About = () => {
    return (
        <div className='container mx-auto justify-center'>
            <div>
                <h1 className='text-center font-bold text-2xl py-3 mt-4'>Explore to the World of Aspiration</h1>
                <h5 className='text-center font semi-bold text-xl mb-4'>Know how we are trasforming the ecosystem for the Organization and Investors</h5>

            </div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-4 md:gap-3 sm:gap-2 '>

                <div className="card card-compact w-auto bg-base-100 shadow-xl  ">
                    <figure><img className='w-20' src={card1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center my-3">Organization</h2>
                        <p>Get 100% uninterrupted Power Supply at much less cost per month than
                            from the conventional sources with Zero Setup Cost for first 25 years. Then with Zero cost
                            and the Solar Plant is yours.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary my-3 ">Know More</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-auto bg-base-100 shadow-xl">
                    <figure><img className='w-20' src={card2} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center my-3">Investors</h2>
                        <p>Invest Directly in Solar and get monthly return. Get atleast 5 times
                            in next 25 years</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary my-3">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-auto bg-base-100 shadow-xl">
                    <figure><img className='w-20' src={card3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center my-3" >Nature</h2>
                        <p>Since we deal in green energy, we help in carbon footprint reduction
                            of the Earth by 15%, co2 emission reduction, increase cool effect and make nature better and
                            beautiful place for all of us.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary my-3">Know More</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' mx-auto my-12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-evenly'>
                    <div className='m-2'>
                        <img className='w-90 rounded' src={why} alt='solar Image' />
                    </div>
                    <div className='justify-end mx-4 '>
                        <h1 className='text-center font-bold text-lime-400 text-xl mb-2'>Why Choose Us!</h1>
                        <h2 className='text-center font-semibold text-red-500 my-1'>Complete Commercial & Residential Solar Systems</h2>
                        <p className='text-justify lg:text-xl sm:text-sm '>Good We provides a solution to generate clean electricity for your own solar-powered home. When it comes to residential solutions featuring superior safety and easy installation, GoodWe is the ideal choice for homeowners to going solar. Enjoy your unparalleled experience of green energy, optimal solar energy usage, reduced electricity bills and much more.Exploring and utilizing smart technologies and advanced expertise, Goodwe is relentless about offering users residential & small C&I storage solutions to protect users from rising electricity costs. We strive to create reliable solutions for users to maximize self-consumption, ensure power safety during an outage, take smart control of home power management, and realize energy independence.</p>
                    </div>
                </div>
            </div>
            <div className='container  justify-center'>
                <h2 className="text-center font-bold text-3xl py-3">Success Story</h2>
                <h5 className='text-center font-semibold my-2 text-xl'>12 + Clients across India and counting... </h5>
                <h6 className='text-center text-lg'>We have a strong foundation built on legacy and emerging technologies, including excellent track
                    record of on-time deliveries.</h6>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-outline btn-accen mx-auto" >View all services</button>
                </div>

            </div>
            <hr className='my-6'/>
            <div className=''>
                <h4 className="text-center text-3xl font-extrabold">Let's Start a new Project together!</h4>
                <div className="card-actions justify-center my-6">
                    <button className="btn btn-outline btn-info mx-auto" >Let's Discuss</button>
                </div>
            </div>
        </div>
    );
};

export default About;