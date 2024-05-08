import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import { GiStethoscope } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { RiSurgicalMaskLine } from 'react-icons/ri';

import images from '../../../public/images';
import { Hospital } from './data';

import { motion } from 'framer-motion';

const CAE = () => {
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
        className=' bg-slate-100 overflow-x-hidden flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-44'
      >
        <div className='container z-10 gap-10 grid'>
          <div className='text-gray-600 flex flex-col justify-center'>
            <h1 className='text-lg font-bold text-slate-600'>Hospital</h1>
            <p className='text-5xl font-bold text-slate-700 mt-2'>
              Medical Centres
            </p>
          </div>

          <div className='w-full flex mt-5 overflow-x-auto relative h-66 py-3'>
            <div className='h-full w-max flex relative gap-5'>
              {Hospital.map((d, i) => (
                <div
                  key={i}
                  className='w-80 gap-2 flex flex-col text-lg duration-500 transition-all text-slate-700 hover:text-slate-800 h-full border border-slate-300 hover:bg-sky-300 p-6 rounded-2xl'
                >
                  <div className='w-28 h-28 rounded border border-slate-700 shrink-0 relative'>
                    <Image fill src={d.img} alt={i} className='item-img' />
                  </div>

                  <div>
                    <h1 className='text-lg mt-2 font-bold'>{d.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CAE;
