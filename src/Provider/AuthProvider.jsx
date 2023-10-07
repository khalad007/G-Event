import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //for registration 
    const createUser = (email,password,photoURL) => {
        return createUserWithEmailAndPassword(auth,email,password,photoURL);
    }

    // for login 
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

// for logout 
    const logOut = () =>{
        return signOut(auth);
    }


    // spy baba 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, cUser => {
            console.log('auth state', cUser);
            setUser(cUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;