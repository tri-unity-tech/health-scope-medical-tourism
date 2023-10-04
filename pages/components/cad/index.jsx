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
  
  
  //
  
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    function move() {
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [curX, curY, tgX, tgY]);


  return (
    <>
      <section
        id='features'
        className=' bg-white flex gradient-bg justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
      
      	<div className='absolute w-full h-full gradients-container left-0 right-0 z-0'>
      		<div className='g1 z-1' />
      		<div className='g2 z-1' />
      		<div className='g3 z-1' />
      		<div className='g4 z-1' />
      		<div className='g4 z-1' />
      		<div className="interactive" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }} />
      	</div>
      
        <div className='container relative z-10 grid grid-cols-6 gap-5'>
        
        { MedService.map((d, i) => (

          <div className='h-32 p-4 col-span-2 rounded-xl glassmor'>
            <h1 className='font-bold text-blue-600'>{ d.title }</h1>
            <p className='text-gray-600 text-sm mt-2'>
            	{d.para}
            </p>
          </div>
         ))}
           

        </div>
      </section>
    </>
  );
};

export default CAD;
