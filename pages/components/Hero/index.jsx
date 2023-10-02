import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const images = [
  '/images/hospital.jpg',
  '/images/pexels-rdne-stock-project-6129107.jpg',
  '/images/pexels-evg-kowalievska-1170979.jpg',
  '/images/pexels-vidal-balielo-jr-3376790.jpg',
  '/images/pexels-tima-miroshnichenko-5452189.jpg',
];

const Hero = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

useEffect(() => {
  const numDivs = 4;
  const interval = setInterval(() => {
    setCurrentDivIndex((prevIndex) =>
      prevIndex === numDivs - 1 ? 0 : prevIndex + 1,
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <section
        id='home'
        className='relative overflow-hidden flex items-center justify-center bg-gray-900 sm:min-h-[600px] h-[100dvh] w-screen'
      >
        <div className='container z-10 flex justify-center h-full items-center lg:gap-10 relative'>

          <div className='flex px-5 md:px-0 sm:px-0 flex-col items-center gap-5'>

            <span className='text-3xl flex flex-col items-center sm:text-4xl md:text-5xl lg:text-7xl font-bold'>
              <h1 className=''>
                Health Scope
              </h1>
              <h1 className=''>
                Medical Tourism
              </h1>
            </span>

            <span className=''>
              <Link href='#'>
                <div className='text-sm font-bold px-5 py-2 border-b border-gray-400 w-max'>EXPLORE MORE</div>
              </Link>
            </span>
            <span className='sm:absolute bottom-10 sm:w-1/2 border-l-4 border-green-700 pl-5 left-10'>
              <p className='text-sm sm:text-[16px] text-gray-200'>
              In today's interconnected world, the pursuit of optimal healthcare knows no borders. Health Scope Medical Tourism emerges as your trusted gateway to global healthcare excellence. With a commitment to providing you with the highest quality medical care, we bridge the gap between your health needs and the world's most renowned healthcare destinations.
              </p>
            </span>
          </div>



        </div>

        



        <div className='w-full h-full absolute left-0 top-0'>
          <div className='w-full h-full relative'>
            



            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        { images.map((img) => (
        <SwiperSlide>
          <div className='w-full h-full relative'>
          <Image src={img} fill priority style={{
            objectFit: 'cover',
          }} />
          </div>
        </SwiperSlide>
          
          ))}
      </Swiper>
          </div>
        </div>

        <div className='w-full h-full bg-black/50 z-[1] absolute left-0 top-0'>
        </div>



      </section>
    </>
  );
};

export default Hero;
