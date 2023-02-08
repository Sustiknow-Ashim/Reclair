import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'



export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
const logIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
const emailVerify = ()=>{
    return sendEmailVerification(auth.currentUser)
}

const updateUser =(userInfo) =>{
    return updateProfile(auth.currentUser, userInfo)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        if(currentUser === null || currentUser.emailVerified){

            setUser(currentUser)
        }
        setLoading(false)
    })
    return () => unSubscribe()
},[])

    const authInfo ={
        createUser,
        logIn,
        logOut,
        updateUser,
        googleSignIn,
        emailVerify,
        user,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;