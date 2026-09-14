import React from 'react';
import { MdOutlineCheck } from "react-icons/md";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (
       <footer className="flex lg:flex-row flex-col space-y-10 bg-linear-to-r from-[#2D336B] via-[#493D9E] to-[#2D336B] text-white p-15 border-4 border-transparent">
            <div className="lg:w-1/2 w-full">
                <h3 className="text-5xl font-bold max-w-[450px] w-full">Ready to Book Your Perfect Car?</h3>
                <p className="text-2xl font-medium mt-4 max-w-[550px] w-full">Join with customers who've saved money on their car rentals. Book now and enjoy reliable, affordable transportation.</p>
                <div className="mt-4 flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2">
                        <MdOutlineCheck size={20} className="text-[#2D336B] bg-[#FFF2AF] rounded-full"/>
                        <h4>No Credit Card Required for Reservation</h4>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <MdOutlineCheck size={20} className="text-[#2D336B] bg-[#FFF2AF] rounded-full"/>
                        <h4>Cancel @ any time</h4>
                    </div>
                    <div className="flex  items-center gap-2">
                        <MdOutlineCheck size={20} className="text-[#2D336B] bg-[#FFF2AF] rounded-full"/>
                        <h4>Unlimited Mileage on All Rentals</h4>
                    </div>
                </div>
                <Link to="/availableCars" className='px-6 py-4 w-[220px] flex items-center gap-2 bg-[#FFF2AF] text-[#2D336B] text-lg text-center font-semibold rounded-lg cursor-pointer'>
                    Book your car now <FaArrowRight />
                </Link>
            </div>
            <div className="lg:w-1/2 w-full ">
                <div className="h-[150px] flex flex-wrap gap-5 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all">
                    <div>
                        <div className="flex gap-4 items-center">
                            <FiPhoneCall size={30} className="text-[#2D336B] bg-[#FFF2AF] rounded-md p-2 w-12 h-12"/>
                            <div className="text-[#DAD2FF]">
                                <h4>Phone Support</h4>
                                <h3>017-000-000</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <FaRegAddressCard size={30} className="text-[#2D336B] bg-[#FFF2AF] rounded-md p-2 w-12 h-12"/>
                            <div className="text-[#DAD2FF]">
                                <h4>Sylhet</h4>
                                <h3>Bangladesh</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <MdOutlineAlternateEmail size={30} className="text-[#2D336B] bg-[#FFF2AF] rounded-md p-2 w-12 h-12"/>
                            <div className="text-[#DAD2FF]">
                                <h4>Email</h4>
                                <h3>nusrat@gmial.com</h3>
                            </div>
                        </div>
                    </div>
                    <p className="text-center w-full">Available 24/7 for any questions</p>
                </div>
                <div className="mt-20 flex items-center gap-4">
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[450px] p-5 rounded-lg border-2 border-white focus:outline-none text-lg font-semibold"/>
                    <button className='p-5 w-[110px] flex items-center gap-2 bg-[#FFF2AF] text-[#2D336B] text-lg text-center font-semibold rounded-lg cursor-pointer'>
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;