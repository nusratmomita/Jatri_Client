import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { CiSearch } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { LuKeyRound } from "react-icons/lu";


const HowItWorks = () => {

    const workingSteps = [
        {
            id: 1,
            icon: CiSearch,
            title: "Choose Your Car",
            description: "Browse our extensive fleet and select the perfect vehicle for your needs."
        },
        {
            id: 2,
            icon: MdOutlineDateRange,
            title: "Book Instantly",
            description: "Pick your dates, add any extras, and complete your reservation in minutess."
        },
        {
            id: 3,
            icon: LuKeyRound,
            title: "Hit the Road",
            description: "Pick up your car and enjoy your journey with 24/7 roadside assistance."
        },
    ]
    return (
        <div className="mt-25 mx-5 xl:mx-5 2xl:mx-0 text-center mb-10">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#2D336B]">
                How It Works
            </h1>
            <p className='text-xl text-[#2D336B] mt-2 mb-12 max-w-[500px] w-full mx-auto text-center'>
                Renting a car has never been easier. Get on the road in three simple steps
            </p>
            <div className='lg:-mt-5 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0'>
                {
                    workingSteps.map((step,index) => (
                        // console.log(step)
                        <div key={step.id} className='flex flex-col justify-center items-center relative'>
                            {
                                index < workingSteps.length - 1 && 
                                (<div className='hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-[#493D9E] -z-10'></div>)
                            }
                            <div className='relative bg-linear-to-b from-[#1c214a] to-[#B2A5FF] text-white rounded-full w-[140px] h-[140px] p-4 flex justify-center items-center text-6xl'>
                                <step.icon/>
                                <h4 className='absolute bottom-0 right-0 bg-[#FFF2AF] text-[#1c214a] w-10 h-10 rounded-full text-xl font-semibold flex justify-center items-center'>
                                    {step.id}
                                </h4>
                            </div>
                            <h3 className='mt-2 font-semibold text-3xl text-[#2D336B]'>{step.title}</h3>
                            <p className='mt-2 font-medium text-xl text-[#493D9E] max-w-[350px] w-full'>{step.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;