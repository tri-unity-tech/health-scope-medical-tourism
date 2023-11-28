import React from 'react';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { featuresData } from './featuresData';

import {
  AiOutlineExpand,
  AiOutlineCompress,
  AiOutlineHome,
} from 'react-icons/ai';

const Features = () => {
  return (
    <>
      <section
        id='features'
        className='text-gray-700 overflow-x-hidden bg-health-blue flex justify-center relative px-5 md:px-20'
      >
        <div className='container'>
          <div className='grid z-10 py-20 md:gap-20 relative md:grid-cols-2'>
            <div className='relative flex'>
              <div className='w-[0.5px] bg-gray-100 h-[200px] absolute left-10 -top-40 z-10'></div>

              <div className='w-20 shrink-0 h-full flex justify-center pt-10'>
                <div className='w-10 text-red-600 bg-health-blue relative z-20 flex items-center justify-center text-xl h-10 rounded-full border'>
                  <AiOutlineHome />
                </div>
              </div>

              <div className='flex flex-grow mt-10'>
                <div className='w-full gap-2 flex flex-col'>
                  <h1 className='text-2xl text-gray-300 font-light'>
                    WHO WE ARE
                  </h1>
                  <h2 className='font-bold text-white text-xl'>
                    Health Scope Medical Tourism
                  </h2>

                  <p className='text-sm text-gray-200'>
                    We are a prominent company that specializes in facilitating
                    medical travel abroad for patients seeking high-quality and
                    affordable healthcare services.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid'>
              <div className='relative flex'>
                <div className='w-20 shrink-0 h-full flex justify-center pt-10'>
                  <div className='w-10 text-red-600 bg-health-blue relative z-20 flex items-center justify-center text-xl h-10 rounded-full border'>
                    <AiOutlineExpand />
                  </div>
                </div>

                <div className='flex flex-grow mt-10'>
                  <div className='w-full gap-2 flex flex-col'>
                    <h2 className='font-bold text-white text-xl'>About Us</h2>

                    <p className='text-sm text-gray-200'>
                      Health Scope Medical Tourism is a healthcare facilitator
                      with a mission to make a positive difference in the lives
                      of its clients. Whether you require a routine check-up, a
                      complex surgery, or a life-changing transformation, Health
                      Scope International Medical Tourism can assist you in
                      achieving your health goals with confidence and
                      convenience. We provide comprehensive and personalized
                      support to our clients throughout their health journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className='relative flex'>
                <div className='w-[0.5px] bg-gray-100 h-[550px] absolute left-10 -top-[500px] z-10'></div>

                <div className='w-20 shrink-0 h-full flex justify-center pt-10'>
                  <div className='w-10 text-red-600 bg-health-blue relative z-20 flex items-center justify-center text-xl h-10 rounded-full border'>
                    <AiOutlineCompress />
                  </div>
                </div>

                <div className='flex flex-grow mt-10'>
                  <div className='w-full gap-2 flex flex-col'>
                    <h2 className='font-bold text-white text-xl'>
                      Our Commitment to Excellence
                    </h2>

                    <p className='text-sm text-gray-200'>
                      We are committed to continuously expanding our services,
                      ensuring that we always provide value to people and change
                      lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='absolute top-0 right-0 z-0 opacity-30 lg:opacity-100'>
            <svg
              width='450'
              height='556'
              viewBox='0 0 450 556'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='277'
                cy='63'
                r='225'
                fill='url(#paint0_linear_25:217)'
              />
              <circle
                cx='17.9997'
                cy='182'
                r='18'
                fill='url(#paint1_radial_25:217)'
              />
              <circle
                cx='76.9997'
                cy='288'
                r='34'
                fill='url(#paint2_radial_25:217)'
              />
              <circle
                cx='325.486'
                cy='302.87'
                r='180'
                transform='rotate(-37.6852 325.486 302.87)'
                fill='url(#paint3_linear_25:217)'
              />
              <circle
                opacity='0.8'
                cx='184.521'
                cy='315.521'
                r='132.862'
                transform='rotate(114.874 184.521 315.521)'
                stroke='url(#paint4_linear_25:217)'
              />
              <circle
                opacity='0.8'
                cx='356'
                cy='290'
                r='179.5'
                transform='rotate(-30 356 290)'
                stroke='url(#paint5_linear_25:217)'
              />
              <circle
                opacity='0.8'
                cx='191.659'
                cy='302.659'
                r='133.362'
                transform='rotate(133.319 191.659 302.659)'
                fill='url(#paint6_linear_25:217)'
              />
              <defs>
                <radialGradient
                  id='paint1_radial_25:217'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(17.9997 182) rotate(90) scale(18)'
                >
                  <stop offset='0.145833' stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' stopOpacity='0.08' />
                </radialGradient>
                <radialGradient
                  id='paint2_radial_25:217'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(76.9997 288) rotate(90) scale(34)'
                >
                  <stop offset='0.145833' stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' stopOpacity='0.08' />
                </radialGradient>
                <linearGradient
                  id='paint4_linear_25:217'
                  x1='184.521'
                  y1='182.159'
                  x2='184.521'
                  y2='448.882'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute bottom-0 left-0 z-0 opacity-30 lg:opacity-100'>
            <svg
              width='364'
              height='201'
              viewBox='0 0 364 201'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24'
                stroke='url(#paint0_linear_25:218)'
              />
              <path
                d='M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24'
                stroke='url(#paint1_linear_25:218)'
              />
              <path
                d='M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24'
                stroke='url(#paint2_linear_25:218)'
              />
              <path
                d='M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481'
                stroke='url(#paint3_linear_25:218)'
              />
              <circle
                opacity='0.8'
                cx='214.505'
                cy='60.5054'
                r='49.7205'
                transform='rotate(-13.421 214.505 60.5054)'
                stroke='url(#paint4_linear_25:218)'
              />
              <circle
                cx='220'
                cy='63'
                r='43'
                fill='url(#paint5_radial_25:218)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_25:218'
                  x1='184.389'
                  y1='69.2405'
                  x2='184.389'
                  y2='212.24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_25:218'
                  x1='156.389'
                  y1='69.2405'
                  x2='156.389'
                  y2='212.24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_25:218'
                  x1='125.389'
                  y1='69.2405'
                  x2='125.389'
                  y2='212.24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear_25:218'
                  x1='93.8507'
                  y1='67.2674'
                  x2='89.9278'
                  y2='210.214'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' stopOpacity='0' />
                  <stop offset='1' stopColor='#4A6CF7' />
                </linearGradient>
                <linearGradient
                  id='paint4_linear_25:218'
                  x1='214.505'
                  y1='10.2849'
                  x2='212.684'
                  y2='99.5816'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4A6CF7' />
                  <stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
                </linearGradient>
                <radialGradient
                  id='paint5_radial_25:218'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(220 63) rotate(90) scale(43)'
                >
                  <stop offset='0.145833' stopColor='white' stopOpacity='0' />
                  <stop offset='1' stopColor='white' stopOpacity='0.08' />
                </radialGradient>
              </defs>
            </svg>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
