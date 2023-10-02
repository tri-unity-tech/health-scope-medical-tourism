import React from 'react';
import Image from 'next/image';
import { GiStethoscope } from 'react-icons/gi';
import { FaHandHoldingMedical, FaClinicMedical } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

const Partners = () => {
  return (
    <>
      <section
        id='features'
        className='bg-white flex justify-center w-full relative'
      >
        <div className='container relative'>
          <div className='w-full sm:mb-10 sm:pt-40 relative  h-screen relative flex justify-center'>
            <Image src='/images/map.svg' fill priority />
          </div>
          <div className='w-full left-0 px-5 md:px-20 flex flex-col absolute top-20 md:top-0 z-10'>
            <div className='w-full flex flex-col gap-10 items-center justify-center relative'>
              <div className='w-full md:h-20 flex relative'>
                <div className='w-60 h-max md:absolute top-5 md:left-0 flex flex-col items-center rounded'>
                  <div className='w-10 md:w-52 h-10 md:h-52 text-gray-600 flex items-center justify-center text-xl sm:text-[100px] rounded-xl relative glassmor'>
                    <GiStethoscope />
                  </div>
                  <div className='flex w-52 pt-4 gap-2 flex-col'>
                    <span className='text-xl md:text-3xl flex items-center font-bold text-gray-700'>
                      75 +
                    </span>
                    <span className='text-gray-700'>
                      Treatment under one roof
                    </span>
                  </div>
                </div>
              </div>

              <div className='w-full md:h-20 flex relative justify-center'>
                <div className='w-60 h-max md:absolute top-5 flex flex-col items-center rounded'>
                  <div className='w-10 md:w-52 h-10 md:h-52 text-gray-600 flex items-center justify-center text-xl sm:text-[100px] rounded-xl relative glassmor'>
                    <FaClinicMedical />
                  </div>
                  <div className='flex pt-4 gap-2 w-52 flex-col'>
                    <span className='text-xl md:text-3xl flex items-center font-bold text-gray-700'>
                      100 +
                    </span>
                    <span className='text-gray-700'>Hospital in India</span>
                  </div>
                </div>
              </div>

              <div className='w-full md:h-20 flex relative'>
                <div className='w-60 h-max md:absolute top-5 md:right-0 flex flex-col items-center rounded'>
                  <div className='w-10 md:w-52 h-10 md:h-52 text-gray-600 flex items-center justify-center text-xl sm:text-[100px] rounded-xl relative glassmor'>
                    <FaHandHoldingMedical />
                  </div>
                  <div className='flex w-52 pt-4 gap-2 flex-col'>
                    <span className='text-xl md:text-3xl flex items-center font-bold text-gray-700'>
                      200 +
                    </span>
                    <span className='text-gray-700'>
                      Surgeons and Specialists
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full py-20 bg-gray-50 px-5 md:px-20 gap-5 flex flex-col'>
            <h1 className='text-2xl md:text-4xl text-red-600 font-bold'>
              Medical Sercices
            </h1>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:pr-10'>
              <div className='flex flex-col'>
                <div className='flex gap-5 flex-col'>
                  <div className='w-full text-xs md:text-[15px] grid grid-cols-2 gap-3 sm:gap-5 text-teal-600 py-5'>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Cancer Treatment
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Cardiolog
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Orthopaedics
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      IVF
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Neurology
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Cosmetic Surgery
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Dentistry
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Organ Transplant
                    </div>
                    <div className='glassmor h-20 px-5 flex font-bold items-center rounded'>
                      Hip and Knee Replacement
                    </div>
                  </div>
                </div>
              </div>

              <div className='md:flex hidden overflow-hidden relative items-center justify-center'>
                <div className='absolute z-0'>
                  <div className='w-96 h-72 relative'>
                    <Image src='/images/med.jpg' fill />
                  </div>
                </div>

                <div className='top-10 left-0 absolute z-10'>
                  <div className='w-48 h-32 rounded overflow-hidden relative rounded'>
                    <Image src='/images/equip.jpg' fill />
                  </div>
                </div>

                <div className='bottom-10 right-0 absolute z-10'>
                  <div className='w-48 h-32 rounded overflow-hidden relative rounded'>
                    <Image src='/images/med2.jpg' fill />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-10 flex'>
              <div className='hidden md:flex items-center justify-center'>
                <div className='w-80 h-52 rounded-xl relative overflow-hidden'>
                  <Image src='/images/heli.jpg' fill />
                </div>
              </div>

              <div className='w-full'>
                <div className='w-full flex gap-5 items-start flex-col md:pl-5'>
                  <h1 className='text-2xl md:text-4xl text-red-600 font-bold'>
                    Hospitals
                  </h1>
                  <div className='font-bold flex flex-col gap-5 text-gray-700 py-5 rounded-r'>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Manipal Hospital Dwarka, Dehli
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Fortis Escorts Heart Institute, Dehli
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Max Hospital, Patpanj
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Apollo Hospital Dehli
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Synergy Superspeciality Hospital Rajkot
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      ART Fertility Clinics- Women- Ahmedabad
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Organ Transplant
                    </span>
                    <span className='flex items-center gap-2'>
                      <div className='text-2xl text-teal-600'>
                        <TiTick />
                      </div>
                      Seven Hills Healthcare Pvt. Ltd Mumbai
                    </span>
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

export default Partners;
