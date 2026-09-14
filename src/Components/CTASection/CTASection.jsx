import React from 'react'
import { Link } from 'react-router';

const CTASection = () => {
  return (
    <div className='bg-linear-to-r from-[#2D336B] via-[#493D9E] to-[#2D336B] rounded-2xl mt-25 mx-5 xl:mx-5 2xl:mx-0 text-center text-white mb-10 pb-10'>
        <h4 className='text-4xl font-semibold pt-14'>No Hidden Fees. No Surprises.</h4>
        <p className='text-xl text-gray-300 font-medium pt-4 mb-10'>Everything is included in the price. Comprehensive insurance, roadside assistance, and 24/7 support.</p>
        <Link to="/availableCars" className='px-6 py-4 bg-[#FFF2AF] text-[#2D336B] text-lg text-center font-semibold rounded-lg cursor-pointer'>
         Start Booking
        </Link>
    </div>
  )
}

export default CTASection