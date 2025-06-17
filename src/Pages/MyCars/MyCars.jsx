import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import MyCarsList from './MyCarsList';
import { myCarsPromise } from '../../API/MyCarsPromise';

const MyCars = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div> }>
                <MyCarsList myCarsPromise = {myCarsPromise(user?.email)}></MyCarsList>
            </Suspense>
        </div>
    );
};

export default MyCars;