import React from 'react';
import { FaBars, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import Image from "next/image";

const MobileMenuButton = () => {
  return (
    <div className="block lg:hidden">
      <FaBars size={28} />
    </div>
  );
};

const AboutTab = () => {
  return (
    <a href="/about" className="tab text-gray-900 hover:text-indigo-600">
      About
    </a>
  );
};

const ServicesTab = () => {
  return (
    <a href="/services" className="tab ml-4 text-gray-900 hover:text-indigo-600">
      Services
    </a>
  );
};

const SearchBar = () => {
  return (
    <div className="hidden lg:flex justify-center items-center mb-1 md:mr-4 lg:mr-96">
      <input
        type="text"
        placeholder="Hi! Shop your divine products here...."
        className="border bg-violet-200 p-2 rounded-full focus:outline-none w-full md:w-96"
      />
    </div>
  );
};

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-400'>
      <div className='container flex justify-between items-center px-4 md:px-16 lg:px-7'>
        <div className="flex items-center">
          <Image src="/assets/divine logo  1.png" alt="Logo" width={176} height={68} />
          <AboutTab />
          <ServicesTab />
        </div>
        <div className="flex items-center">
          <MobileMenuButton />
          <SearchBar />
          <div className='flex gap-4 items-center'>
            <div className='header_top_icon_wrapper'>
              <IoSearchSharp size={32} />
            </div>
            <div className='header_top_icon_wrapper'>
              <FaLinkedinIn size={32} />
            </div>
            <div className='header_top_icon_wrapper'>
              <FaInstagramSquare size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
