import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddCars = () => {
  const { user } = useContext(AuthContext);

  const handleAddCar = (e) => {
    e.preventDefault();

    const form = e.target;

    // const features = form.car_features.value.split(',').map(feature => feature.trim());

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

    const addCarData = {
      car_model: form.car_model.value,
      rental_price: parseInt(form.rental_price.value),
      availability: form.availability.value,
      reg_no: form.reg_no.value,
      car_features: form.car_features.value
        .split(",")
        .map((feature) => feature.trim()),
      car_description: form.car_description.value
        .split(",")
        .map((des) => des.trim()),
      car_booking_count: 0,
      car_image: form.car_image.value,
      car_location: form.car_location.value,

      email: user?.email,
      status: "Available",
      date: new Date().toISOString(),
    };

    // console.log(addCarData);

    axios
      .post("http://localhost:3000/cars", addCarData)
      .then(() => {
        // console.log(data.data);
        toast.success("New car added successfully!");
      })
      .catch((error) => {
        console.log(error);
      });

    form.reset();
  };

  return (
    <div className="winky-rough-regular p-24">
      <div className="bg-[#7886C7] rounded-3xl p-12 text-center space-y-5">
        <h1 className="text-6xl text-[#FFF2AF]">Add a car</h1>

        <form onSubmit={handleAddCar}>
          <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* car model */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label text-xl text-[#1B1A1A] font-bold">
                Car Model
              </label>
              <input
                type="text"
                name="car_model"
                className="input w-full text-xl"
                placeholder="Enter Car Model Name"
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
                placeholder="Enter Daily Rental Price"
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
                placeholder="Enter Reg. No"
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
                placeholder="Enter Car Features(Separated with comma)"
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
                placeholder="Enter Car description(Separated with comma)"
              />
            </fieldset>
            {/* Booking count */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label text-xl text-[#1B1A1A] font-bold">
                Booking Count
              </label>
              <input
                type="text"
                name="car_booking_count"
                className="input w-full text-xl"
                disabled={true}
                placeholder="Default count 0"
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
                placeholder="Enter Car Image"
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
                placeholder="Enter Location"
              />
            </fieldset>
          </div>
          <button
            type="submit"
            className="mt-10 rounded-2xl btn lg:w-full text-black text-2xl bg-[#FFF2AF] border-2 border-white"
            value=""
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
