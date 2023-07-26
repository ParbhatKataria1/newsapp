'use client'
import React, { useContext } from 'react';
import articles_data, { NewsSchema } from '@/utils/fetch';
import Card from './card';
import { AuthContext, MyComponentProps } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const CardMain = ({children}:MyComponentProps) => {
    const { user } = useContext(AuthContext)
      const router = useRouter();
      if (user == null) router.push("/auth/login")
  return (
    <>
    {children}
    </>
  )
}

export default CardMain