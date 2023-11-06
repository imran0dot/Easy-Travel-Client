import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '../../Fireabase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export const Auth = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(user)
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(res => {
            setUser(res.user);
            toast.success("Login Success")
        }).catch(() => toast.error("something wernt wrong"))
    }

    const logOut = () => {
        signOut(auth).then(() => {
            toast.success("Logout")
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => unSubscribe();
    }, [user])

    const data = {
        user,
        createUser,
        logOut,
    }
    return (
        <Auth.Provider value={data}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;