import React from 'react'
import CreateSnflCard from './CreateSnflCard'

const CreateSnft=()=> {
  return (
    <div className='pt-16 pb-20'>
        <h1 className='text-center font-bold text-3xl p-2 md:text-4xl text-black'>Sell & Create Your NFTs</h1>
      <div className='w-[80%] mt-8 md:mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12 '>
         
            {/* crs nfts */}
            <CreateSnflCard image="/images/p1.png" title="1. Set up your wallet" />
            <CreateSnflCard image="/images/p2.png" title="2. Set up your wallet" />
            <CreateSnflCard image="/images/p3.png" title="3. Add your NFTs" />
            <CreateSnflCard image="/images/p4.png" title="4. Set up your wallet" />
                    
         
      </div>
    </div>
  )
}

export default CreateSnft
