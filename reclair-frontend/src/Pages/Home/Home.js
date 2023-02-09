import React from 'react';
import SignUp from '../SignUp/SignUp';
import Banner from './Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <About></About>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;