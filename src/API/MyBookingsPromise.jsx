export const myBookingsPromise = (email,accessToken) => {
    return fetch(`https://jatri-server.vercel.app/bookings/email?email=${email}` , {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json());
} 