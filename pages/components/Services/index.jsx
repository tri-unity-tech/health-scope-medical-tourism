import React from 'react';
import Image from 'next/image';
import { BiPlusMedical, BiSolidAmbulance } from 'react-icons/bi';
import { BsFileMedical, BsFillHospitalFill } from 'react-icons/bs';
import { TbAmbulance } from 'react-icons/tb';


const OurServices = () => {
    return (
        <div className='w-full h-max mt-20 sm:mt-40 flex justify-center'>
            <div className='container relative'>

               


                <div className='grid md:grid-cols-2 xl:grid-cols-4 w-full mb-20 rounded-t-2xl p-10 gap-10'>

                    <div className='flex justify-center'>

                        <div id='mainbar1' className='w-72 hover:shadow-xl hover:bg-red-50 relative duration-500 ease-in p-5 flex flex-col gap-5'>

                            <div id='serbar1' className='w-2 h-full absolute -left-2 bottom-0 bg-red-600'></div>

                            <span className='w-10 h-10 text-xl text-red-600 flex items-center justify-center bg-gray-100 rounded'>
                                <BiPlusMedical />
                            </span>
                            <span className='text-gray-600 font-bold'>MEDICAL CONSULTATION</span>
                            <p className='text-sm text-gray-500'>We facilitate medical consultations and assist with hospital admissions and medication for patients seeking healthcare services abroad.</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div id='mainbar2' className='w-72 hover:shadow-xl hover:bg-teal-50 relative duration-500 ease-in p-5 flex flex-col gap-5'>

                            <div id='serbar2' className='w-2 h-full absolute -left-2 bottom-0 bg-teal-600'></div>

                            <span className='w-10 h-10 text-xl text-teal-600 flex items-center justify-center bg-gray-100 rounded'>
                                <BsFileMedical />
                            </span>
                            <span className='text-gray-600 font-bold'>DOCUMENTS</span>
                            <p className='text-sm text-gray-500'>We provide support in acquiring essential travel documents such as passports and visas for medical tourism purposes.</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div id='mainbar1' className='w-72 hover:bg-orange-50 relative duration-500 ease-in p-5 flex flex-col gap-5'>

                            <div id='serbar1' className='w-2 h-full absolute -left-2 bottom-0 bg-orange-600'></div>

                            <span className='w-10 h-10 text-xl text-orange-600 flex items-center justify-center bg-gray-100 rounded'>
                                <BsFillHospitalFill />
                            </span>
                            <span className='text-gray-600 font-bold'>ACOMMODATION</span>
                            <p className='text-sm text-gray-500'>We arrange accommodations and transportation services, including hotels and logistics, to ensure a comfortable stay during medical tourism trips.</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>

                        <div id='mainbar1' className='w-72 hover:bg-purple-50 relative duration-500 ease-in p-5 flex flex-col gap-5'>

                            <div id='serbar1' className='w-2 h-full absolute -left-2 bottom-0 bg-purple-600'></div>

                            <span className='w-10 h-10 text-xl text-purple-600 flex items-center justify-center bg-gray-100 rounded'>
                                <TbAmbulance />
                            </span>
                            <span className='text-gray-600 font-bold'>TRAVEL ASSISTANCE</span>
                            <p className='text-sm text-gray-500'>We offer travel assistance by arranging tickets for flights, trains, buses, and cabs to facilitate seamless medical tourism journeys.</p>
                        </div>
                    </div>

                </div>



                <div className='pb-20 px-5 flex flex-col gap-20'>
                    <div>

                    <div className='w-full flex justify-center'>
                        <span className='flex w-max text-teal-600 relative font-bold text-4xl'>
                            <div className='absolute h-14 -left-3 top-0 border-l border-gray-400' />
                            <div className='absolute h-14 -left-5 top-0 border-l border-gray-400' />
                            <div className='absolute w-full -left-10 bottom-0 border-b border-gray-400' />
                            <div className='absolute w-full -left-10 -bottom-2 border-b border-gray-400' />
                            More
                        </span>
                        </div>


                    </div>

                    <div className='text-lg text-gray-700 gap-5 flex flex-col'>
                        <p>Health Scope Medical Tourism is a
prominent company that specializes in
facilitating medical travel to abroad for
patients who seek high-quality and
affordable healthcare services.</p>

<p>Health Scope International Medical
Tourism is more than just a travel
agency. It is a healthcare facilitator
that strives to make a positive
difference in the lives of its clients.
Whether you are looking for a routine
check-up, a complex surgery, or a life-
changing transformation, Health Scope
International Medical Tourism can help
you achieve your health goals with
confidence and convenience.</p>
                        <p>We also offer comprehensive and
personalized support for our clients
throughout their health journey.</p>

                        <p>We are continuously expanding ourselves
looking unto it that we always provide
value to people and change lives.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;