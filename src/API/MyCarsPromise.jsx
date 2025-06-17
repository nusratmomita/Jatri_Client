export const myCarsPromise = (email,accessToken) => {
    return fetch(`https://jatri-server.vercel.app/cars/email?email=${email}`, {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    }
)
    .then(res=>res.json());
}