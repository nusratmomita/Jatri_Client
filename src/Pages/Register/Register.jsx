import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import registerImage from '../../assets/registerImage.jpg'


const Register = () => {

    const {handleRegister , handleUpdateProfile , handleGoogleAuth , setUser} = useContext(AuthContext);

    const navigate = useNavigate();


    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // console.log(name,email,photoURL,password);

        if(!name || !email || !photoURL || !password){
            toast.error("You must fill in all the fields!");
            return;
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        if(!/[A-Z]/.test(password)){
            toast.error("Password must have at least one Upper case letter.");
            return;
        }
        if(!/[a-z]/.test(password)){
            toast.error("Password must have at least one Lower case letter.");
            return;
        }

        handleRegister(email,password)
        .then((result)=>{
            const user = result.user
            handleUpdateProfile({displayName: name , photoURL: photoURL})
            .then(()=>{
                setUser({...user , displayName: name , photoURL: photoURL})
                toast.success("You've successfully created an account!");
                setTimeout(()=>{
                    navigate('/');
                },1500)
                form.reset();
            })
            .catch(()=>{
                toast.error("You have put invalid credentials")
                setUser(user)
            })

        })
        .catch(()=>{
            // console.log(error)
            toast.error("You've put invalid credentials. Please try again.")
        })


    }

    const handleGoogle = () => {
        handleGoogleAuth()
        .then(()=>{
        toast.success("You've successfully created an account!");
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
            <div className="hero-content w-full rounded-3xl mt-30 px-25 py-5 flex-col justify-evenly lg:flex-row">
                <div className="bg-gradient-to-br from-[#FFF2F2] to-[#DAD2FF] flex flex-row-reverse justify-center items-center p-2 rounded-2xl w-full shadow-2xl">
                    <img className="w-120 h-130" src={registerImage} alt="loginImage" />
                    <div className="p-6 flex flex-col max-w-lg rounded-2xl sm:p-10  text-gray-800">
                        <div className="mb-4 text-center">
                        <h1 className="my-3 text-4xl font-bold underline">Register</h1>
                        <p className="text-lg dark:text-gray-600">
                            Create an Account to Continue
                        </p>
                            <div className="divider"></div>
                        </div>
                        <form onSubmit={handleRegistration} className="space-y-8">
                            <div className="space-y-2 text-2xl">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-2xl">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Enter Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-2xl">Enter Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                                </div>
                                <div>
                                    <label htmlFor="photoURL" className="block mb-2 text-2xl">Photo URL</label>
                                    <input type="text" name="photoURL" id="photoURL" placeholder="photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
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
                                    <button type="submit" className="cursor-pointer w-full px-8 py-3 text-3xl font-semibold rounded-md dark:bg-[#2D336B] dark:text-gray-50">Register</button>
                                </div>
                                <button type="button" onClick={handleGoogle} className="btn w-full bg-white text-black text-xl border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                                <div className="divider"></div>
                                <p className="px-6 text-xl text-center dark:text-gray-600">
                                Already Have An Account?
                                <NavLink className="underline text-purple-700"to="/login"> Login here</NavLink>
                                </p>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;