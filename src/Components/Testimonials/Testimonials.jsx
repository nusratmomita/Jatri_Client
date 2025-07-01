// src/Components/Testimonials/Testimonials.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Tanvir Ahmed",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        headline: "Great Support and Car Quality!",
        review: "The Honda Civic I booked was in perfect condition. The support team was responsive too. Excellent experience overall!",
    },
    {
        name: "Mehedi Hasan",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        headline: "Value for Money!",
        review: "Rented a Toyota Corolla for a business trip. Clean, punctual, and affordable. Loved the Jatri service!",
    },
    {
        name: "Rahim Uddin",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        headline: "Smooth and Comfortable Ride!",
        review: "I used the Yemaha-|| for a long journey and was amazed at the comfort and mileage. Definitely choosing Jatri again!",
    },
    {
        name: "Faisal Kabir",
        image: "https://randomuser.me/api/portraits/men/62.jpg",
        headline: "Easy Booking Process!",
        review: "Booked a Chevrolet Malibu within minutes. Hassle-free experience from start to finish. Highly recommended!",
    },
    {
        name: "Nafis Chowdhury",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        headline: "Safe and Reliable!",
        review: "The Nissan Sunny was well-maintained. I felt very safe throughout the ride. Great for families!",
    },
];

const Testimonials = () => {
    return (
        <div className="my-35 px-6 lg:px-10">
            <h2 className="text-5xl text-center md:text-6xl font-bold text-[#2D336B] mb-12">[ What Our Riders Say ]</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="winky-rough-regular bg-white p-8 m-5 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 h-[350px] flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[#03464D]"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-[#03464D]">{testimonial.name}</h3>
                                    <p className="text-xl text-gray-500 italic">{testimonial.headline}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-[25px] leading-relaxed">{testimonial.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
