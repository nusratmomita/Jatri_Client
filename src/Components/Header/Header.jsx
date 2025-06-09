import React, { useContext } from 'react';
import siteLogo from '../../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { AuthContext } from '../../Authentication/AuthContext';

const Header = () => {

    const {user} = useContext(AuthContext);


    const links = 
        <>
            <li className='navLinks'><NavLink to="/">Home</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/availableCars">Available Cars</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/addCar">Add Car</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/myCars">My Cars</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/myBookings">My Bookings</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
            <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
        </>

    return (
        <div className="navbar bg-gradient-to-l from-[#FFF2F2] to-[#A9B5DF] shadow-sm p-7 rounded-[40px] mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-[#2D336B] text-2xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to="/" className="text-4xl font-extrabold text-[#2D336B]">Jatri</Link>
                <img className="w-20 h-20" src={siteLogo} alt="siteLogo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1  text-[#2D336B] text-2xl font-bold">
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-4 justify-center items-center'>
                    <img className="w-10 h-10 bg-white p-1 rounded-full "src={user?.photoURL} alt="userPhoto" />
                    <h1 className='text-[#2D336B] text-2xl font-bold'>Hi,{user?.displayName}</h1>
                </div>
                <button className='btn ml-5'>Logout</button>
            </div>
        </div>
    );
};

export default Header;