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
      className=' bg-gray-100 overflow-x-hidden flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-44'
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
        
        <div className=''>

          <div className='w-full'>
           <div className='w-full'>
            <motion.div ref={carousel} className='carousel py-4 cursor-grab'>
              <motion.div  drag="x" dragConstraints={{right: 0, left: -520}} className='inner-carousel gap-4 pl-2 flex'>

                { images.map((image) => {
                  return (
                    <motion.div key={image} className='relative h-72 rounded-xl overflow-hidden min-w-[200px]'>
                      
                      <Image fill src={image} alt='' className='item-img' />
                      <motion.div className='absolute w-full h-10  bottom-0 right-0'>
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
