import React from 'react';
import { FaClock, FaShieldAlt, FaCreditCard, FaHeadphones, FaMapPin, FaStar} from "react-icons/fa";
import './WhyChooseUs.css'

const WhyChooseUs = () => {

    const features = [
        {
            id: 1,
            icon: FaShieldAlt,
            title: "Fully Insured",
            description: "Comprehensive coverage on all vehicles"
        },
        {
            id: 2,
            icon: FaClock,
            title: "24/7 Support",
            description: "Round-the-clock assistance whenever you need"
        },
        {
            id: 3,
            icon: FaCreditCard ,
            title: "Best Prices",
            description: "Price match guarantee on all rentals"
        },
        {
            id: 4,

            icon: FaHeadphones ,
            title: "Expert Service",
            description: "Professional support from booking to return"
        },
        {
            id: 5,
            icon: FaMapPin ,
            title: "Multiple Locations",
            description: "Pick up and drop off at 50+ locations"
        },
        {
            id: 6,    
            icon: FaStar ,
            title: "Premium Fleet",
            description: "Well-maintained, latest model vehicles"
        }
    ];

    return (
        <div data-aos="fade-left" className="mt-25 mx-5 xl:mx-5 2xl:mx-0 text-center">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#2D336B]">
                Why Choose Us?
            </h1>
            <p className='text-xl text-[#2D336B] mt-2 mb-12 max-w-[500px] w-full mx-auto text-center'>Experience the difference with our premium service and commitment to excellence</p>

            <div className='features'>
                <div className="feature_div">
                    {
                        features.map(feature => (
                            <div key={feature.id} className='single_feature '>
                                <div className='icon_div'>
                                    <feature.icon className='icon'/>
                                </div>
                                <div>
                                    <h1 className='feature_title'>{feature.title}</h1>
                                    <p className='feature_desc'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
