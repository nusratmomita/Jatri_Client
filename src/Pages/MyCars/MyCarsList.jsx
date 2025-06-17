import React, { use, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AiFillEdit, AiTwotonePlusCircle } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthContext";

const MyCarsList = ({ myCarsPromise }) => {
  const initialCars = use(myCarsPromise);
  const [cars , setCars] = useState(initialCars);
  const [sortBy , setSortBy] = useState("");
  // console.log(cars);

  const { user } = useContext(AuthContext);
  const [email] = useState(user?.email);

  useEffect(() => {
    if (!sortBy) return;
    const url = `https://jatri-server.vercel.app/cars/email?email=${email}&sort=${sortBy}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCars(data)});
    }, 
  [sortBy,email]);

  // const [myCars , setMyCars] = useState(cars);

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

    if (
          !form.car_model.value ||
          !form.rental_price.value ||
          !form.availability.value ||
          !form.reg_no.value ||
          !form.car_features.value ||
          !form.car_description.value ||
          !form.car_image.value ||
          !form.car_location.value
        ) {
          toast.error("You must fill in all the fields to add a new car.");
          return;
        }


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

    fetch(`https://jatri-server.vercel.app/cars/${carId._id}` , {
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
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://jatri-server.vercel.app/cars/${id}`,{
                method: "DELETE",
            })
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data)
                if(data.deletedCount)
                {
                    Swal.fire({
                    title: "Deleted!",
                    text: "The car has been deleted.",
                    icon: "success"
                    });
                }
                toast.success("The car has been deleted successfully!");

                const remainingCars = cars.filter((cars)=> cars._id !== id);
                setCars(remainingCars)
            });
        }
    });

  }

  return (
    <div className="winky-rough-regular">
      <>
        {cars.length === 0 ? 
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
         : 
          <>
          <div className="mb-30 flex justify-between">
            <h1 className="mt-25 ml-15 p-5 flex justify-center items-center text-4xl font-bold text-[#2D336B] hover:text-purple-900">
                All the cars created by YOU are shown here...
              </h1>
            <select defaultValue="" onChange={(e) => setSortBy(e.target.value)} className="lg:mr-30 mt-30 p-3 rounded-2xl font-bold text-xl lg:w-[20%]">
              <option disabled value="">Sort by..</option>
              <option value="Oldest">Sort by Date:(Oldest)</option>
              <option value="Newest">Sort by Date:(Newest)</option>
              <option value="Lowest">Sort by Price:(Lowest)</option>
              <option value="Highest">Sort by Price:(Highest)</option>
            </select>
          </div>
             <div className="m-20 flex lg:flex-row flex-col justify-between items-center ">
              

              <table className="winky-rough-regular w-full border-collapse shadow-lg rounded-2xl overflow-hidden">
                <thead className="bg-gradient-to-l from-[#B2A5FF] to-[#A9B5DF] text-white">
                  <tr className="text-3xl">
                    <th className="py-4 px-6 text-left">Car Image</th>
                    <th className="py-4 px-6 text-left">Car Model</th>
                    <th className="py-4 px-6 text-left">Daily Price</th>
                    <th className="py-4 px-6 text-left">Bookings</th>
                    <th className="py-4 px-6 text-left">Availability</th>
                    <th className="py-4 px-6 text-left">Added On</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-800">
                  {cars?.map((car) => (
                    <tr key={car._id} className="border-t hover:bg-gray-50 transition duration-200">
                      <td className="py-3 px-6">
                        <img
                          src={car.car_image}
                          alt="car"
                          className="w-20 h-20 object-cover rounded-xl shadow-md"
                        />
                      </td>
                      <td className="py-3 px-6 font-medium text-2xl">{car.car_model}</td>
                      <td className="py-3 px-6 text-2xl">${car.rental_price}</td>
                      <td className="py-3 px-6 text-2xl">{car.car_booking_count}</td>
                      <td className="py-3 px-6">
                        <span
                          className={`px-3 py-1 rounded-full font-semibold ${
                            car.availability === "Available"
                              ? "bg-green-100 text-green-700 text-2xl"
                              : "bg-red-100 text-red-700 text-2xl"
                          }`}
                        >
                          {car.availability}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-2xl">{addedCarDate(car.date)}</td>
                      <td className="mt-5 py-3 px-6 flex justify-center items-center gap-2">
                        <button
                          onClick={() => {
                            setCarId(car);
                            document.getElementById("updateNow").showModal();
                          }}
                          className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition"
                        >
                          <AiFillEdit className="text-lg" /> Update
                        </button>
                        <button
                          onClick={() => handleDeleteCar(car._id)}
                          className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition"
                        >
                          <RiDeleteBin5Line className="text-lg" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <dialog id="updateNow" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-[#7886C7]">
                <form onSubmit={handleUpdateForm} className="space-y-5 p-5 text-left">
                  <h3 className="text-4xl text-[#FFF2AF] text-center">Update Car Info</h3>

                  <input name="car_model" type="text" defaultValue={carId?.car_model} className="input w-full" placeholder="Car Model" />
                  <input name="rental_price" type="number" defaultValue={carId?.rental_price} className="input w-full" placeholder="Daily Rental Price" />
                  <select name="availability" defaultValue={carId?.availability} className="input w-full">
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                  <input name="reg_no" type="text" defaultValue={carId?.reg_no} className="input w-full" placeholder="Vehicle Registration No" />
                  <input name="car_features" type="text" defaultValue={carId?.car_features?.join(", ")} className="input w-full" placeholder="Car Features (comma-separated)" />
                  <input name="car_description" type="text" defaultValue={carId?.car_description?.join(", ")} className="input w-full" placeholder="Car Description (comma-separated)" />
                  <input name="car_image" type="url" defaultValue={carId?.car_image} className="input w-full" placeholder="Image URL" />
                  <input name="car_location" type="text" defaultValue={carId?.car_location} className="input w-full" placeholder="Location" />

                  <div className="modal-action flex justify-between">
                    <button type="submit" className="btn bg-yellow-400">Update</button>
                    <button type="button" onClick={() => document.getElementById("updateNow").close()} className="btn bg-gray-300">Cancel</button>
                  </div>
                </form>
              </div>
            </dialog>
          </>
        }
      </>
    </div>
  );
};

export default MyCarsList;