import articles_data, { NewsSchema } from '@/utils/fetch';
import React from 'react'
import Card from './card';

const CardData = async() => {
    const data:NewsSchema[] = await articles_data();
  return (
     <div className='w-11/12 m-5 mx-auto'>
        <h1 className='my-10 text-4xl text-center'>News App</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14">
    {
      data?.map((data)=>{
        return  <Card key={data?.title} data={data}/>
      })
    }
    </div>
    </div>
  )
}

export default CardData

