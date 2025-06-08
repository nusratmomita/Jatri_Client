import React from 'react';
import successAnimation from '../../assets/successAnimation.json';
import Lottie from 'lottie-react';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa6";
import CountUp from 'react-countup';
import { GiJourney } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const SuccessWall = () => {
    return (
        <div className='mt-40 my-24 px-5 text-center'>
            <h1 className="text-5xl md:text-6xl font-bold text-[#493D9E] mb-12">
                [ Success Wall ]
            </h1>
            <div className='winky-rough-regular lg:flex justify-evenly'>
                <Lottie style={{width : "420px"}} animationData={successAnimation} loop={true}></Lottie>
                <div className='grid lg:grid-cols-1'>
                    <motion.div className='bg-[#7886C7] p-2 mt-20 w-110 h-40 rounded-3xl'
                        animate={{x: [-190,190,190]}}
                        transition={{duration: 4, repeat:Infinity}}>
                        <h1 className='mt-4 text-center flex flex-row-reverse gap-1 justify-center items-center text-3xl font-bold text-[#FFF2AF]'> <span className='underline'> <CountUp start={0} end={1500}></CountUp>+</span> Total Happy customers  <FaPeopleGroup size={30}></FaPeopleGroup></h1>
                        <p className='mt-4 text-left text-[#FFF2AF] font-medium text-xl'>We have 1500+ satisfied customers in our Jatra Family! So Join without any worry</p>
                    </motion.div>
                    <motion.div className='bg-[#c2bae8] p-2 mt-20 w-110 h-40 rounded-3xl'
                        animate={{y: [-105,10,10]}}
                        transition={{duration: 5, repeat:Infinity}}>
                        <h1 className='mt-4 text-center flex flex-row-reverse gap-1 justify-center items-center text-3xl font-bold text-[#2D336B]'> <span className='underline'> <CountUp start={0} end={2000}></CountUp>+</span> Total Verified Cars  <FaCarSide size={30}></FaCarSide></h1>
                        <p className='mt-4 text-left text-[#2D336B] font-medium text-xl'>We have 2000+ registered cars! So no need to worry about your safety.</p>
                    </motion.div>
                    <motion.div className='bg-[#7886C7] p-2 mt-20 w-110 h-40 rounded-3xl'
                        animate={{x: [-190,190,190]}}
                        transition={{duration: 4, repeat:Infinity}}>
                        <h1 className='mt-4 text-center flex flex-row-reverse gap-1 justify-center items-center text-3xl font-bold text-[#FFF2AF]'> <span className='underline'> <CountUp start={0} end={1000}></CountUp>+</span> Total Successful rides  <GiJourney size={30}></GiJourney></h1>
                        <p className='mt-4 text-left text-[#FFF2AF] font-medium text-xl'>We have successfully completed 1000+ rides so far! What's stopping you from joining then?.</p>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default SuccessWall;