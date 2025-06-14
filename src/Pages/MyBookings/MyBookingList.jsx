import React, { use } from 'react';

const MyBookingList = ({myBookingsPromise}) => {
    const bookings = use(myBookingsPromise);
    console.log(bookings)
    return (
        <div>
            list:{bookings.length}
        </div>
    );
};

export default MyBookingList;