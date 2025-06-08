import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import RecentListing from '../../Components/RecentListing/RecentListing';
import SuccessWall from '../../Components/SuccessWall/SuccessWall';
import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentListing></RecentListing>
            <SuccessWall></SuccessWall>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;