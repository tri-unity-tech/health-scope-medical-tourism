import React from 'react';
import ImageFill from '../Common/ImageFill';

const CAA = () => {
  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='container gap-10 grid sm:grid-cols-2'>
          
          <div className='grid'>
            <div className='grid gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div className='bg-black rounded-xl overflow-hidden row-start-1 row-span-6'>
                <ImageFill src='/images/acco.jpg' alt='previews' />
              </div>
              <div className='bg-black rounded-xl overflow-hidden row-start-2 row-span-6'>
                <ImageFill src='/images/pexels-mart-production-7089625.jpg' alt='previews' />
              </div>
            </div>
            <div className='grid gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div className='bg-black rounded-xl overflow-hidden row-start-1 row-span-6'>
                <ImageFill src='/images/equip.jpg' alt='previews' />
              </div>
              <div className='bg-black rounded-xl overflow-hidden row-start-2 row-span-6'>
                <ImageFill src='/images/consult.jpg' alt='previews' />
              </div>
            </div>
          </div>
          
          <div className='text-gray-600 flex flex-col gap-5'>
            <h1 className='text-5xl font-bold text-green-700'>
            Lorem ipsum dolor sit amet
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
          </div>

        </div>
      </section>
    </>
  );
};

export default CAA;
