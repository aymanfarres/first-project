import { navLinks } from '@/constants/Constans'
import React from 'react'
import { BiX } from 'react-icons/bi'
import { Link } from 'react-scroll'

type Props = {
  nav: boolean,
  closeNav: () => void
}

const MobileNav = ({ closeNav, nav }: Props) => {
  const responsiveNav = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`transform ${responsiveNav} transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-yellow-400`}>
      
      {/* Logo */}
      <div>
        <h1 className='pt-8 text-2xl font-logo font-bold ml-2'>NFTSale</h1>
        <BiX onClick={closeNav} className='w-8 h-8 absolute cursor-pointer top-[2rem] text-black z-[202] right-[2rem]' />
      </div>
      
      {/* Navigation Links */}
      <div className='relative z-[201] space-y-10 flex flex-col items-center justify-center h-full'>
        {navLinks.map((link) => (
          <Link 
            key={link.id} 
            to={link.href} 
            smooth={true} 
            duration={500} 
            className='text-2xl font-semibold cursor-pointer hover:text-blue-400 transition-all duration-200 text-gray-400'
            onClick={closeNav}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
