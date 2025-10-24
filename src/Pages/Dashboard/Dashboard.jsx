import React from 'react';
import {  NavLink, Outlet } from 'react-router';
import { FaHome,FaChartLine, FaUser } from 'react-icons/fa';
import "./Dashboard.css"


const DashboardRoot = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar for small screen*/}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                    
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-xl min-h-full w-80 p-4 flex flex-col justify-between"> 
                {/* Sidebar content */}
                <div className='mt-10 text-2xl'>
                    <li>
                        <NavLink to="/">
                        <FaHome className="navLinks inline-block" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userProfile">
                        <FaUser className="inline-block " />
                            My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/comparePrices">
                        <FaChartLine className="inline-block " />
                            Compare Prices
                        </NavLink>
                    </li>
                </div>

                <div className='-ml-15 flex justify-center items-center gap-2'>
                    <h1 className='text-4xl font-extrabold text-[#2D336B]'>Jatri</h1>
                </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardRoot;