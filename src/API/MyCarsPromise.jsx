export const MyCarsPromise = (email) => {
    return fetch(`http://localhost:3000/cars?email=${email}`)
    .then(res=>res.json());
}