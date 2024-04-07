'use client'
import React, { useState, ChangeEvent } from 'react';

const Services = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex flex-col justify-center items-center h-auto mt-8'>
      {/* Services Available */}
      <div className='w-64 flex justify-center items-center rounded-full bg-violet-400 border border-gray-400 p-4'>
        <p className='text-lg md:text-xl lg:text-2xl text-center text-black font-bold'>Services Available</p>
      </div>
      {/* Select Calligraphy Style Dropdown */}
      <div className="w-3/6 relative mt-8">
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-full border bg-violet-200 px-4 py-2 rounded-full mb-2"
        >
          <option value="">Select Calligraphy Style</option>
          <option value="copperplate">Copperplate Calligraphy</option>
          <option value="blackletter">Blackletter Calligraphy</option>
          <option value="linguistic">Linguistic Calligraphy</option>
          <option value="italic">Italic Calligraphy</option>
          <option value="gothic">Gothic Calligraphy</option>
          <option value="roman">Roman Capitals</option>
        </select>
      </div>
      {/* Previous Orders Tab */}
      <div className="w-72 mt-4">
        <div className="flex justify-center items-center bg-violet-400 p-2 ">
          <p className="text-base md:text-lg lg:text-xl text-black font-bold text-center">Previous Orders</p>
        </div>
      </div>
      {/* Discover the essence of stroke */}
      <div className="w-full px-4 mt-4"> {/* Full width container */}
        <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-600">Discover the essence of stroke</p>
        <div className="w-12 h-0.5 bg-gray-400 my-2"></div> {/* Line */}
      </div>

      

      {/* Pictures Section */}
      <div className="w-full flex flex-wrap justify-center items-center mt-4">
        <div className="flex flex-wrap justify-center items-center">
          <img src="/assets/IMG-20240401-WA0136.jpg" alt="Image 1" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0137.jpg" alt="Image 2" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0139.jpg" alt="Image 3" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0151.jpg" alt="Image 4" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0148.jpg" alt="Image 1" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0154.jpg" alt="Image 2" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0138.jpg" alt="Image 3" className="w-72 h-72 m-2 hover:scale-105" />
          <img src="/assets/IMG-20240401-WA0140.jpg" alt="Image 4" className="w-72 h-72 m-2 hover:scale-105" />
        </div>
      </div>
{/* and many more*/}
<div className="w-full pl-9 mt-4 flex justify-end"> {/* Full width container, justify content to end */}
        <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-600">And many more........</p>
        <div className="w-12 h-0.5 bg-gray-400 my-2"></div> {/* Line */}
      </div>
    </div>
  );
};

export default Services;
