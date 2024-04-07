import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; // Import next/image

import image1 from '/public/assets/IMG-20240401-WA0144.jpg'; // Import your images
import image2 from '/public/assets/IMG-20240401-WA0149.jpg';
import image3 from '/public/assets/IMG-20240401-WA0150.jpg';
import image4 from '/public/assets/IMG-20240401-WA0153.jpg';
import image5 from '/public/assets/IMG-20240401-WA0154.jpg';

const Gallery = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-full w-full bg-violet-200 transform -skew-y-6 origin-top-left"></div>
        </div>
      </div>
      <div className="relative z-10 p-8">
        <h2 className="text-4xl font-bold text-black">New Collection</h2>
        <p className="text-lg text-white mt-4">Curves and Strokes </p>
      </div>
      
      <div className="absolute top-0 right-0 mt-20 mr-8">
        <div className="bg-purple-500 rounded-full p-16 flex items-center" style={{ borderRadius: '120% / 120%' }}>
          <div className="text-black text-3xl mr-2 font-semibold">Hi !! You have a word, send me here</div>
          <a href="https://www.instagram.com/himani._.calligraphy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-4xl font-bold" />
          </a>
        </div>
      </div>
      </div>

  );
};

export default Gallery;
