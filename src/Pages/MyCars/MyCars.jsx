import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import MyCarsList from './MyCarsList';
import { MyCarsPromise } from '../../API/MyCarsPromise';


const MyCars = () => {
    const {user} = useContext(AuthContext)
    
    // console.log(user)

    return (
        <div>
            <MyCarsList myCarsPromise = {MyCarsPromise(user.email)}></MyCarsList>
        </div>
    );
};

export default MyCars;