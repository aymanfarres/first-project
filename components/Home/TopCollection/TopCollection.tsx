import { TopCollectionData } from '@/app/data/data'
import React from 'react'
import TopCollectionCard from './TopCollectionCard'

const TopCollection=()=> {
  return (
    <div className='pt-16 pb-12'>
        <h1 className='text-center font-bold text-3xl p-2 md:text-4xl text-black'>Collection Top List <span className='text-[#C0C0C0]'>Over This Day</span></h1>
       <div className='mt-16 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 '>
         {TopCollectionData.map((data,i)=>{
            return <div key={data.id} data-aos="fade-right" data-aos-delay={`${i*100}`}>
                <TopCollectionCard data={data}/>
            </div>
         })}
       </div>
    </div>
  )
}

export default TopCollection
