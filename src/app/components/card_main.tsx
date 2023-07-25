'use client'
import React from 'react';
import articles_data, { NewsSchema } from '@/utils/fetch';
import Card from './card';
import { MyComponentProps, useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const CardMain = ({children}:MyComponentProps) => {
    const { user } = useAuthContext();
      const router = useRouter();
      if (user == null) router.push("/auth/login")
  return (
    <>
    {children}
    </>
  )
}

export default CardMain