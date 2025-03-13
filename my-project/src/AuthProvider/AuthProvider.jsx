import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const googleProvider= new GoogleAuthProvider();

    const registerUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const userSignOut=()=>{
        setLoading(true)
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                console.log('user Log in', currentUser);
                setUser(currentUser)
                setLoading(false);
            }else{
                console.log('user sign out');
                setLoading(false);
            }
        });

        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo={
        user,
        loading,
        signInWithGoogle,
        registerUser,
        signInUser,
        userSignOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;