import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Authentication/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const CarDetails = () => {
    const singleCar = useLoaderData();
    const { user } = useContext(AuthContext);

    const [startingDate , setStartingDate] = useState('');
    const [endingDate , setEndingDate] = useState('');
    const [totalPrice , setTotalPrice] = useState(0);

    const calculateTotalPrice = (start,end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);


        if(start && end && endDate > startDate) {
            const diff = endDate - startDate;
            const totalDays = Math.ceil(diff/ (1000 * 60 * 60 * 24));

            const price = (singleCar.rental_price * totalDays)+singleCar.rental_price;
            setTotalPrice(price);
        }
        else{
            setTotalPrice(0);
        }
    }

    const handleDateChange = (e) => {
        const {name , value } = e.target;

        if(name === "startingDate"){
            setStartingDate(value);
            calculateTotalPrice(value,endingDate);
        }
        if(name === "endingDate"){
            setEndingDate(value);
            calculateTotalPrice(startingDate,value);
        }
    }


    const handleConfirmationForm = (e) => {
        e.preventDefault();
        const form = e.target;

        if(!form.startingDate.value || !form.startingDate.value) {
            toast.error("You must provide starting and ending date to book the car.");
            return;
        }
  

        const bookingInfo = {
            carModel : singleCar.car_model,
            carImage : singleCar.car_image,
            bookingStart : form.startingDate.value,
            bookingEnd : form.endingDate.value,
            totalPrice : totalPrice,
            bookingStatus : "Pending",
            userEmail : user?.email
        }

        axios.post('http://localhost:3000/bookings' , bookingInfo)
        .then(() => {
            toast.success(`You've booked "${singleCar.car_model}" successfully!`);
            document.getElementById('bookNow').close();
        })
        .catch(() => {
            //toast.error("There is some booking this car right now.Please try later.")
        });
        
        form.reset();
        
    }

    return (
        <div className="winky-rough-regular m-35 flex flex-col lg:flex-row-reverse gap-10 items-center shadow-2xl bg-[#DAD2FF] rounded-2xl p-4 lg:p-6 hover:shadow-4xl transform hover:scale-105 transition-all duration-300">
            <img
                src={singleCar.car_image}
                alt={singleCar.car_model}
                className="w-full max-w-lg rounded-xl object-cover"
            />
            <div className="text-[#2D336B] space-y-4 w-full">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-[#493D9E]">🚗 {singleCar.car_model}</h1>
                <p className="text-lg font-medium">📋 Registration No: <span className="font-semibold">{singleCar.reg_no}</span></p>

                <div className="bg-[#FFF2AF] rounded-xl p-4 shadow-md space-y-2">
                    <h1 className='text-2xl'>Description: </h1>
                    <div className='flex gap-2'>
                        {
                            singleCar.car_description.map((description,index)=> <p key={index} className="text-xl font-bold italic">🏷 {description}</p>)
                        }

                    </div>
                    <h1 className='text-2xl'>Features are: </h1>
                    <div className='flex gap-2'>
                        {
                            singleCar.car_features.map((feature,index)=> <p key={index} className="font-bold text-xl italic">⚡ {feature}</p>)
                        }
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p className='text-xl'><strong>📍 Location:</strong> {singleCar.car_location}</p>
                    <p className='text-xl'><strong>👤 Added By:</strong> {user?.displayName || "N/A"}</p>
                    <p className='text-xl'><strong>📧 Contact Email:</strong> <span className='text-sm lg:text-xl'>{singleCar.email}</span></p>
                    <p className='text-xl'><strong>📅 Available:</strong> {singleCar.availability}</p>
                    <p className="text-xl font-bold text-[#2D336B]">💰 Rental Price: ${singleCar.rental_price} /day</p>
                </div>
              
                <button onClick={()=>document.getElementById('bookNow').showModal()} className="w-1/2 cursor-pointer mt-6 px-6 py-3 bg-[#7466d8] hover:bg-[#2D336B] text-white font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out">
                    Book Now
                </button>

                <dialog id="bookNow" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-center">Booking Information</h3>
                    <form onSubmit={handleConfirmationForm} className='space-y-3'>
                        <p className="mt-5 py-4 text-2xl">You're Booking for: <span className='italic'>{singleCar.car_model}</span></p>
                        <p className="py-4 text-2xl">Per Day Price: <span className='italic'>${singleCar.rental_price}</span></p>
                        <p className='text-2xl py-4'><strong>Available:</strong> {singleCar.availability}</p>
                        <label htmlFor="startingDate" className='text-2xl'>Starting Date: </label>
                        <input className="ml-1 border-2 border-black p-2 rounded-2xl" type="datetime-local" name="startingDate" id="start" onChange={handleDateChange}/>
                        <br />
                        <br />
                        <label htmlFor="endingDate" className='text-2xl'>Ending Date: </label>
                        <input className="ml-3 border-2 border-black p-2 rounded-2xl" type="datetime-local" name="endingDate" id="end" onChange={handleDateChange}/>
                        <br />
                        <br />
                        <h1 className='text-2xl w-1/2 p-3 rounded-3xl '>Total Cost: <span className='italic'>${totalPrice}</span></h1>
                        <div className="modal-action">
                            <button type="submit" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black shadow-md hover:shadow-xl transition duration-300">Book</button>
                            <button type="button" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black shadow-md hover:shadow-xl transition duration-300" onClick={()=> document.getElementById('bookNow').close()}>Cancel </button>
                        </div>
                    </form>
                </div>
                </dialog>
            </div>
        </div>
        
    );
};

export default CarDetails;
