export const myBookingsPromise = (email) => {
    return fetch(`http://localhost:3000/bookings/email?email=${email}`)
    .then(res=>res.json());
} 