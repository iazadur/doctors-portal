import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import InfoCard from './../InfoCard/InfoCard'
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <InfoCard />
            <Services />
            <AppoinmentBanner />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;