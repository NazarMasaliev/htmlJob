"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import HamburgerMenu from './humbergerMenu';


const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  function openmodal() {
    document.getElementById('modal')?.classList.remove('hidden');
    document.getElementById('modal')?.classList.add('fixed');

  }

  return (

    <header className="bg-white border-b border-gray-200 shadow-xs w-[100%] flex justify-center fixed z-10 border">
      {/* Desktop Version - Exactly as original */}
      <div className="hidden lg:flex xl:w-[85%] lg:w-[90%] h-[70px] justify-between items-center">
        <div className="w-[25%] h-[100%] flex items-center justify-start overflow-hidden">

          {/* Desktop logo size: 100px */}
          <HamburgerMenu />
          <Image src="/logoMain.png" alt="logo" width={150} height={150} className='hover:scale-105 cursor-pointer' />
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <ul className='flex w-[100%] xl:text-[17px] lg:text-[15px] font-saira-stencil xl:gap-9 lg:gap-6 justify-center'>
            <li className='cursor-pointer hover:underline active:text-red-600 flex items-center gap-3'><Image src="/crossline.svg" alt="logo" width={25} height={25} className='hover:scale-105 cursor-pointer' />Seu time</li>
            <li className='cursor-pointer hover:underline active:text-red-600 flex items-center gap-3'><Image src="/night-icon.svg" alt="logo" width={20} height={20} className='hover:scale-105 cursor-pointer' /> Seu signo</li>
            <li className='cursor-pointer hover:underline active:text-red-600'>Jogos</li>
            <li className='cursor-pointer hover:underline active:text-red-600 flex items-center gap-1'>Dólar  <svg
              className="text-green-500 w-5 h-5 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12L12 5L19 12" />
            </svg> <span className='text-green-600 text-[15px]'>5,677</span></li>
          </ul>
        </div>
        <div className='w-[25%] h-[100%] flex items-center justify-end gap-4'>
          <button className='font-semibold cursor-pointer flex items-center gap-3'> <Image src="/Profile.svg" alt="logo" width={30} height={60} className='hover:scale-105 cursor-pointer' />Entre</button>
          <button className='font-semibold cursor-pointer bg-[#FFCE00] p-2 rounded-md px-4' onClick={openmodal}>Assine UOL</button>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="lg:hidden w-[100%] px-10 h-16 sm:h-20 md:h-20 flex justify-between items-center">
        <div className="flex items-center">
          {/* Mobile logo size: 40px */}
          <Image src="/logoMain.png" alt="logo" width={100} height={100} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-200  transform ${mobileMenuOpen
          ? "opacity-100 max-h-64 translate-y-0"
          : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
          } overflow-hidden`}
      >
        <ul className="flex flex-col p-4 ps-10 space-y-4 font-saira-stencil text-lg">
          <li className=' flex space-x-4 text-sm'>
            <button className='font-semibold cursor-pointer flex items-center gap-3 active:text-red-600'> <Image src="/Profile.svg" alt="logo" width={30} height={60} className='hover:scale-105 cursor-pointer' />Entre</button><button className='font-semibold cursor-pointer bg-[#FFCE00] p-2 rounded-md px-4' onClick={openmodal}>Assine UOL</button>
          </li>
          <li className='active:text-red-600'>Top stories</li>
          <li className='active:text-red-600'>Politics</li>
          <li className='active:text-red-600'>Sports</li>
          <li className='active:text-red-600'>Economics</li>
        </ul>

      </div>
    </header>
  );
};

export default Header;