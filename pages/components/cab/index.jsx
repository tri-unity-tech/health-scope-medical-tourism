import React, { useState } from 'react';
import Link from 'next/link';
import ImageFill from '../Common/ImageFill';
import { AiOutlineRight } from 'react-icons/ai'

const CAB = () => {

  const [ cardHover, setCardHover ] = useState(null);

  const handleCardHoverEnter = (i) => {
    setCardHover(i);
  };

  const handleCardHoverLeave = () => {
    setCardHover(null);
  }


  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='container gap-10 grid sm:grid-cols-2'>
          
          <div className='text-gray-600 flex flex-col justify-center'>
            <h1 className='text-lg font-bold text-green-700'>
              Services
            </h1>
            <p className='text-5xl font-bold text-gray-700 mt-2'>
              Our Services
            </p>
            <h1 className='text-lg mb-2 font-bold text-gray-600'>
              Include.
            </h1>
            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <Link href='#' >
              <span className='px-5 py-1 rounded-full text-white flex items-center gap-2 w-max bg-green-600'>
                More Services
                <div>
                  <AiOutlineRight />
                </div>
              </span>
            </Link>
          </div>
          
          <div className='grid'>
            <div className='grid gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div onMouseEnter={ () => handleCardHoverEnter(0)} onMouseLeave={handleCardHoverLeave} className={`shadow-lg rounded-xl overflow-hidden row-start-1 row-span-6 duration-500 ease-in p-4 ${ cardHover === 0 ? 'bg-teal-500 text-white' : 'bg-white text-gray-700'} `}>
                <div className='w-10 h-10 rounded bg-black'></div>
                <h1 className='text-sm'>Medical Consulation</h1>
              </div>
              <div onMouseEnter={ () => handleCardHoverEnter(1)} onMouseLeave={handleCardHoverLeave} className={`shadow-lg rounded-xl overflow-hidden row-start-2 row-span-6 duration-500 ease-in ${ cardHover === 1 ? 'bg-teal-500 text-white' : 'bg-white text-gray-700'}`}>
              </div>
            </div>
            <div className='grid gap-10 grid-cols-2 grid-rows-16 grid-flow-col'>
              <div onMouseEnter={ () => handleCardHoverEnter(2)} onMouseLeave={handleCardHoverLeave} className={`shadow-lg rounded-xl overflow-hidden row-start-1 row-span-6 duration-500 ease-in ${ cardHover === 2 ? 'bg-teal-500 text-white' : 'bg-white text-gray-700'}`}>
              </div>
              <div onMouseEnter={ () => handleCardHoverEnter(3)} onMouseLeave={handleCardHoverLeave} className={`shadow-lg rounded-xl overflow-hidden row-start-2 row-span-6 duration-500 ease-in ${ cardHover === 3 ? 'bg-teal-500 text-white' : 'bg-white text-gray-700'}`}>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CAB;
