import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password,photoURL) => {
        return createUserWithEmailAndPassword(auth,email,password,photoURL);
    }


    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;