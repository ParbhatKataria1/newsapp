'use client'
import { NewsSchema, article, dummy_image } from '@/utils/fetch';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect, useState } from "react";


const ShowDetails:React.FC<{params:{id:String}}> =  ({params}) => {

    const [data, setdata] = useState<NewsSchema>();
    const fetchdata = async()=>{
        const temp = await article(params?.id)  ;
        console.log('temp', temp)
        setdata(temp[0]);
    }
    useEffect(()=>{
        fetchdata()
    }, [])
//     const router = useRouter();
//   const id = router.query;
//   console.log(id)

  return (
    <div>
        <h1 className='my-10 text-4xl text-center'>Article Content</h1>

    
    <div className='w-11/12 mx-auto mt-2 p-10 shadow-md items-center'>
        <div className="flex  justify-between">
            <Image width={300} height={400} src={data?.image || dummy_image} alt='Not Found' />
            <div className='w-3/5'>
                <div className='flex justify-between'>
                <p className='text-right text-sm py-4 font-weight: 800'>PublishedAt - {data?.publishedAt}</p>

                </div>
                <h2 className='text-2xl'>{data?.title}</h2>
                <h3 className='py-2'>{data?.description}</h3>
            </div>
            
        </div>
        <hr className='mt-5'/>
        <div>
                <h2 className='text-bold text-2xl my-5'>
                    Content
                </h2>

                <p>{data?.content}</p>
            </div>
    </div>
    </div>
  )
}

export default ShowDetails