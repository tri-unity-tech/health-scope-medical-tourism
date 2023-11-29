import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { MedService } from '../../data';
import { RevolvingDot } from 'react-loader-spinner';

const CAD = () => {
  const [cardHover, setCardHover] = useState(null);
  const [showMore, setShowMore] = useState(true);

  const handleCardHoverEnter = (i) => {
    setCardHover(i);
  };

  const handleCardHoverLeave = () => {
    setCardHover(null);
  };

  const handleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section
        id='features'
        className={`w-full overflow-y-hidden  sm:h-max relative overflow-x-hidden flex flex-col items-center px-5 md:px-20 ${
          showMore ? 'h-[550px]' : ''
        }`}
      >

        <div className='w-full absolute z-0 h-96 overflow-hidden'>
        </div>


        <div className='w-full h-20 absolute bottom-0 left-0 sm:hidden z-20'>
          <Image alt='frame' src='/images/tailer/Frame2.png' fill />
        </div>

        <div
          className={`w-full h-20 absolute bottom-0 left-0 sm:hidden z-30 justify-center items-center ${
            showMore ? 'flex sm:hidden' : 'hidden'
          }`}
        >
          <div
            onClick={handleMore}
            className='px-5 py-2 rounded-full bg-sky-600 text-slate-200'
          >
            more
          </div>
        </div>

        <div className='container my-10 z-10 flex justify-center'>
          <h1 className='text-3xl sm:text-5xl font-bold text-gray-700'>
            Medical Services
          </h1>
        </div>
        <div className='bg-white flex justify-center relative py-24 md:py-20 lg:py-28'>
          <div className='container relative z-10 grid sm:grid-cols-6 gap-5'>
            {MedService.map((d, i) => (
              <div
                key={i}
                className={`p-4 col-span-2 rounded-xl glassmor ${
                  i > 3 && showMore ? 'hidden sm:block' : 'block'
                } ${d.col ? 'sm:col-start-2' : ''}`}
              >
                <h1 className='font-bold text-blue-600'>{d.title}</h1>
                <p className='text-gray-600 text-sm mt-2'>{d.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CAD;
