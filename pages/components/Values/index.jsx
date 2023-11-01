import React from 'react';
import Image from 'next/image';
import { valuesData } from './valuesData';

import {
  AiOutlineExpand,
  AiOutlineCompress,
  AiOutlineHome,
} from 'react-icons/ai';

const Values = () => {
  return (
    <>
      <section className='text-gray-700 overflow-x-hidden flex flex-col relative'>
        <div className='w-full h-[500px] sm:h-96 relative'>
          <div className='w-full absolute z-0 left-0 top-0 h-full bg-sky-600 flex justify-end'>
            <div className='w-96 h-full relative'>
              <Image
                src='/images/little/pexels-karolina-grabowska-4386467.jpg'
                fill
                objectFit='cover'
              />
              <div className='absolute w-full h-full z-[1] top-0 left-0'>
                <div className='w-full h-full relative'>
                  <Image
                    src='/images/tailer/Frame 11.svg'
                    fill
                    objectFit='cover'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full z-10 h-full flex justify-center'>
            <div className='container h-full sm:pr-80 p-10 relative flex flex-col justify-center gap-10'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-slate-100 font-bold text-4xl'>MISSION</h1>
                <p className='text-slate-200'>
                  To Empower people in making informed and affordable health
                  decisions by facilitating access to high-quality medical
                  services.
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='text-slate-100 font-bold text-4xl'>VISION</h1>
                <p className='text-slate-200'>
                  To be trusted and reliable partners for and medical seekers
                  linking them with professional, well equipped and trained
                  medical practitioners.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <div className='container py-20 sm:py-40 flex flex-col gap-5'>
            <div className='w-full flex justify-center'>
              <div className='text-gray-600 flex flex-col items-center justify-center'>
                <h1 className='text-lg font-bold text-green-700'>Values</h1>
                <p className='text-5xl font-bold text-gray-700 mt-2'>
                  Our Values
                </p>
                <p className='mb-4'>
                  We’re proud to present to you some of our values
                </p>
              </div>
            </div>

            <div className='w-full mt-20 grid grid-cols-2 sm:grid-cols-3'>
              {valuesData.map((d, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-10 flex flex-col gap-5 border-slate-400 ${
                    i === 2 ? 'border-r border-b' : 'border-r'
                  } ${i < 2 ? 'border-b' : ''}`}
                >
                  <h1 className='font-bold text-slate-700'>{d.title}</h1>

                  <span className=''>
                    <p className='text-slate-500'>{d.paragraph}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
