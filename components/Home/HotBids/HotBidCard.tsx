'use client'
import Image from 'next/image';
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import Tilt from 'react-parallax-tilt';

type Props= {
    data:{
        id:number;
        image: string;
        name:string;
        eth:number;
        currentBid:number;
        love:number
    }
}

const HotBidCard=({data}:Props)=> {
  return (
    <Tilt>
       <div className='rounded-lg border-2 cursor-pointer border-gray-500 border-opacity-30 p-6'>
          <div className='w-full h-[180px] '>
          <Image src={data.image} alt={data.name} width={300} height={280} className='w-full h-full object-cover' />
          
          </div>
          <div>
            <div className='flex mt-6 items-center justify-between'>
              <h1 className='text-[#F0F0F0] hover:text-gray-500 transition-all duration-200 text-base font-bold'>{data.name}</h1>
              <span className='px-2 border-[1px] rounded-md border-gray-500 text-xs font-bold text-[#FFD700] '>{data.eth} ETH</span>
            </div>
            <p className='mt-2 mb-2 text-[#E6E6FA] '>Current Bids <span className='text-[#39FF14]'>{data.currentBid} </span> ETH</p>
           <div className='flex items-center mt-4 justify-between'>
              <h1 className='text-[#FFFF00] text-sm font-bold'>Get Bid</h1>
              <div className='flex items-center text-[#39FF14] space-x-2'>
                <BsHeart />
                <span className='text-sm'>{data.love} </span>

              </div>
           </div>
          </div>
       </div>
    </Tilt>
  )
}

export default HotBidCard
