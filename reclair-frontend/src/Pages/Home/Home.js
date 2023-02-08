import React from 'react';
import About from '../About/About';
import SignUp from '../SignUp/SignUp';
import Banner from './Banner/Banner';

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