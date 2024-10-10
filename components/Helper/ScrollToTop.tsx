'use client'
import React, { useEffect, useState } from 'react'

function ScrollToTop() {

    const [isValibale,setIsValibale]= useState(false)
     useEffect(()=>{
      const togglevisibilty=()=>{
        if(window.scrollY > 300){
        setIsValibale(true)
        }else{
            setIsValibale(false)
        }
      }
     window.addEventListener("scroll", togglevisibilty)
      
     return ()=>{
        window.removeEventListener("scroll", togglevisibilty)
     }
     },[])
   const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
   }

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isValibale && <button onClick={scrollToTop} className='bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>TOP</button>}
    </div>
  )
}

export default ScrollToTop
