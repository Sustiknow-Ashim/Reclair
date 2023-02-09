import React from 'react';
import card2 from '../../images/about/editor.svg';
import card1 from '../../images/about/check-mark.svg';
import card3 from '../../images/about/envelope.svg';
import why from '../../images/about/1.jpg';
const About = () => {
    return (
        <div>
        <div>
            <h1 className='text-center font-bold text-2xl py-3'>Explore to the World of Aspiration</h1>
            <h5 className='text-center font semi-bold text-xl'>Know how we are trasforming the ecosystem for the Organization and Investors</h5>

        </div>

        <div className='grid md:grid-cols-3  lg:grid-cols-3 gap-4'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl  ">
                    <figure><img className='w-20' src={card1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Organization</h2>
                        <p>Get 100% uninterrupted Power Supply at much less cost per month than
                            from the conventional sources with Zero Setup Cost for first 25 years. Then with Zero cost
                            and the Solar Plant is yours.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary ">Know More</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-20' src={card2} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Investors</h2>
                        <p>Invest Directly in Solar and get monthly return. Get atleast 5 times
                            in next 25 years</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-20' src={card3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nature</h2>
                        <p>Since we deal in green energy, we help in carbon footprint reduction
                            of the Earth by 15%, co2 emission reduction, increase cool effect and make nature better and
                            beautiful place for all of us.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Know More</button>
                        </div>
                    </div>
                </div>

            </div>


        <div className='grid grid-cols-2 gap-2 py-5 px-5'>
            <div>
                <h1 className='text-center font-bold text-lime-400 text-xl'>Why Choose Us!</h1>
                <h2 className='text-center font-semibold text-red-500'>Complete Commercial & Residential Solar Systems</h2>
                <p>Good We provides a solution to generate clean electricity for your own solar-powered home. When it comes to residential solutions featuring superior safety and easy installation, GoodWe is the ideal choice for homeowners to going solar. Enjoy your unparalleled experience of green energy, optimal solar energy usage, reduced electricity bills and much more.Exploring and utilizing smart technologies and advanced expertise, Goodwe is relentless about offering users residential & small C&I storage solutions to protect users from rising electricity costs. We strive to create reliable solutions for users to maximize self-consumption, ensure power safety during an outage, take smart control of home power management, and realize energy independence.


                </p>
            </div>
            <div>
                <img className='w-90' src={why} />
            </div>
        </div>
        <div>
            <h2 className="text-center font-bold text-3xl py-3">Success Story</h2>
            <h5 className='text-center font-semibold'>12 + Clients across India and counting... </h5>
            <h6 className='text-center'>We have a strong foundation built on legacy and emerging technologies, including excellent track
                record of on-time deliveries.</h6>
            <a className="btn btn-outline btn-accen mx-auto" >View all services</a>
        </div>
        <div className=' py-3'>
            <h4 className="text-center text-3xl font-extrabold">Let's Start a new Project together!</h4>
            <button className="btn btn-outline btn-info ">Let's Discuss</button>
        </div>
    </div>
    );
};

export default About;
