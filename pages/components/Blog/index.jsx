import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import { blogData } from './blogData';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <section
      id='blog'
      className='bg-white flex justify-center py-16 md:py-20 lg:py-28'
    >
      <div className='container'>
        <SectionTitle
          title='Our Latest Blogs'
          paragraph='There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
          center
        />

        <div className='grid grid-cols-1 gap-x-8 px-5 md:px-20 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3'>
          {blogData.map((blog) => (
            <div key={blog.id} className='bg-gray-100'>
              <div
                className='relative overflow-hidden rounded-md shadow-one'
                data-wow-delay='.1s'
              >
                <Link href='/' className='relative block h-[220px] w-full'>
                  <span className='absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white'>
                    {/* {tags[0]} */}
                  </span>
                  <Image src={blog.image} alt='image' fill />
                </Link>
                <div className='p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8'>
                  <h3>
                    <Link
                      href='/'
                      className='mb-4 block text-xl font-bold text-black text-gray-700 sm:text-2xl'
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <p className='border-body-color border-opacity-10 pb-6 text-base font-medium text-gray-500 dark:border-opacity-10'>
                    {blog.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
