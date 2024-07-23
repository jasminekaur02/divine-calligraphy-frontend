import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Import Image component for optimized images

const AboutUs = () => {
  return (
    <>
      <HeaderTop />
      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600">About Us</h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 lg:mr-12 text-left">
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                I am <span className="font-bold text-dark-purple">Himani Verma</span>, the passionate artist behind Divine Calligraphy. Based in Punjab, India, my journey in the world of calligraphy began with a personal quest for artistic expression and has grown into a profound practice that I cherish deeply.
              </p>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                Calligraphy, to me, is more than just an art form; it is a dance of letters and ink. Each stroke tells a story, and every curve embodies emotion. My creations are not just about beautiful handwriting but about capturing and preserving the essence of moments, feelings, and memories in an elegant script.
              </p>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                Whether for a special occasion, a heartfelt message, or simply to enhance your space with grace and beauty, my bespoke calligraphy services are designed to touch your soul and elevate your spirit. Let me transform your words into cherished keepsakes that will be treasured for years to come.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <Image
                src="/assets/WhatsApp Image 2024-07-23 at 15.06.21_3bdde689.jpg"
                alt="Himani Verma"
                width={500} // Adjust the width as needed
                height={500} // Adjust the height as needed
                className="object-cover rounded-lg shadow-lg border-4 border-dark-purple"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
