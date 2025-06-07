import React from 'react';
import errorImage from '../../assets/errorPage.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mt-40 flex justify-center items-center gap-20'>
            <img className="w-110 h-110 bg-blue-50 rounded-2xl border-2 border-blue-700"src={errorImage} alt="errorImage" />
            <Link to='/'><button className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600 border-b-[4px] hover:brightness-110 
                hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-[150px]'>
                Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;