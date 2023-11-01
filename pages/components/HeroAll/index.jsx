import React from 'react';
import Image from 'next/image';

const HeroAll = ({ title }) => {
  return (
    <div className='w-screen h-[600px] 2xl:h-[800px] bg-gray-600 relative flex items-center justify-center'>
      <div className='absolute w-full h-full'>
        <div className='relative w-full h-full'>
          <div className='absolute left-0 top-0 w-full h-full bg-sky-600 bg-opacity-30 z-10'></div>

          <Image
            src='/images/pexels-evg-kowalievska-1170979.jpg'
            fill
            priority
            objectFit='cover'
            alt='hero img'
          />
        </div>
      </div>

      <div className='container px-10 sm:px-20 md:px-32 z-10 relative flex items-center h-full'>
        <div className='flex justify-center'>
          <div className='flex gap-10 glassmor p-10'>
            <div className='w-2 bg-red-600 h-32 relative'>
              <div className='w-5 h-2 bg-red-600 absolute top-0 left-0'></div>
              <div className='w-5 h-2 bg-red-600 absolute bottom-0 left-0'></div>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='text-5xl font-bold text-red-600'>{title}</h1>

              <p className='text-slate-900 max-w-[300px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                sit amet, consectetur adipiscing elit
              </p>

              <div className='px-10 mt-6 w-max rounded-full py-2 bg-teal-600 text-white'>
                Hire Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAll;
