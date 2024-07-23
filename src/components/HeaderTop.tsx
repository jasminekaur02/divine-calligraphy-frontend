import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-violet-200 text-center">
      <div className="text-4xl font-bold">Divine Calligraphy</div>
      <div className="mt-2 text-2xl">Let&apos;s integrate the words together!</div>
      <div className="flex flex-col md:flex-row justify-between mt-4 w-full max-w-md mx-auto">
        <div className="text-base text-center md:text-left mb-4 md:mb-0">
          <div>Working Hours</div>
          <div>10am to 8pm </div>
          <div>Monday to Friday</div>
        </div>
        <div className="text-base text-center md:text-right">
          <div className="mb-2 md:mb-0">
            <FaEnvelope className="inline-block" />{' '}
            <a href="mailto:divinecalligraphy220@gmail.com">divinecalligraphy220@gmail.com</a>
          </div>
          <div>
            <FaInstagram className="inline-block" />{' '}
            <a href="https://instagram.com/himani._.calligraphy?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
