import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config.js'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // console.log(loading,user);


    // register with email & password
    const handleRegister = (email,password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleGoogleAuth = () => {
        return signInWithPopup(auth,provider);
    }

    // update profile
    const handleUpdateProfile = (updateData) => {
        return updateProfile(auth.currentUser , updateData)
    } 

    
    // setting up an observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        
        return () => {
            unsubscribe();
        }
    })
    
    const userInfo = {
        handleRegister,
        handleGoogleAuth,
        handleUpdateProfile,
        user,
        setUser,
        loading,setLoading,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;