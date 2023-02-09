import React from 'react';
import Contact from '../Contact/Contact';
import SignUp from '../SignUp/SignUp';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Contact></Contact>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;