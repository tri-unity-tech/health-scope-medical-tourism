import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ImageFill from '../Common/ImageFill';
import { AiOutlineRight } from 'react-icons/ai'
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { RiSurgicalMaskLine } from 'react-icons/ri';

import { MedService } from '../../data';

const CAD = () => {

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
        className='w-full overflow-y-hidden h-[550px] sm:h-max overflow-x-hidden flex flex-col items-center px-5 md:px-20'
      >
        <div className='container my-10 z-10 flex justify-center'>
          <h1 className='text-3xl sm:text-5xl font-bold text-gray-700'>Medical Services</h1>
        </div>
        <div className='bg-white flex gradient-bg justify-center relative py-24 md:py-20 lg:py-28'>
      
          <div className='absolute w-full h-full gradients-container left-0 right-0 z-0'>
            <div className='w-full my-10 h-full'>
              <div className='g1 z-1' />
              <div className='g2 z-1' />
              <div className='g3 z-1' />
              <div className='g4 z-1' />
              <div className='g5 z-1' />
            </div>
          </div>
         
          <div className='container relative z-10 grid sm:grid-cols-6 gap-5'>
          
          { MedService.map((d, i) => (

            <div className={`h-32 p-4 col-span-2 rounded-xl glassmor ${ d.col ? 'md:col-start-2' : ''}`}>
              <h1 className='font-bold text-blue-600'>{ d.title }</h1>
              <p className='text-gray-600 text-sm mt-2'>
                {d.para}
              </p>
            </div>
          ))}

          </div>


          
        </div>
      </section>
    </>
  );
};

export default CAD;
