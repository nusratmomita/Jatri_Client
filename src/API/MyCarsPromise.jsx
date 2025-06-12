export const myCarsPromise = (email) => {
    return fetch(`http://localhost:3000/cars/email?email=${email}`)
    .then(res=>res.json());
}