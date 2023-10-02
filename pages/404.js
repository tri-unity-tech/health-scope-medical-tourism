import React from 'react';
import Lottie from 'lottie-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-one'>
      <div className='flex flex-col gap-5'>
        <span className='flex gap-3 items-center'>
          <h1 className='text-lg txt-one font-bold'>Page Not Found</h1>
          <Link href='/'>
            <h2 className='px-5 py-2 text-white bg-indigo-600 rounded-full'>
              Home
            </h2>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
