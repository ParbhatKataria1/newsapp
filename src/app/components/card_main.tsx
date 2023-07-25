'use client'
import React from 'react';
import articles_data, { NewsSchema } from '@/utils/fetch';
import Card from './card';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const CardMain:React.FC<any> = ({children}) => {
    const { user } = useAuthContext();
    console.log(user)
      const router = useRouter()
      if (user == null) router.push("/auth/login")
  return (
    <>
    {children}
    </>
  )
}

export default CardMain