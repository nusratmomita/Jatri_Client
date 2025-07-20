import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Car from '../../assets/Car.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";


const AvailableCars = () => {
    const [toggleStyle , setToggleStyle] = useState(true);
    const [cars , setCars] = useState(useLoaderData());
    const [searchText , setSearchText] = useState('');
    const [sortBy , setSortBy] = useState("");

    useEffect(() => {
        if (!sortBy) return;
        const url = `https://jatri-server.vercel.app/cars?sort=${sortBy}`
        fetch(url)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setCars(data)});
        }, 
      [sortBy]);
   
    const addedCarDate = (CarDate) => {
        const date = new Date(CarDate);
        const day = date.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];


        const suffix = (day === 1 || day === 21 || day === 31) ? 'st'
                    : (day === 2 || day === 22) ? 'nd'
                    : (day === 3 || day === 23) ? 'rd'
                    : 'th';
        // console.log(day,month,suffix)
        return `${day}${suffix} ${month}`;
    }
   
    const handleToggleBtn = () => {
        setToggleStyle(!toggleStyle);
    }

    const handleSearch = () => {
        fetch(`https://jatri-server.vercel.app/cars?searchText=${searchText}`)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            setCars(data);
        })
    }

    return (
        <div className='mt-30 winky-rough-regular'>
            <div className='flex justify-between items-center'>
                <h1 className='ml-30 text-5xl font-bold mt-20 text-violet-900'>
                    Total Available Car(s): {cars.length}
                </h1>
                <div className='w-[180px] mr-10'>
                    {
                        toggleStyle ? 
                        <button onClick={handleToggleBtn} className='flex gap-5 justify-center items-center cursor-pointer w-full mr-20 mt-20 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-4 text-2xl font-bold text-black shadow-md hover:shadow-xl transition duration-300'>
                            <FaListUl></FaListUl>List View
                        </button>
                        :
                        <button onClick={handleToggleBtn} className='flex gap-5 justify-center items-center cursor-pointer w-full mr-20 mt-20 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-4 text-2xl font-bold text-black shadow-md hover:shadow-xl transition duration-300'>
                            <BsFillGridFill></BsFillGridFill>Grid View
                        </button>
                    }
                </div>
            </div>
            <div className='flex '>
                <div>
                    <div className='m-10 flex flex-col '>
                        <label className="input mt-20 w-[150%]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" 
                                className="grow text-xl font-bold text-black"
                                value={searchText} 
                                onChange={(e) => {
                                        setSearchText(e.target.value);

                                        if(e.target.value === ''){
                                            fetch("https://jatri-server.vercel.app/cars")
                                            .then(res=>res.json())
                                            .then(data=>{
                                                setCars(data);
                                            })
                                        }
                                    }
                                    
                                } 
                                onKeyDown={(e)=>{
                                    if(e.key === "Enter"){
                                        handleSearch();
                                    }
                                }}
                                
                                placeholder="Search..." />
                        </label>
                        <select onChange={(e) => setSortBy(e.target.value)} defaultValue="Sort by.." className="mt-20 text-xl font-bold select w-[150%]">
                            <option disabled value="">Sort by..</option>
                            <option value="Oldest">Sort by Date:(Oldest)</option>
                            <option value="Newest">Sort by Date:(Newest)</option>
                            <option value="Lowest">Sort by Price:(Lowest)</option>
                            <option value="Highest">Sort by Price:(Highest)</option>
                        </select>
                    </div>
                </div>
                <div>
                    {
                    cars.length === 0 ?
                    <div className="mt-40 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#f4f4f8] to-[#eae6ff] rounded-3xl p-10 shadow-lg max-w-xl mx-auto">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#2D336B] mb-4">
                        🚗 Alas! No Car named or located with "{searchText}"
                        </h1>
                    </div>
                    :
                    toggleStyle ? 
                    <div className='m-10 lg:m-30 grid justify-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {cars.map((car) => (
                        <div
                            key={car._id}
                            className="relative card h-[570px] bg-gradient-to-l from-[#FFF2F2] to-[#A9B5DF] rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="absolute top-4 right-4 bg-white/80 px-4 py-1 rounded-full text-xl text-gray-700 font-semibold shadow-md">
                                📍 {car.car_location}
                            </div>

                            <figure className="px-6 pt-6">
                                <img
                                    src={car.car_image}
                                    alt={car.car_model}
                                    className="rounded-2xl w-full h-38 object-cover shadow-md"
                                />
                            </figure>

                            <div className="card-body text-left px-6 pb-6">
                                <h2 className="card-title text-3xl font-bold text-violet-900 mb-2">
                                    {car.car_model}
                                </h2>

                                <ul className="list-disc list-inside space-y-1 text-lg text-gray-800 mb-4">
                                    {car.car_description.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>
                                <div>
                                    <h1 className='flex items-center gap-2 text-lg'>Daily Rent: <span className='flex justify-center items-center gap-1 text-2xl'><FaSackDollar size={20} color='purple'></FaSackDollar>{car.rental_price} /day</span></h1>
                                    <h1 className='text-lg'>Added On: <span className='text-2xl'>{addedCarDate(car.date)}</span></h1>
                                </div>
                                <h2 className="flex gap-1 justify-center items-center rounded-3xl border-purple-300 bg-purple-200 w-1/3 text-center p-3 text-lg font-medium  text-violet-900 mb-2">
                                    <IoMdCheckmarkCircleOutline size={30}></IoMdCheckmarkCircleOutline>{car.status}
                                </h2>
                                
                                <div className="card-actions mt-auto">
                                    <Link to={`/carDetails/${car._id}`} className="w-full flex justify-center items-center gap-4 cursor-pointer py-2 
                                        rounded-xl bg-gradient-to-r from-[#493D9E] to-[#7886C7] text-white text-lg 
                                        font-semibold hover:brightness-110 transition duration-300">          
                                    <img className="w-12 h-12" src={Car} alt="car" />
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    :
                    <div className='m-10 lg:m-30 grid justify-center items-center gap-10 grid-rows-1 md:grid-rows-2 lg:grid-rows-3'>
                    
                        {cars.map((car) => (
                            <div
                                key={car._id}
                                className="relative w-[460px] lg:w-[1205px] card bg-gradient-to-l from-[#FFF2F2] to-[#A9B5DF] rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 bg-white/80 px-4 py-1 rounded-full text-xl text-gray-700 font-semibold shadow-md">
                                    📍 {car.car_location}
                                </div>

                                <figure className="px-6 pt-6">
                                    <img
                                        src={car.car_image}
                                        alt={car.car_model}
                                        className="rounded-2xl w-full h-48 lg:w-11/12 lg:h-80 object-cover shadow-md"
                                    />
                                </figure>

                                <div className="card-body text-left px-6 pb-6">
                                <h2 className="card-title text-4xl font-bold text-violet-900 mb-2">
                                    {car.car_model}
                                </h2>

                                <ul className="list-disc list-inside space-y-1 text-2xl text-gray-800 mb-4">
                                    {car.car_description.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>
                                <div>
                                    <h1 className='flex items-center gap-2 text-lg'>Daily Rent: <span className='flex justify-center items-center gap-1 text-2xl'><FaSackDollar size={20} color='purple'></FaSackDollar>{car.rental_price} /day</span></h1>
                                    <h1 className='text-lg'>Added On: <span className='text-2xl'>{addedCarDate(car.date)}</span></h1>
                                </div>
                                <h2 className="flex gap-1 justify-center items-center rounded-3xl border-purple-300 bg-purple-200 w-[150px] text-center p-3 text-lg font-medium  text-violet-900 mb-2">
                                    <IoMdCheckmarkCircleOutline size={30}></IoMdCheckmarkCircleOutline>{car.status}
                                </h2>
                                
                                <div className="card-actions mt-auto">
                                    <Link to={`/carDetails/${car._id}`} className="w-full flex justify-center items-center gap-4 cursor-pointer py-2 
                                        rounded-xl bg-gradient-to-r from-[#493D9E] to-[#7886C7] text-white text-lg 
                                        font-semibold hover:brightness-110 transition duration-300">          
                                    <img className="w-12 h-12" src={Car} alt="car" />
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                }
                </div>
            </div>
        </div>
    );
};

export default AvailableCars;
