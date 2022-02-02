import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import Banner from '../banner/Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/> 
            <Banner/>
            <Services/>
        </div>
    );
};

export default Home;