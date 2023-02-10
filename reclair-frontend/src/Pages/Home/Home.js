import React from 'react';

import Contact from '../Contact/Contact';
import SignUp from '../SignUp/SignUp';
import About from '../About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;