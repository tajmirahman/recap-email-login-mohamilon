import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);

    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const userSignOut=()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                console.log('user Log in', currentUser);
                setUser(currentUser)
            }else{
                console.log('user sign out')
            }
        });

        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo={
        user,
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