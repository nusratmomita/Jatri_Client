export const myCarsPromise = (email) => {
    return fetch(`https://jatri-server.vercel.app/cars/email?email=${email}`)
    .then(res=>res.json());
}