import axios from 'axios';
import React, { use, useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const MyBookingList = ({myBookingsPromise}) => {
    const initialBookings = use(myBookingsPromise);
    const [bookings , setBookings] = useState(initialBookings);
    // console.log(bookings)


    const [startingDate , setStartingDate] = useState('');
    const [endingDate , setEndingDate] = useState('');
    const [currentBookingID , setCurrentBookingId] = useState(null);  
    // const [dailyPrice , setDailyPrice] = useState(0);  


    const formatDate = (bookedOnDate) => {
      const bookedOn = new Date(bookedOnDate);
      const day = bookedOn.getDate();
      const month = bookedOn.getMonth()+1;
      const year = bookedOn.getFullYear();
      const hour = (bookedOn.getHours());
      const minutes = bookedOn.getMinutes().toString().padStart(2, '0');
      // console.log(minutes)
  
      return `${day}-${month}-${year}, at ${hour}:${minutes}`;
    }

    const handleUpdateDate = (e) => {
      e.preventDefault();

      if(!startingDate || !endingDate){
        toast.error("You must fill in the fields to confirm you booking.")
        return
      }
      const startDay = new Date(startingDate);
      const endDay = new Date(endingDate);
      const diff = Math.floor((endDay-startDay) / (1000 * 60 * 60 * 24));

      const currentBooking = bookings.find((booking)=> booking._id === currentBookingID);
      const dailyRent = currentBooking.rentalPrice;
      const newPrice = diff * dailyRent; 

      axios.patch(`https://jatri-server.vercel.app/bookings/${currentBookingID}` ,{
        bookingStart : startingDate,
        bookingEnd : endingDate,
        bookingStatus: "Confirmed",
        totalPrice : newPrice
      })
      .then((res)=>
      {
        if(res.data.modifiedCount){
          toast.success("You've successfully booked the car!");

          setBookings(prevBookings => prevBookings.map(booking => 
            booking._id === currentBookingID ?
              {
                ...booking , 
                bookingStart : startingDate,
                bookingEnd : endingDate,
                bookingStatus: "Confirmed",
                totalPrice : newPrice
              } 
              :
              booking
          )) 
        }
        document.getElementById('updateNow').close();
      })
      .catch()
    }

    const handleCancelCar = (e,id) => {
      e.preventDefault();
      setCurrentBookingId(id);

      Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to cancel this booking?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://jatri-server.vercel.app/bookings/${id}` ,{
        bookingStatus: "Canceled"
      })
      .then((res)=>
      {
        // console.log(res.data)
        if(res.data.modifiedCount){
          toast.success("You've canceled the booking");

          setBookings(prevBookings => prevBookings.map(booking => 
            booking._id === id ?
              {
                ...booking , 
                bookingStatus: "Canceled"
              } 
              :
              booking
          ))
          Swal.fire({
          title: "Canceled!",
          text: "You've canceled the car.",
          icon: "success"
        });
        }

      })
      .catch()
      }
    });
    }

    return (
        <div className='winky-rough-regular whitespace-nowrap'>
            <h1 className="mt-25 mb-20 p-5 flex justify-center items-center text-4xl font-bold text-[#2D336B] hover:text-purple-900">
              All the cars booked by you are shown here...
            </h1>
            {
              <div className="-mt-30 overflow-x-auto">
                <div className="flex justify-center items-center min-h-screen p-16">
                  <div className="overflow-x-auto w-full max-w-8xl rounded-2xl border border-gray-300 shadow-lg bg-white">
                    <table  className="min-w-full table-auto text-2xl font-bold rounded-2xl overflow-hidden">
                      <thead className="bg-gradient-to-l from-[#B2A5FF] to-[#A9B5DF] w-full rounded-t-2xl text-gray-900 font-bold">
                        <tr className="text-center">
                          <th className="py-3 px-4 ">Car Image</th>
                          <th className="py-3 px-4">Car Model</th>
                          <th className="py-3 px-4">Booking Date</th>
                          <th className="py-3 px-4">Starting Date</th>
                          <th className="py-3 px-4">Ending Date</th>
                          <th className="py-3 px-4">Total Price</th>
                          <th className="py-3 px-4">Booking Status</th>
                          <th className="py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody className='text-gray-600'>
                        {bookings.map((car) => (
                          <tr
                            data-aos="fade-right"
                            key={car._id}
                            className="border-t hover:bg-gray-100 text-center"
                          >
                            <td>
                              <img
                                className="m-5 w-15 h-15 rounded-3xl"
                                src={car.carImage}
                                alt="carImage"
                              />
                            </td>
                            <td className="py-2 px-8">{car.carModel}</td>
                            <td className="py-2 px-4">{formatDate(car.bookedOn)}</td>
                            <td className="py-2 px-6">
                              {car.bookingStart ? formatDate(car.bookingStart) : "N/A"}
                            </td>
                            <td className="py-2 px-6">
                              {car.bookingEnd ? formatDate(car.bookingEnd) : "N/A"}
                            </td>
                            <td className="py-2 px-6">${car.totalPrice || 0}</td>
                            <td className="py-2 px-6">
                              {car.bookingStatus}
                            </td>
                            <td className="py-2 px-6 flex gap-4 justify-center mt-5">
                              <button
                                onClick={() => {
                                    setCurrentBookingId(car._id);
                                    document
                                        .getElementById("updateNow")
                                        .showModal()
                                }
                                }
                                className="cursor-pointer w-[170px] flex gap-2  justify-center items-center bg-[#A9B5DF] text-gray-800 hover:bg-[#a6ace0]  font-medium p-2 rounded-md"
                              >
                                <SlCalender />
                                Modify Date
                              </button>
                              
                              <dialog
                                id="updateNow"
                                className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-white text-[#493D9E]">
                                <div className="rounded-3xl p-12 text-center space-y-5">
                                    <h3 className="text-6xl">Update Dates</h3>                                   
                                        <div className="mt-15 grid grid-cols-1 gap-5">
                                          <label htmlFor="startingDate" className='text-4xl text-[#2D336B]'>Starting Date: </label>
                                          <input className="ml-1 border-2 border-black p-2 rounded-2xl" type="datetime-local" name="startingDate" id="start"
                                                onChange={(e) => setStartingDate(e.target.value)}
                                          />
                                          <br />
                                          <br />
                                          <label htmlFor="endingDate" className='text-4xl text-[#2D336B]'>Ending Date: </label>
                                          <input className="ml-3 border-2 border-black p-2 rounded-2xl" type="datetime-local" name="endingDate" id="end" 
                                                onChange={(e) => setEndingDate(e.target.value)}/>
                                          <br />
                                          <br />
                                          <div className="modal-action">
                                              <button onClick={(e)=> handleUpdateDate(e)} type="submit" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black 
                                              shadow-md hover:shadow-xl transition duration-300">Confirm</button>
                                              <button type="button" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black shadow-md hover:shadow-xl transition duration-300" 
                                                  onClick={()=> document.getElementById('updateNow').close()}>Cancel</button>                                    
                                          </div>
                                    </div>
                                </div>
                                </div>
                              </dialog>

                              <button
                                onClick={(e)=> {
                                  handleCancelCar(e,car._id)
                                } }
                                className="cursor-pointer flex gap-2 justify-center items-center 
                                            bg-[#DAD2FF] hover:bg-[#A9B5DF]
                                            text-gray-800 font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-md hover:shadow-xl"
                              >
                                <RiDeleteBin5Line></RiDeleteBin5Line>Cancel
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            }
          </div>
    );
};

export default MyBookingList;