import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const Authcontext = createContext(null);
const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const userCreateWithEmailpassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singWithEmailpassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const gprovider = new GoogleAuthProvider();

    const gitprovider = new GithubAuthProvider();

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, gprovider)
    }
    const loginwithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitprovider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = {
        singWithEmailpassword,
        userCreateWithEmailpassword,
        logOut,
        loginwithGoogle,
        loginwithGithub,
        user,
        loading,
        setLoading,

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};
export default Authprovider;