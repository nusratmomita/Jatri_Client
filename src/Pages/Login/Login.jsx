import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router';

const Login = () => {

    const {handleLogin , handleGoogleAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email,password)
        .then(()=>{
            toast.success("You've successfully logged in!");
            setTimeout(()=>{
                navigate('/')
            },1500);
        })
        .catch(()=>{
            toast.error("You have put invalid credentials.Please try again")
        })
    }

    const handleGoogle = () => {
        handleGoogleAuth()
        .then(()=>{
        toast.success("You've successfully logged in!");
        setTimeout(()=>{
            navigate('/');
        },1500)
        })
        .catch(()=>{
            toast.error("You've put invalid credentials. Please try again.")
        })
    }

    return (
        <div className="winky-rough-regular min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-30">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Form Section */}
                    <div className="p-8 sm:p-10">
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D336B] to-[#5a5f9e] rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h1 className="text-4xl font-bold text-[#2D336B] mb-2">Welcome Back</h1>
                            <p className="text-base text-gray-600">
                                Sign in to your account
                            </p>
                        </div>

                        <form onSubmit={handleLoginForm} className="space-y-4">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block mb-1.5 text-xl font-semibold text-gray-700">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="john@example.com" 
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D336B] focus:ring-1 focus:ring-[#2D336B] transition-all duration-200 bg-white text-gray-800 text-xl"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block mb-1.5 text-xl font-semibold text-gray-700">
                                    Password
                                </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2D336B] focus:ring-1 focus:ring-[#2D336B] transition-all duration-200 bg-white text-gray-800 text-xl" 
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="cursor-pointer w-full px-6 py-3 text-base font-semibold text-white bg-[#2D336B] rounded-lg hover:bg-[#1f2452] focus:outline-none focus:ring-2 focus:ring-[#2D336B] focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Sign In
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="relative flex items-center py-3">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="flex-shrink mx-4 text-gray-500 text-xs font-medium">OR CONTINUE WITH</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            {/* Google Button */}
                            <button 
                                type="button" 
                                onClick={handleGoogle} 
                                className="cursor-pointer w-full px-6 py-3 flex items-center justify-center gap-3 text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <g>
                                        <path d="m0 0H512V512H0" fill="#fff"></path>
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                    </g>
                                </svg>
                                Continue with Google
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-xl text-gray-600 pt-4">
                                Don't have an account?{' '}
                                <NavLink 
                                    className="hover:underline font-semibold text-[#2D336B] hover:text-[#1f2452] transition-colors duration-200" 
                                    to="/register"
                                >
                                    Create account
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;