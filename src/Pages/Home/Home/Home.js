import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import InfoCard from './../InfoCard/InfoCard'
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <InfoCard />
            <Services />
            <AppoinmentBanner />
        </>
    );
};

export default Home;