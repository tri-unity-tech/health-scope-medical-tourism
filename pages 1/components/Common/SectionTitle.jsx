import React from 'react';

const SectionTitle = ({
  title,
  paragraph,
  width = '570px',
  center,
  mb = '100px',
}) => {
  return (
    <>
      <div className={`w-full`} style={{ maxWidth: width, marginBottom: mb }}>
        <div className='w-max h-max flex flex-col'>
          <div className='w-full h-20 flex pl-4 sm:pl-20'>
            <div className='w-full px-5 flex items-center h-full border-l border-gray-300'>
              <h2 className='text-xl font-bold !leading-tight text-red-600 sm:text-4xl'>
                {title}
              </h2>
            </div>
          </div>

          <div className='w-full border-t border-gray-300'></div>

          <div className='w-full h-20 flex pl-4 sm:pl-20'>
            <div className='w-full px-5 flex items-center h-full border-l border-gray-300'>
              <p className='text-base text-sm max-w-[300px] sm:max-w-[500px] !leading-relaxed text-gray-700'>
                {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
