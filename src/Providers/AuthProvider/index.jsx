import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Fireabase';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';

export const Auth = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(false);


    const auth = getAuth(app);

    const createUser = (email, password) => {
        setUserLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(res => {
            setUser(res.user);
            toast.success("Login Success");
            setUserLoading(false);
        }).catch((err) => {
            toast.error(`please try again ${err}`)
            setUserLoading(false);
        })
    }

    const loginUser = (email, password) => {
        setUserLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                toast.success("Login Success");
                setUserLoading(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error("something wernt wrong")
                setUserLoading(false);
            });
    }

    const logOut = () => {
        setUserLoading(true);
        signOut(auth)
            .then(() => {
                toast.success("Logout");
                setUserLoading(false);
                localStorage.clear();
            }).catch(() => setUserLoading(false))
    }

    //user observer
    useEffect(() => {
        setUserLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                axios.post('jwt', { email: currentUser.email })
                    .then(res => localStorage.setItem('token', res.data))
                    .catch(err => {
                        console.error('Error:', err);
                    });
            }
            setUser(currentUser);
            setUserLoading(false);
        })

        return () => unSubscribe();
    }, [user])

    const data = {
        user,
        userLoading,
        setUserLoading,
        createUser,
        loginUser,
        logOut,
    }
    return (
        <Auth.Provider value={data}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;