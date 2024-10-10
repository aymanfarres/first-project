import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer=()=> {
  return (
    <div className='pt-12 pb-12'>
      <div className='w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center '>
       
       <div>
        <div className='text-2xl text-red-700 font-semibold mb-4'>
          FANFTs Market
        </div>
        <p className='text-gray-700 tet-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptates eveniet dolores harum a maxime, repudiandae modi consequatur debitis vero accusantium quia id quaerat saepe eos nesciunt ad? Fuga, eum.
        </p>
        <div className='mt-4 flex items-center space-x-4'>
            <FaFacebook className='w-6 h-6 text-blue-700'/>
            <FaTwitter className='w-6 h-6 text-sky-500'/>
            <FaYoutube className='w-6 h-6 text-rose-700'/>
            <FaInstagram className='w-6 h-6 text-pink-600'/>
        </div>
       </div>
       <div className='md:mx-auto mx-0'>
          <h1 className='footer__title'>MarketPlace</h1>
          <p className='footer__link'>All Nfts</p>
          <p className='footer__link'>Art</p>
          <p className='footer__link'>Music</p>
          <p className='footer__link'>Colectibles</p>
          <p className='footer__link'>Walletsg</p>
       </div>

       <div className='md:mx-auto mx-0'>
          <h1 className='footer__title'>Company</h1>
          <p className='footer__link'>Explore</p>
          <p className='footer__link'>About</p>
          <p className='footer__link'>Contact us</p>
          <p className='footer__link'>Our Blog</p>
          <p className='footer__link'>Faq</p>
       </div>

       <div className='md:mx-auto mx-0'>
          <h1 className='footer__title'>My Account</h1>
          <p className='footer__link'>Authors</p>
          <p className='footer__link'>Collection</p>
          <p className='footer__link'>Author Profile</p>
          <p className='footer__link'>Create item</p>
          <p className='footer__link'>NFT profile</p>
       </div>
      </div>
      <div className='text-center mt-4 text-sm text-black opacity-75'>
        Copyright © 2024 by Aymane Farres
      </div>
    </div>
  )
}

export default Footer

