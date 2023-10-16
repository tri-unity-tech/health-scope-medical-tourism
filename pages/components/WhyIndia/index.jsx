import React from 'react';
import Image from 'next/image';
import { valuesData } from './valuesData';

import { AiOutlineExpand, AiOutlineCompress, AiOutlineHome } from 'react-icons/ai';

const WhyIndia = () => {
  return (
    <>
      <section
        className='text-gray-700 overflow-x-hidden flex flex-col relative'
      >
      
      	
         <div className='w-full flex justify-center'>
        <div className='container py-20 sm:py-40 flex flex-col gap-5'>
        
        	<div className='w-full flex justify-center'>
        		<div className='text-gray-600 flex flex-col items-center justify-center'>
			    <h1 className='text-lg font-bold text-green-700'>
			      India
			    </h1>
			    <p className='text-5xl font-bold text-gray-700 mt-2'>
			      Why India
			    </p>
			    <p className='mb-4'>We’re proud to present to you some of our valued regions</p>
			    
			  </div>
          	</div>
        	
        </div>
        	
        </div>
        
        
      </section>
    </>
  );
};

export default WhyIndia;
