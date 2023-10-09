import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const  [loading,setLoading] = useState(true);

    //for registration 


    const createUser = (email, password, photoURL, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            return updateProfile(result.user, { displayName, photoURL }) // Update user profile
              .then(() => {
                setUser(result.user); // Update the user state
                window.location.reload(true)
                setLoading(false);
              });
          });
      }

    
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.........................................................
    // for login 
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    
// for logout 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    
    //for update
    

    // spy baba 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
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