import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import RecentListing from '../../Components/RecentListing/RecentListing';
import SuccessWall from '../../Components/SuccessWall/SuccessWall';
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const carData = useLoaderData();
    // console.log(carData)
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentListing carData={carData}></RecentListing>
            <SuccessWall></SuccessWall>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;