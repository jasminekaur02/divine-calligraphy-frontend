import React from 'react';
import HeaderTop from '@/components/HeaderTop';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Import Image component for optimized images

const images = [
  "/assets/IMG-20240401-WA0136.jpg",
  "/assets/IMG-20240401-WA0137.jpg",
  "/assets/IMG-20240401-WA0138.jpg",
  "/assets/IMG-20240401-WA0139.jpg",
  "/assets/IMG-20240401-WA0140.jpg",
  "/assets/IMG-20240401-WA0144.jpg",
  "/assets/IMG-20240401-WA0145.jpg",
  "/assets/IMG-20240401-WA0146.jpg",
  "/assets/IMG-20240401-WA0147.jpg",
  "/assets/IMG-20240401-WA0148.jpg",
  "/assets/IMG-20240401-WA0149.jpg",
  "/assets/IMG-20240401-WA0150.jpg",
  "/assets/IMG-20240401-WA0151.jpg",
  "/assets/IMG-20240401-WA0153.jpg",
  "/assets/IMG-20240401-WA0154.jpg",
  "/assets/infinity.jpg",
  "/assets/peace.jpg",
  "/assets/life.jpg",
  "/assets/stoic.jpg",
  "/assets/together.jpg"
];

const Services = () => {
  return (
    <>
      <HeaderTop />
      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-dark-purple">
            Explore Our Calligraphy Collection
          </h1>
          <p className="text-lg text-gray-800 mb-12 text-center">
            Discover our exquisite calligraphy pieces and find the perfect one to order or customize to suit your needs. Each piece is crafted with love and precision to add elegance to your space.
          </p>
          
          <div className="flex flex-wrap justify-center">
            {images.map((src, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="relative h-80">
                  <Image
                    src={src}
                    alt={`Calligraphy ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg border-4 border-dark-purple"
                  />
                  
                </div>
               
              </div>
              
            ))}
          </div>
          <p className="text-lg text-gray-800 mb-3 text-center">
           Place your order on the instagram page . 
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
