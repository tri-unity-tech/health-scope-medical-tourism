import React from 'react';
import Image from 'next/image';

const CAA = () => {
  return (
    <>
      <section
        id='features'
        className=' bg-white flex justify-center relative py-24 px-5 md:px-20 md:py-20 lg:py-28'
      >
        <div className='w-full h-32 top-0 left-0 absolute'>
          <div className='w-full h-full relative '>
            <Image src='/images/tailer/Frame6.png' fill alt='alt' />
          </div>
        </div>

        <div className='container gap-10 grid sm:grid-cols-2'>
          <div className='flex justify-center'>
            <div className='relative'>
              <Image
                src='/images/tailer/Frame1.png'
                width='500'
                height='400'
                alt='alt'
              />
            </div>
          </div>

          <div className='text-gray-600 z-10 flex flex-col gap-5'>
            <h1 className='text-3xl sm:text-5xl font-bold text-green-700'>
              About Us
            </h1>
            <p>
            Healthscope is your trusted partner for medical health tourism. We offer you a wide range of options for accessing the best quality and cost-effective medical care in the world. Whether you need surgery, a transplant, or a treatment, we have the expertise and the network to help you find the right solution for your health needs.
            </p>

            <p>
            We understand that traveling abroad for medical reasons can be stressful and challenging. That's why we are committed to providing you with comprehensive and personalized information, guidance, and support throughout your journey. We value your life and your well-being, and we want to ensure your satisfaction and peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CAA;
