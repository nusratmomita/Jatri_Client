import React, { useContext } from 'react';
import siteLogo from '../../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

    const { user, handleLogout } = useContext(AuthContext);

    const handleSignOut = () => {
        handleLogout()
            .then(() => {
                toast.success("You've logged out successfully");
            })
            .catch(() => {
            });
    };

    return (
        <div className="navbar bg-linear-to-r from-[#2D336B] via-[#493D9E] to-[#2D336B] shadow-sm px-4 lg:px-10 fixed z-50 top-0 w-full">

            {/* ================= MOBILE HEADER ================= */}
            <div className="flex flex-row-reverse lg:hidden w-full items-center justify-between">

                {/* Hamburger */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    {/* Mobile Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-45 mt-3 p-3 -ml-30 shadow text-[#2D336B] text-4xl font-bold"
                    >
                        {user && user?.email ? (
                            <>
                                <li className='navLinks'>
                                    <NavLink to="/" className="text-[30px]">Home</NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/availableCars" className="text-[20px]">
                                        Available Cars
                                    </NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/addCar" className="text-[20px]">
                                        Add Car
                                    </NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/myCars" className="text-[20px]">
                                        My Cars
                                    </NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/myBookings" className="text-[20px]">
                                        My Bookings
                                    </NavLink>
                                </li>

                                <li className='navLinks'> 
                                    <NavLink to="/dashboard" className="text-[20px]">
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li>
                                    <button onClick={handleSignOut}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='navLinks'>
                                    <NavLink to="/" className="text-[20px]">Home</NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/availableCars" className="text-[20px]">
                                        Available Cars
                                    </NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/login" className="text-[20px]">
                                        Login
                                    </NavLink>
                                </li>

                                <li className='navLinks'>
                                    <NavLink to="/register" className="text-[20px]">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Jatri */}
                <Link
                    to="/"
                    className="text-4xl font-extrabold text-[#2D336B]">
                    Jatri
                </Link>

            </div>


            {/* ================= DESKTOP HEADER ================= */}
            <div className="hidden lg:flex w-full items-center">

                {/* Logo + Jatri */}
                <div className="navbar-start">
                    <img
                        className="w-15 h-15 ml-1"
                        src={siteLogo}
                        alt="siteLogo"
                    />
                    <Link
                        to="/"
                        className="text-4xl font-extrabold text-[#2D336B]"
                    >
                        Jatri
                    </Link>
                </div>


                {/* Navigation */}
                <div className="navbar-center">
                    <ul className="menu-horizontal text-[#2D336B] text-2xl font-bold">

                        {user && user?.email ? (
                            <>
                                <li className="navLinks">
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/availableCars">
                                        Available Cars
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/addCar">
                                        Add Car
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/myCars">
                                        My Cars
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/myBookings">
                                        My Bookings
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/dashboard">
                                        Dashboard
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="navLinks">
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/availableCars">
                                        Available Cars
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                </li>

                                <li className="navLinks ml-10">
                                    <NavLink to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}

                    </ul>
                </div>


                {/* User section */}
                <div className="navbar-end">

                    <div className="flex px-6 rounded-3xl py-1 gap-4 justify-center items-center">

                        {user && user?.email ? (
                            <>
                                <img
                                    className="w-10 h-10 bg-blue-900 border border-blue-900 p-1 rounded-2xl"
                                    src={user?.photoURL}
                                    alt="userPhoto"
                                />

                                <h1 className="text-[#2D336B] text-xl font-bold whitespace-nowrap">
                                    Hi, {user?.displayName
                                        ? user?.displayName
                                        : "User"}
                                </h1>
                            </>
                        ) : (
                            <FaUserCircle
                                className="bg-white p-1 rounded-full"
                                size={40}
                            />
                        )}

                    </div>

                    {user && user?.email && (
                        <button
                            className="ml-3 p-2 flex gap-2 bg-[#b2a5ff75] rounded-xl justify-center items-center cursor-pointer hover:rounded-4xl hover:bg-[#a6ace0] text-2xl"
                            onClick={handleSignOut}
                        >
                            <FiLogOut
                                size={25}
                                color="purple"
                            />
                            Logout
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Header;
