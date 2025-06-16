import React, { use } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";


const MyBookingList = ({myBookingsPromise}) => {
    const bookings = use(myBookingsPromise);
    console.log(bookings);

    const date = new Date();
    const bookedOn = bookings.bookedOn;
    console.log(date,bookedOn)

    const formatDate = (bookedOnDate) => {
      const bookedOn = new Date(bookedOnDate);
      const day = bookedOn.getDate();
      const month = bookedOn.getMonth()+1;
      const year = bookedOn.getFullYear();
      const hour = (bookedOn.getHours());
      const minutes = bookedOn.getMinutes();
  
      return `${day}-${month}-${year} ${hour}:${minutes}`;
    }
    return (
        <>
            <h1 className="mt-25 mb-20 p-5 flex justify-center items-center text-4xl font-bold text-[#2D336B] hover:text-purple-900">
              All the cars booked by YOU are shown here...
            </h1>
            {
              <div className="-mt-30 overflow-x-auto">
                <div className="flex justify-center items-center min-h-screen p-16">
                  <div className="overflow-x-auto w-full max-w-8xl rounded-2xl border border-gray-300 shadow-lg bg-white">
                    <table className="min-w-full table-auto text-2xl font-bold rounded-2xl overflow-hidden">
                      <thead className="bg-gradient-to-l from-[#B2A5FF] to-[#A9B5DF] w-full rounded-t-2xl text-gray-700">
                        <tr className="text-2xl text-center">
                          <th className="py-3 px-4">Car Image</th>
                          <th className="py-3 px-4">Car Model</th>
                          <th className="py-3 px-4">Booking Date</th>
                          <th className="py-3 px-4">Starting Date</th>
                          <th className="py-3 px-4">Ending Date</th>
                          <th className="py-3 px-4">Total Price</th>
                          <th className="py-3 px-4">Booking Status</th>
                          <th className="py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((car) => (
                          <tr
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
                              {formatDate(car.bookingStart)}
                            </td>
                            <td className="py-2 px-6">
                              {formatDate(car.bookingEnd)}
                            </td>
                            <td className="py-2 px-6">${car.totalPrice}</td>
                            <td className="py-2 px-6">
                              {car.bookingStatus}
                            </td>
                            <td className="py-2 px-6 flex gap-4 justify-center mt-5">
                              <button
                                onClick={() => {
                                    // setCarId(car);
                                    document
                                        .getElementById("updateNow")
                                        .showModal()
                                }
                                }
                                className="cursor-pointer flex gap-2 justify-center items-center 
                                        bg-gradient-to-t from-[#7886C7] to-[#493D9E] hover:from-[#493D9E] hover:to-[#7886C7] 
                                        text-white font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-md hover:shadow-xl"
                              >
                                <AiFillEdit></AiFillEdit>
                                Confirm
                              </button>
                              
                              <dialog
                                id="updateNow"
                                className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-[#7886C7] ">
                                <div className="rounded-3xl p-12 text-center space-y-5">
                                    <h3 className="text-6xl text-[#FFF2AF]">Update</h3>
                                    <form 
                                    // onSubmit={handleUpdateForm}
                                    >
                                        <div className="mt-15 grid grid-cols-1 gap-5">
                                        <div className="modal-action">
                                            <button type="submit" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black 
                                            shadow-md hover:shadow-xl transition duration-300">Update </button>
                                            <button type="button" className="cursor-pointer w-1/2 bg-gradient-to-tr from-[#7886C7] via-purple-100 to-pink-100 rounded-3xl p-2 text-lg font-bold text-black shadow-md hover:shadow-xl transition duration-300" 
                                                onClick={()=> document.getElementById('updateNow').close()}>Cancel </button>                                    
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                </div>
                              </dialog>

                              <button
                                // onClick={()=> handleDeleteCar(car._id)}
                                className="cursor-pointer flex gap-2 justify-center items-center 
                                            bg-gradient-to-t from-[#F87171] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#F87171] 
                                            text-white font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-md hover:shadow-xl"
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
          </>
    );
};

export default MyBookingList;