export const myCarsPromise = (email,accessToken) => {
    return fetch(`http://localhost:3000/cars/email?email=${email}` , {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json());
}