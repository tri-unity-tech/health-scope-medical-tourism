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
  '/images/pexels-vidal-balielo-jr-3376790.jpg',
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
        <div className='container text-white z-20 flex h-full items-center lg:gap-10 relative'>

          <div className='flex px-5 md:px-0 sm:px-0 flex-col items-center gap-5'>

            



            {/*<span className='sm:absolute bottom-10 sm:w-1/2 border-l-4 border-green-700 pl-5 left-10'>
              <p className='text-sm sm:text-[16px] text-gray-200'>
              In today's interconnected world, the pursuit of optimal healthcare knows no borders. Health Scope Medical Tourism emerges as your trusted gateway to global healthcare excellence. With a commitment to providing you with the highest quality medical care, we bridge the gap between your health needs and the world's most renowned healthcare destinations.
              </p>
            </span>*/}


            <div className='text-white rounded-xl p-10  flex flex-col gap-5'>


            <span className='text-3xl flex flex-col sm:text-4xl md:text-5xl lg:text-7xl font-bold'>
              <h1 className=''>
                Health Scope
              </h1>
              <h1 className=''>
                Medical Tourism
              </h1>
            </span>

            <span className='w-max'>
              <Link href='/en/values'>
                
                <button className=" flex items-baseline text-white">
		    <span className=""> More </span>
		    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
			<path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
		    </svg>
		</button>
		
              </Link>
            </span>

              

            </div>




          </div>



        </div>

        {/* <div className='w-full h-32 absolute bottom-0 left-0 z-10'>
          <div className='w-full h-full relative'>
            <Image src='/images/tailer/Frame3.png' fill alt='main' />
          </div>
        </div> */}

        



        <div className='w-full h-full absolute left-0 top-0'>
          <div className='w-full h-full relative'>

            <div className='absolute left-0 top-0 w-full h-full bg-sky-600 bg-opacity-30 z-10'></div>
            



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
          <Image
        src={img}
        fill
        priority
        objectFit="cover"
        alt="hero img"
      />
          </div>
        </SwiperSlide>
          
          ))}
      </Swiper>
          </div>
        </div>

        <div className='w-full bg-black/10 h-full z-[1] absolute left-0 top-0'>
        </div>



      </section>
    </>
  );
};

export default Hero;
