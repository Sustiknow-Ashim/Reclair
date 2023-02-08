import React from 'react';
import SignUp from '../SignUp/SignUp';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;