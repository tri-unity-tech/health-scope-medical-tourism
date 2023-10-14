import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai'
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

  const [ cardHover, setCardHover ] = useState(null);

  const handleCardHoverEnter = (i) => {
    setCardHover(i);
  };

  const handleCardHoverLeave = () => {
    setCardHover(null);
  }

  //

  const [ cwidth, setCWidth ] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setCWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  })


  return (
    <>
    <section
      id='features'
      className=' bg-slate-100 overflow-x-hidden flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-44'
    >
      
      <div className='w-full h-full bottom-0 left-0 absolute'>

          <div className='w-full h-full relative '>
            <Image src='/images/tailer/Frame 8.png' fill alt='alt' />
          </div>

        </div>


      <div className='container z-10 gap-10 grid sm:grid-cols-2'>
        
        <div className='text-gray-600 flex flex-col justify-center'>
          <h1 className='text-lg font-bold text-slate-200'>
            Hospital
          </h1>
          <p className='text-5xl font-bold text-slate-700 sm:text-white mt-2'>
            Medical Centres
          </p>
          {/* <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           */}
        </div>
        
        <div className=''>

          <div className='w-full'>
           <div className='w-full'>
            <motion.div ref={carousel} className='carousel px-4 py-4 cursor-grab'>
              <motion.div  drag="x" dragConstraints={{right: 0, left: -cwidth}} className='inner-carousel gap-4 pl-2 flex'>

                { Hospital.map((d, i) => {
                  return (
                    <motion.div key={i} className='relative h-72 rounded-xl overflow-hidden min-w-[200px]'>
                      
                      <Image fill src={d.img} alt='' className='item-img' />
                      <motion.div className='absolute text-slate-100 p-2 text-sm w-full h-16 bg-sky-600 bg-opacity-90 bottom-0 right-0'>
                        { d.title }
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
           </div>
          </div>
          
        </div>

      </div>
    </section>
  </>
  );
};

export default CAE;
