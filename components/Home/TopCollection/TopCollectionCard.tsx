import Image from 'next/image';
import React from 'react'

type Props={
    data: {
        id: number;
        image: string;
        name: string;
        eth: number;
};}

const TopCollectionCard= ({data}:Props) => {
  return (
    <div className='rounded-2xl hover:shadow-md transition-all p-5 duration-150  cursor-pointer border-2 border-[#FF69B4] border-opacity-30 '>
      <div className='flex items-center space-x-6'>
        <div>
            <Image src={data.image} alt={data.name} width={48} height={48} />
        </div>
        <div>
            <h1 className='text-base text-[#C0C0C0] hover:text-indigo-950 font-bold mb-2'>{data.name}</h1>
            <span className='text-sm text-black text-opacity-50'>{data.eth} ETH</span>
        </div>
      </div>
    </div>
  )
}

export default TopCollectionCard
