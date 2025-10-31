import React from 'react';
import { FaClock, FaShieldAlt, FaCreditCard, FaHeadphones, FaMapPin, FaStar} from "react-icons/fa";

const WhyChooseUs = () => {

    const features = [
        {
            icon: FaShieldAlt,
            title: "Fully Insured",
            description: "Comprehensive coverage on all vehicles"
        },
        {
            icon: FaClock,
            title: "24/7 Support",
            description: "Round-the-clock assistance whenever you need"
        },
        {
            icon: FaCreditCard ,
            title: "Best Prices",
            description: "Price match guarantee on all rentals"
        },
        {
            icon: FaHeadphones ,
            title: "Expert Service",
            description: "Professional support from booking to return"
        },
        {
            icon: FaMapPin ,
            title: "Multiple Locations",
            description: "Pick up and drop off at 50+ locations"
        },
        {
            icon: FaStar ,
            title: "Premium Fleet",
            description: "Well-maintained, latest model vehicles"
        }
    ];

    return (
        <div data-aos="fade-left" className="mt-40 my-24 px-5 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2D336B]">
                [ Why Choose Us? ]
            </h1>
            <p className='text-2xl text-[#2D336B] mt-4  mb-12'>Experience the difference with our premium service and commitment to <br />excellence</p>

            <div>
                
            </div>
        </div>
    );
};

export default WhyChooseUs;
