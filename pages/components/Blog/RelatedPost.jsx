import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RelatedPost = ({ image, slug, title, date }) => {
  // Check if the 'title' prop is defined
  if (!title) {
    // You can return null or a message indicating that the title is missing
    return null; // or return a message like <p>Title not available</p>
  }

  return (
    <div className='flex items-center lg:block xl:flex'>
      <div className='mr-5 lg:mb-3 xl:mb-0'>
        <div className='relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]'>
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className='w-full'>
        <h5>
          <Link
            href={slug}
            className='mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary'
          >
            {title}
          </Link>
        </h5>
        <p className='text-xs font-medium text-body-color'>{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
