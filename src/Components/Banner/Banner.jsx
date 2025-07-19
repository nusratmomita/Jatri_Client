import React from 'react';
import { Link } from 'react-router'; // corrected from 'react-router' to 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import bannerCars from '../../assets/bannerCars2.jpg'; // Assuming you have a local image, otherwise use the URL directly

const Banner = () => {
    return (
        <div className="mt-50 mx-20 rounded-3xl relative h-[500px] text-white overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src={bannerCars}
                    alt="Background" 
                    className="object-cover object-center w-full h-full" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -200 }}
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
                        className="bg-gradient-to-r from-[#5b51a2] to-[#7886C7] text-white py-3 px-8 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                    >
                        View Available Cars
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
