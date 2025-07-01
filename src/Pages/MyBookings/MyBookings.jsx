import React, { Suspense,  useContext } from 'react';
import MyBookingList from './MyBookingList';
import { myBookingsPromise } from '../../API/MyBookingsPromise';
import { AuthContext } from '../../Authentication/AuthContext';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div className='mt-60'>
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>}>
                <MyBookingList myBookingsPromise={myBookingsPromise(user?.email , user?.accessToken)}></MyBookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;