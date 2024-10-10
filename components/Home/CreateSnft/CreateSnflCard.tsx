import Image from 'next/image';
import React from 'react'

type Props={
    image: string;
    title: string;
}

const CreateSnflCard=({title, image}:Props)=> {
  return (
    <div>
      <Image src={image} alt={title} height={60} width={60} className='mx-auto' />
      <h1 className='mt-8 mb-2 text-center text-lg font-bold'>{title} </h1>
      <p className='text-sm text-gray-400 text-center text-opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur neque illum dolorem ullam repellat impedit reiciendis dolore, commodi saepe nobis, explicabo quisquam expedita ipsa fugit. Soluta sapiente modi accusantium consequatur?</p>
    </div>
  )
}

export default CreateSnflCard
