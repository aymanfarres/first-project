import { navLinks } from '@/constants/Constans';  // Corrected import
import React from 'react';
import { BiUser, BiWallet } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

type Props = {
  openNav: () => void;
};

const Nav: React.FC<Props> = ({ openNav }) => {
  return (
    <div className="w-full h-[13vh]">
      <div className="w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between">
        <h1 className="font-logo font-bold">NFTSale</h1>

        {/* Navigation Links */}
        <div className="lg:flex hidden items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              smooth={true}
              duration={500}
              className="text-lg font-semibold cursor-pointer hover:text-blue-800 transition-all duration-200 text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-8">
          <BiWallet className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <BiUser className="w-6 h-6 cursor-pointer hover:text-red-600" />
          <FaBars onClick={openNav} className="w-6 h-6 cursor-pointer hover:text-red-600 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
