import React, { useState } from 'react';
import Link from 'next/link';
import ImageFill from '../Common/ImageFill';
import { AiOutlineRight } from 'react-icons/ai'
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { RiSurgicalMaskLine } from 'react-icons/ri';

const CAE = () => {

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
      className=' bg-gray-100 flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-44'
    >
      <div className='container gap-10 grid sm:grid-cols-2'>
        
        <div className='text-gray-600 flex flex-col justify-center'>
          <h1 className='text-lg font-bold text-green-700'>
            Hospital
          </h1>
          <p className='text-5xl font-bold text-gray-700 mt-2'>
            Medical Centres
          </p>
          {/* <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           */}
        </div>
        
        <div className='grid grid-cols-2 gap-5'>

<div className='h-52 rounded bg-white overflow-hidden relative'>
  <div className='w-[90%] h-1/2 absolute bottom-0 right-0 rounded-tl-full bg-green-600'></div>
</div>

<div className='h-52 rounded bg-white overflow-hidden relative'>
  <div className='w-[90%] h-1/2 absolute bottom-0 right-0 rounded-tl-full bg-green-600'></div>
</div>
          
        </div>

      </div>
    </section>
  </>
  );
};

export default CAE;
