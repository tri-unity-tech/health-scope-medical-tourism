import React, { useState } from 'react';
import Link from 'next/link';
import ImageFill from '../Common/ImageFill';
import { AiOutlineRight } from 'react-icons/ai';
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { RiSurgicalMaskLine } from 'react-icons/ri';

const CAC = () => {
  const [cardHover, setCardHover] = useState(null);

  const handleCardHoverEnter = (i) => {
    setCardHover(i);
  };

  const handleCardHoverLeave = () => {
    setCardHover(null);
  };

  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='container grid'>
          <div className='text-gray-600 flex flex-col items-center justify-center'>
            <h1 className='text-lg font-bold text-green-700'>Partners</h1>
            <p className='text-5xl font-bold text-gray-700 mt-2'>
              Our Partners
            </p>
            <p className='mb-4'>
              We’re proud to present to you some of our partners
            </p>
          </div>

          <div className='grid mt-14 sm:mt-2 grid-cols-3'>
            <div className='flex flex-col gap-1 items-center'>
              <div className='w-10 sm:w-20 md:w-32 lg:w-40 h-10 sm:h-20 md:h-32 lg:h-40 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-600 rounded bg-blue-50'>
                <GiStethoscope />
              </div>
              <span className='mt-5'>
                <h1 className='text-3xl sm:text-5xl font-bold text-teal-600'>
                  75+
                </h1>
              </span>
              <span>
                <p className='text-xs sm:text-sm text-center text-gray-600'>
                  Treatments under one roof
                </p>
              </span>
            </div>

            <div className='flex flex-col mt-20 gap-1 items-center'>
              <div className='w-10 sm:w-20 md:w-32 lg:w-40 h-10 sm:h-20 md:h-32 lg:h-40 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 rounded bg-red-50'>
                <MdOutlineLocalHospital />
              </div>
              <span className='mt-5'>
                <h1 className='text-3xl sm:text-5xl font-bold text-teal-600'>
                  100+
                </h1>
              </span>
              <span>
                <p className='text-xs sm:text-sm text-center text-gray-600'>
                  Hospitals in India
                </p>
              </span>
            </div>

            <div className='flex flex-col gap-1 items-center'>
              <div className='w-10 sm:w-20 md:w-32 lg:w-40 h-10 sm:h-20 md:h-32 lg:h-40 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-green-600 rounded bg-green-50'>
                <RiSurgicalMaskLine />
              </div>
              <span className='mt-5'>
                <h1 className='text-3xl sm:text-5xl font-bold text-teal-600'>
                  200+
                </h1>
              </span>
              <span>
                <p className='text-xs sm:text-sm text-center text-gray-600'>
                  Surgeons and Specialists
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CAC;
