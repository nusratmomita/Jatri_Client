import React from 'react';
import { Link } from 'react-router'; // corrected from 'react-router' to 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import bannerCars from '../../assets/bannerCars.jpg'; // Assuming you have a local image, otherwise use the URL directly

const Banner = () => {
    return (
        <div className="m-20 rounded-3xl relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src={bannerCars}
                    alt="Background" 
                    className="object-cover object-center w-full h-full" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <motion.h1
                    initial={{ opacity: 7, y: -200 }}
                    animate={{ opacity: 4, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-6xl md:text-7xl text-white font-extrabold leading-tight mb-6 animate-pulse"
                >
                    Drive Your Dreams Today!!
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 2.8 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <Link 
                        to='/availableCars' 
                        className="bg-white text-gray-900 hover:bg-[#B2A5FF] py-3 px-8 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                    >
                        View Available Cars
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
