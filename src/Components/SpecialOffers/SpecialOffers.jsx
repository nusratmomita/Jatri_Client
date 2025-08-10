import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
const SpecialOffers = () => {
    return (
         <div className='mt-40 mb-20 text-center'>
             <h1 className="text-5xl md:text-6xl font-bold text-[#2D336B] mb-12">
                [ Special Offers ]
            </h1>
            <section className="py-7 m-25 bg-gradient-to-br from-[#E0E7FF] to-[#F3F4F6] rounded-4xl text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#2D336B] mb-12 ">🔥 Special Offers Just for You</h2>
                <div className="flex items-center justify-center winky-rough-regular mb-10 max-w-6xl mx-auto">
                
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="w-[200px] lg:ml-0 lg:w-full bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-[#493D9E] mb-3">🚗 Get 15% off for weekend rentals!</h3>
                        <p className="text-[#4B5563] mb-5">Book your weekend escape now and enjoy discounted rates on all rides.</p>
                        <Link to='/availableCars'> 
                            <button className="cursor-pointer bg-gradient-to-r from-[#5b51a2] to-[#7886C7] text-white px-6 py-2 rounded-full hover:bg-[#372f86] transition-all duration-300">
                                Book Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SpecialOffers;