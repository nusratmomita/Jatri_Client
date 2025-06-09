import React, { useContext } from 'react';
import siteLogo from '../../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

    const {user , handleLogout} = useContext(AuthContext);

    const handleSignOut = () => {
        handleLogout()
        .then(()=>{
            toast.success("You've logged out successfully" );
        })
        .catch(()=>{
        })
    }

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
                            user && user?.email ? 
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/availableCars">Available Cars</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/addCar">Add Car</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/myCars">My Cars</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/myBookings">My Bookings</NavLink></li>
                            </> 
                            :
                            <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/availableCars">Available Cars</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <Link to="/" className="text-4xl font-extrabold text-[#2D336B]">Jatri</Link>
                <img className="hidden lg:block w-20 h-20" src={siteLogo} alt="siteLogo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1  text-[#2D336B] text-2xl font-bold">
                {
                    user && user?.email ? 
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/availableCars">Available Cars</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/addCar">Add Car</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/myCars">My Cars</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/myBookings">My Bookings</NavLink></li>
                    </> 
                    :
                    <>
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/availableCars">Available Cars</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                    </>
                }
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-2 lg:gap-4 justify-center items-center'>
                    {
                        user && user?.email ?
                        <>
                            <img className="w-10 h-10 bg-white p-1 rounded-full" src={user?.photoURL} alt="userPhoto" />
                            <h1 className='text-[#2D336B] text-2xl font-bold'>Hi,{user?.displayName}</h1>
                        </>
                        :
                        <FaUserCircle className="w-15 h-15 bg-white p-1 rounded-full" size={25}></FaUserCircle>
                    }
                </div>
                {
                    (user && user?.email) ?
                    <button className="ml-6 lg:ml-3  p-3 flex gap-2 bg-[#B2A5FF] rounded-2xl justify-center items-center cursor-pointer hover:rounded-4xl hover:bg-[#a6ace0] text-2xl" onClick={handleSignOut} ><FiLogOut size={25} color='purple'></FiLogOut>Logout</button>
                    :
                    "" 
                }
            </div>
        </div>
    );
};

export default Header;