import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AvailableCars from "../Pages/AvailableCars/AvailableCars";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddCars from "../Pages/AddCars/AddCars";
import MyCars from "../Pages/MyCars/MyCars";
import MyBookings from "../Pages/MyBookings/MyBookings";

export const router = createBrowserRouter([
    {
        path : "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/availableCars",
                Component: AvailableCars
            },
            {
                path: "/addCar",
                Component: AddCars
            },
            {
                path: "/myCars",
                Component: MyCars
            },
            {
                path: "/myBookings",
                Component: MyBookings
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
        ]
    }
])