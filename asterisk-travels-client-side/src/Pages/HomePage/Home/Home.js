import React from 'react';
import Banner from '../Banner/Banner';
import HappyTravellers from '../HappyTravellers/HappyTravellers';
import Packages from '../Packages/Packages';
import FAQ from '../FAQ/FAQ'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <HappyTravellers></HappyTravellers>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;