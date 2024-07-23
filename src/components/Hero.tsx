import React from 'react';

const Hero = () => {
  return (
    <div className='border-b border-gray-400'>
      <section className="relative overflow-hidden bg-white">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10 opacity-40"
          src="/assets/WhatsApp Video 2024-07-23 at 14.12.49_c6eb74d9.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* Rectangle background */}
        <div className="relative h-screen flex justify-center items-center bg-white">
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <div className="relative w-3/4 h-3/4 bg-violet-200 opacity-30"></div>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-start px-8 z-30">
            <p className="text-lg md:text-xl lg:text-4xl font-bold text-black">
              Begin your journey of self-expression 
            </p>
            <p className="text-lg md:text-xl lg:text-4xl font-bold text-black">
              and creativity With beautifully crafted art !!!
            </p>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 h-4/6 bg-purple-600 w-1/2 flex justify-center items-center z-40">
            <div className="flex flex-wrap justify-center items-center">
              <img src="/assets/shark.jpg" alt="Center Image" className="w-80 h-80 m-2" />
              <img src="/assets/life.jpg" alt="Corner Image 1" className="w-48 h-48 m-2 absolute right-0 top-0" />
              <img src="/assets/peace.jpg" alt="Corner Image 2" className="w-48 h-48 m-2 absolute left-0 bottom-0" />
              <img src="/assets/stoic.jpg" alt="Corner Image 3" className="w-48 h-48 m-2 absolute right-0 bottom-0" />
              <img src="/assets/together.jpg" alt="Corner Image 4" className="w-48 h-48 m-2 absolute left-0 top-0" />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Additional content can be placed here */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
