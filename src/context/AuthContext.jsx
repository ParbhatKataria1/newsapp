'use client'
import React, {useEffect} from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { ContextType } from '@/todos/types';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? <div>Loading...</div> : children}
            {/* {children} */}
        </AuthContext.Provider>
    );
};