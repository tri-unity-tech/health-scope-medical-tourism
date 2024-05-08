import React from 'react';
import Image from 'next/image';
import { valuesData } from './valuesData';

import {
  AiOutlineExpand,
  AiOutlineCompress,
  AiOutlineHome,
} from 'react-icons/ai';

const WhyIndia = () => {
  return (
    <>
      <section className='text-gray-700 overflow-x-hidden flex flex-col relative'>
        <div className='w-full flex justify-center'>
          <div className='container py-20 sm:py-40 px-5 md:px-0 flex flex-col gap-5'>
            <div className='w-full flex justify-center'>
              <div className='text-gray-600 flex flex-col items-center justify-center'>
                <h1 className='text-lg font-bold text-green-700'>India</h1>
                <p className='text-5xl font-bold text-gray-700 mt-2'>
                  Why India
                </p>
                <p className='mb-4'>
                  We’re proud to present to you some of our valued regions
                </p>
              </div>
            </div>

            <div className='w-full mt-20 grid md:grid-cols-2 gap-10'>
              <div className='w-full flex w-[60%] h-max flex flex-col gap-10'>
                <p className='text-slate-700 text-justify'>
                  India is one of the most popular destinations for medical
                  tourism in the world. Every year, millions of people from
                  different countries choose India for their medical needs,
                  ranging from simple check-ups to complex surgeries. There are
                  many reasons why India is the best choice for medical tourism,
                  such as:
                </p>

                <div className='w-full flex flex-col gap-5'>
                  <div className='relative gap-5 flex flex-col border-l-[5px] sm:border-l-[10px] duration-500 ease-in hover:border-sky-600 border-slate-300 pl-5 sm:pl-10'>
                    <h1 className='text-xl text-teal-600 font-bold'>
                      Cost-effective and affordable treatment options
                    </h1>
                    <p className='text-justify text-slate-800'>
                      India offers high-quality medical care and treatment at a
                      fraction of the cost compared to other countries. You can
                      save up to 80% of the cost that you would incur in the US
                      for the same treatment. For instance A heart bypass
                      surgery costs $144,000 in the US, $25,000 in Costa Rica,
                      but only $5,200 in India and liver transplant costs around
                      $40,000, compared to $300,000 in the US.
                    </p>
                  </div>

                  <div className='relative gap-5 flex flex-col border-l-[5px] sm:border-l-[10px] duration-500 ease-in hover:border-sky-600 border-slate-300 pl-5 sm:pl-10'>
                    <h1 className='text-xl text-teal-600 font-bold'>
                      High-quality medical care and treatment facilities
                    </h1>
                    <p className='text-justify text-slate-800'>
                      Many of the doctors and surgeons working in India that
                      offer healthcare services to international patients are
                      highly trained and qualified with certification from
                      western countries like the US, UK, Germany. Also, several
                      medical centres all over India are accredited by
                      well-known global organisations like ISO, JCAHO, and JCI,
                      which shows that the medical facilities offered are of
                      international standards. So, patients coming to India for
                      availing treatment can be sure that they get quality
                      treatment and medical care.
                    </p>
                  </div>

                  <div className='relative gap-5 flex flex-col border-l-[5px] sm:border-l-[10px] duration-500 ease-in hover:border-sky-600 border-slate-300 pl-5 sm:pl-10'>
                    <h1 className='text-xl text-teal-600 font-bold'>
                      Immediate service
                    </h1>
                    <p className='text-justify text-slate-800'>
                      Patients from overseas are given immediate access to
                      health care services. Medical tourism allows them to be
                      placed on the priority list, and when dealing with health
                      matters, waiting is not an option always. You can book
                      your appointment and schedule your surgery easily through
                      the internet or phone.
                    </p>
                  </div>

                  <div className='relative gap-5 flex flex-col border-l-[5px] sm:border-l-[10px] duration-500 ease-in hover:border-sky-600 border-slate-300 pl-5 sm:pl-10'>
                    <h1 className='text-xl text-teal-600 font-bold'>
                      Well-connected flight and excellent communication services
                    </h1>
                    <p className='text-justify text-slate-800'>
                      India has a simple and quick medical visa application
                      process. This eliminates the hassles of visiting the
                      hospitals for assessments, and then shortlist the
                      hospital. The only time you have to leave your home is on
                      the day or week of the surgery. The well-connected flight
                      services help you visit any city of your choice where the
                      hospital is located.
                    </p>
                  </div>

                  <div className='relative gap-5 flex flex-col border-l-[5px] sm:border-l-[10px] duration-500 ease-in hover:border-sky-600 border-slate-300 pl-5 sm:pl-10'>
                    <h1 className='text-xl text-teal-600 font-bold'>
                      Opportunity to travel
                    </h1>
                    <p className='text-justify text-slate-800'>
                      Even though medical tourism is all about getting the best
                      medical care at an affordable cost, a side benefit is that
                      it gives you the chance to travel to a new country. India
                      is a land of rich culture, heritage, and diversity. You
                      can explore its various attractions, such as historical
                      monuments, natural wonders, religious sites, and more. You
                      can also enjoy its cuisine, music, art, and festivals.
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full h-96 sm:h-[600px] md:h-full relative'>
                <div className='w-32 sm:w-52 h-32 sm:h-52 absolute top-0 overflow-hidden left-0 neu'>
                  <div className='w-full h-full relative'>
                    <Image src='/images/india/india1.jpg' fill alt='india1' />
                  </div>
                </div>

                <div className='w-32 sm:w-52 h-32 sm:h-52 absolute bottom-0 overflow-hidden right-0 neu'>
                  <div className='w-full h-full relative'>
                    <Image src='/images/india/india2.jpg' fill alt='india2' />
                  </div>
                </div>

                <div className='w-32 sm:w-52 h-32 sm:h-52 absolute top-[25%] overflow-hidden right-0 neu'>
                  <div className='w-full h-full relative'>
                    <Image src='/images/india/india3.jpg' fill alt='india3' />
                  </div>
                </div>

                <div className='w-32 sm:w-52 h-32 sm:h-52 absolute bottom-[25%] overflow-hidden left-0 neu'>
                  <div className='w-full h-full relative'>
                    <Image src='/images/india/india4.jpg' fill alt='india4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyIndia;
