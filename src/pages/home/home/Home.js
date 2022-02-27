import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import Banner from '../banner/Banner';
import Schedule from '../schedule/Schedule';
import Services from '../services/Services';
import Footer from '../../shared/footer/footer'
import Review from '../review/Review';
import DentalAbout from '../dentalAbout/DentalAbout';
import Article from '../article/Article';
import Doctor from '../doctor/Doctor';
const Home = () => {
    return (
        <div>
            <Navigation/> 
            <Banner/>
            <Schedule/>
            <Services/>
            <DentalAbout/>
            <Review/>
            <Article/>
            <Doctor/>
            <Footer/>
        </div>
    );
};

export default Home;