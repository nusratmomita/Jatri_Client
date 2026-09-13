import React, { Suspense } from 'react';
// import RecentList from './RecentList';
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router';

const RecentListing = ({carData}) => {
    // console.log(carData)

    const postedDate = (carDate) => {
      const currentDate = new Date();
      const addedOn = new Date(carDate);
      // console.log(currentDate,addedOn);

      currentDate.setHours(0,0,0,0);
      addedOn.setHours(0,0,0,0);


      // const currentDay = currentDate.getDate();
      // const addedOnDay = addedOn.getDate();
      const diff = Math.floor((currentDate - addedOn) / (1000 * 60 * 60 * 24));

      if(diff === 0) return "Today";
      else if(diff === 1) return "Yesterday";
      else return `${diff} days ago`;

    }
    return (
        <div data-aos="fade-right" className="mt-25 lg:my-24 mx-5 xl:mx-5 2xl:mx-0 text-center">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#2D336B] mb-12">
              Recent Listing
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5.5 lg:gap-8">
            {carData.map((car) => (
              <div
                key={car._id}
                className="relative card bg-gradient-to-br from-[#FFF2F2] to-[#DAD2FF] shadow-xl rounded-lg group"
              >
                <figure className="">
                  <img
                    src={car.car_image}
                    alt="car"
                    className="h-48 object-cover w-full group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>

                <div className="absolute -top-4 -right-4 flex items-center gap-1 bg-[#FFF2AF] text-[#2D336B] font-semibold px-3 py-1 text-xl rounded-xl shadow-md">
                  <FaRegCircleCheck size={16} />
                  {car.availability}
                </div>

                <div className="card-body text-left space-y-2 text-[#2D336B]">
                  <h2 className="font-bold text-2xl">
                    <span className="text-[#493D9E]">Model:</span> {car.car_model}
                  </h2>
                  <h3 className="text-md text-2xl">
                    <span className="font-semibold text-[#7886C7] text-2xl">Rental Price:</span> ${car.rental_price}
                  </h3>
                  <h3 className="text-md text-2xl">
                    <span className="font-semibold text-[#7886C7]">Bookings:</span> {car.car_booking_count}
                  </h3>
                  <p className="italic text-[#2D336B] text-2xl">
                    Posted: <span className="font-semibold">{postedDate(car.date)}</span>
                  </p>
                  <Link to={`/carDetails/${car._id}`} className="w-full flex justify-center items-center gap-4 cursor-pointer py-2 
                      rounded-xl bg-gradient-to-r from-[#5b51a2] to-[#7886C7] text-white text-lg 
                      font-semibold hover:brightness-110 transition duration-300">          
                      See More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default RecentListing;