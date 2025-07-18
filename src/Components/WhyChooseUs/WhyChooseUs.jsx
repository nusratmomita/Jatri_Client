import React from 'react';
import Cars from '../../assets/collectionOfCars.png';
import Price from '../../assets/discount.png';
import Bookings from '../../assets/snap.png';
import Support from '../../assets/customerSupport.png';

const WhyChooseUs = () => {
    return (
        <div data-aos="fade-left" className="mt-40 my-24 px-5 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2D336B] mb-12">
                [ Why Choose Us? ]
            </h1>

            <div className="mt-0 flex flex-wrap justify-center gap-10 lg:gap-6">
                {/* Card 1 */}
                <div className="text-[#2D336B] w-full md:w-80 h-[300px] p-6 rounded-br-3xl rounded-tl-3xl bg-gradient-to-r from-[#FFF2F2] to-[#DAD2FF] shadow-xl hover:scale-105 transition-transform duration-600">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={Cars} alt="cars" className="bg-[#7886C7] p-2 rounded-2xl w-12 h-12" />
                        <h2 className="text-2xl font-semibold">Wide Variety of Cars</h2>
                    </div>
                    <p className="text-left text-2xl font-semibold">
                        From budget-friendly to luxury vehicles, we offer it all. Find vintage and modern cars like BMW, Audi, Honda, Ford, and many more!
                    </p>
                </div>

                {/* Card 2 */}
                <div className="lg:mt-20 w-full md:w-80 h-[300px] p-6 rounded-br-3xl rounded-tl-3xl bg-gradient-to-l from-[#FFF2F2] to-[#DAD2FF] text-[#2D336B] shadow-md hover:scale-105 transition-transform duration-600">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={Price} alt="price" className="bg-[#7886C7] p-2 rounded-2xl w-12 h-12" />
                        <h2 className="text-2xl font-semibold">Affordable Prices</h2>
                    </div>
                    <p className="text-left text-2xl font-semibold">
                        Rent cars at great prices with flexible daily options. At Jatri, we care about your budget and provide the best service!
                    </p>
                </div>

                {/* Card 3 */}
                <div className="text-[#2D336B] w-full md:w-80 h-[300px] p-6 rounded-br-3xl rounded-tl-3xl bg-gradient-to-r from-[#FFF2F2] to-[#DAD2FF] shadow-md hover:scale-105 transition-transform duration-600">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={Bookings} alt="bookings" className="bg-[#7886C7] p-2 rounded-2xl w-12 h-12" />
                        <h2 className="text-2xl font-semibold">Easy Booking</h2>
                    </div>
                    <p className="text-left text-2xl font-semibold">
                        Book your ride in just a few clicks. No hidden charges or confusing steps. Just select, book, and go!
                    </p>
                </div>

                {/* Card 4 */}
                <div className="text-[#2D336B] lg:mt-20 w-full md:w-80 h-[300px] p-6 rounded-br-3xl rounded-tl-3xl bg-gradient-to-l from-[#FFF2F2] to-[#DAD2FF] shadow-md hover:scale-105 transition-transform duration-600">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src={Support} alt="support" className="bg-[#7886C7] p-2 rounded-2xl w-12 h-12" />
                        <h2 className="text-2xl font-semibold">24/7 Support</h2>
                    </div>
                    <p className="text-left text-2xl font-semibold">
                        Need help? Our support team is available anytime. Whether it's booking issues or general queries, we're here for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
