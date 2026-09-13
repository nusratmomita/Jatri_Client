import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import RecentListing from '../../Components/RecentListing/RecentListing';
import { useLoaderData } from 'react-router';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
    const carData = useLoaderData();
    // console.log(carData) border-4 border-black md:border-green-900 lg:border-blue-900 xl:border-red-900 2xl:border-violet-400
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <RecentListing carData={carData}></RecentListing>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;