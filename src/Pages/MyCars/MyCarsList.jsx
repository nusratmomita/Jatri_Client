import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AiFillEdit, AiTwotonePlusCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";

const MyCarsList = ({ myCarsPromise }) => {
  const cars = use(myCarsPromise);
  console.log(cars);
  let [carId , setCarId] = useState(null);


  const addedCarDate = (CarDate) => {
    const date = new Date(CarDate);
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];

    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    // console.log(day,month,suffix)
    return `${day}${suffix} ${month}`;
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;


    const updateCar = {
      car_model: form.car_model.value,
      rental_price: parseInt(form.rental_price.value),
      availability: form.availability.value,
      reg_no: form.reg_no.value,
      car_features: form.car_features.value.split(",").map((feature) => feature.trim()),
      car_description: form.car_description.value.split(",").map((des) => des.trim()),
      car_image: form.car_image.value,
      car_location: form.car_location.value,
    };

    fetch(`http://localhost:3000/cars/${carId._id}` , {
        method: "PUT",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(updateCar)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log("data updated",data)
        if(data.modifiedCount){
            toast.success("Car Information has been updated successfully!")
            document.getElementById("updateNow").close();
        }
    })
    
  };

  const handleDeleteCar = (id) => {
    fetch(``)
  }

  return (
    <div className="winky-rough-regular">
      <>
        {cars.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#f4f4f8] to-[#eae6ff] rounded-3xl p-10 shadow-lg max-w-xl mx-auto mt-20">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#2D336B] mb-4">
              🚗 Alas! No Car Added
            </h1>
            <p className="text-lg lg:text-3xl text-gray-700 mb-6">
              Jatri is the best platform to rent a car without any hassle.
              <br />
              So why wait? Add your car now!
            </p>
            <Link to="/addCar">
              <button className="flex gap-3 items-center cursor-pointer px-6 py-3 bg-gradient-to-t from-[#7886C7] via-[#B8A9F9] to-[#FBC2EB] rounded-full text-black font-semibold text-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <AiTwotonePlusCircle size={25}> </AiTwotonePlusCircle>Add A Car
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mt-25 mb-20 p-5 flex justify-center items-center text-4xl font-bold text-[#2D336B] hover:text-purple-900">
              All the cars created by YOU are shown here...
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
                          <th className="py-3 px-4">Daily Rental Price</th>
                          <th className="py-3 px-4">Booking Count</th>
                          <th className="py-3 px-4">Availability</th>
                          <th className="py-3 px-4">Date Added</th>
                          <th className="py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cars.map((car) => (
                          <tr
                            key={car._id}
                            className="border-t hover:bg-gray-100 text-center"
                          >
                            <td>
                              <img
                                className="m-5 w-15 h-15 rounded-3xl"
                                src={car.car_image}
                                alt="carImage"
                              />
                            </td>
                            <td className="py-2 px-8">{car.car_model}</td>
                            <td className="py-2 px-4">$ {car.rental_price}</td>
                            <td className="py-2 px-6">
                              {car.car_booking_count}
                            </td>
                            <td className="py-2 px-6">{car.availability}</td>
                            <td className="py-2 px-6">
                              {addedCarDate(car.date)}
                            </td>
                            <td className="py-2 px-6 flex gap-4 justify-center mt-5">
                              <button
                                onClick={() => {
                                    setCarId(car);
                                    document
                                        .getElementById("updateNow")
                                        .showModal()
                                }
                                }
                                className="cursor-pointer flex gap-2 justify-center items-center 
                                        bg-gradient-to-r from-[#7886C7] to-[#493D9E] hover:from-[#493D9E] hover:to-[#7886C7] 
                                        text-white font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-md hover:shadow-xl"
                              >
                                <AiFillEdit></AiFillEdit>
                                Update
                              </button>
                              
                              <dialog
                                id="updateNow"
                                className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-[#7886C7] ">
                                <div className="rounded-3xl p-12 text-center space-y-5">
                                    <h3 className="text-6xl text-[#FFF2AF]">Update</h3>
                                    <form onSubmit={handleUpdateForm}>
                                        <div className="mt-15 grid grid-cols-1 gap-5">
                                        {/* car model */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Car Model
                                            </label>
                                            <input
                                                type="text"
                                                name="car_model"
                                                className="input w-full text-xl"
                                                defaultValue={car.car_model}
                                            />
                                        </fieldset>
                                        {/* car price */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Daily Rental Price
                                            </label>
                                            <input
                                                type="number"
                                                name="rental_price"
                                                className="input w-full text-xl"
                                                defaultValue={car.rental_price}
                                            />
                                        </fieldset>
                                        {/* availability */}
                                        <fieldset className="raleway-font fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Availability
                                            </label>
                                            <select
                                                name="availability"
                                                className="text-xl text-[#1B1A1A] font-bold"
                                            >
                                                <option value="Available">Available</option>
                                                <option value="Unavailable">Unavailable</option>
                                            </select>
                                        </fieldset>
                                        {/* Vehicle Registration Number */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Vehicle Registration No
                                            </label>
                                            <input
                                                type="tel"
                                                name="reg_no"
                                                className="input w-full text-xl"
                                                defaultValue={car.reg_no}
                                            />
                                        </fieldset>
                                        {/* Features */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Car Features
                                            </label>
                                            <input
                                                type="text"
                                                name="car_features"
                                                className="input w-full text-xl"
                                                defaultValue={car.car_features}
                                            />
                                        </fieldset>
                                        {/* Description */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Car Description
                                            </label>
                                            <input
                                                type="text"
                                                name="car_description"
                                                className="input w-full text-xl"
                                                defaultValue={car.car_description}
                                            />
                                        </fieldset>
                                        {/* Image */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Car Image
                                            </label>
                                            <input
                                                type="url"
                                                name="car_image"
                                                className="input w-full text-xl"
                                                defaultValue={car.car_image}
                                            />
                                        </fieldset>
                                        {/* Location */}
                                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                            <label className="label text-xl text-[#1B1A1A] font-bold">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                name="car_location"
                                                className="input w-full text-xl"
                                                defaultValue={car.car_location}
                                            />
                                        </fieldset>
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
                                onClick={handleDeleteCar(car._id)}
                                className="cursor-pointer flex gap-2 justify-center items-center 
                                            bg-gradient-to-r from-[#F87171] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#F87171] 
                                            text-white font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-md hover:shadow-xl"
                              >
                                <RiDeleteBin5Line></RiDeleteBin5Line>Delete
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
        )}
      </>
    </div>
  );
};

export default MyCarsList;
