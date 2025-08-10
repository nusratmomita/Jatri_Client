import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router';
import loginImage from '../../assets/loginImage.png'

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
            // console.log(error)
            toast.error("You've put invalid credentials. Please try again.")
        })
    }
    return (
        <div className="winky-rough-regular hero">
            <div className="hero-content w-full rounded-3xl mt-30 px-25 py-5  flex-col justify-evenly lg:flex-col-reverse">
                <div className="bg-gradient-to-tl from-[#FFF2F2] to-[#DAD2FF] flex flex-col lg:flex-row-reverse justify-center items-center p-2 rounded-2xl w-full shadow-2xl">
                    <img className="w-120 h-130" src={loginImage} alt="loginImage" />
                    <div className="p-6 flex flex-col rounded-2xl sm:p-10  text-gray-800">
                        <div className="mb-4 text-center">
                            <h1 className="my-3 text-4xl font-bold underline">Login</h1>
                            <p className="text-2xl dark:text-gray-600">
                                Welcome Back!
                            </p>
                            <div className="divider"></div>
                        </div>
                        <form onSubmit={handleLoginForm} className="space-y-8">
                            <div className="space-y-4 text-2xl">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-2xl">Enter Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                                </div>
                                <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-2xl">Enter Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Enter password"className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="cursor-pointer w-full px-8 py-3 text-2xl font-semibold rounded-md dark:bg-[#2D336B] dark:text-gray-50">Login</button>
                                </div>
                                {/* <h1 className="text-center text-2xl font-bold">Or</h1> */}
                                <button type="button" onClick={handleGoogle} className="btn w-full bg-white text-black text-xl border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <div className="divider"></div>
                                <p className="px-6 text-xl text-center dark:text-gray-600">
                                Don't have an account?
                                <NavLink className="underline text-purple-700"to="/register"> Register here</NavLink>
                                </p>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;