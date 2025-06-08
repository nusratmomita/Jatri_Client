import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import RecentListing from '../../Components/RecentListing/RecentListing';
import SuccessWall from '../../Components/SuccessWall/SuccessWall';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentListing></RecentListing>
            <SuccessWall></SuccessWall>
        </div>
    );
};

export default Home;