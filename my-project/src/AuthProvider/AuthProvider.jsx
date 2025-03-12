import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase.init';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const name='ami tumar tumi amar';

    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authInfo={
        name,
        registerUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;