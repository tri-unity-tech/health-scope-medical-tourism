import React from 'react';
import Image from 'next/image';

const CAA = () => {
  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='container gap-10 grid sm:grid-cols-2'>
          
          <div className='flex justify-center'>
		  <div className='relative'>
		  
		  	<Image src='/images/tailer/Frame1.png' width='500' height='400' alt='alt' />
		    
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
