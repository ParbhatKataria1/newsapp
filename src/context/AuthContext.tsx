'use client'
import React, {useEffect} from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { ContextType } from '@/todos/types';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<ContextType | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

export interface MyComponentProps {
    children: React.ReactNode;
  }

export const AuthContextProvider = ({ children }:MyComponentProps) => {
    const [user, setUser] = React.useState<String | null >(null);
    const [loading, setLoading] = React.useState<Boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user:String) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};