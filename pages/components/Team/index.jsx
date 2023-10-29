import React from 'react';
import Image from 'next/image';

const Team = () => {
    return (
        <div className='w-full h-max flex justify-center'>
            <div className='container relative'>


                <div className='w-full px-5 my-48 flex flex-col gap-20 md:gap-32'>
                    
                    <div className='w-full gap-10 sm:gap-40 flex flex-col md:flex-row justify-between'>

                        <div className='w-72 h-96 shrink-0 relative'>

                            <Image src='/images/pexels-gustavo-fring-4173168.jpg' alt='team' quality={100} objectFit="cover" fill />
                            

                            <div className='w-1 h-full bg-teal-400 absolute right-0 top-2'></div>
                            <div className='w-1 h-full bg-red-600 absolute -right-2 top-0'></div>
                            <div className='h-1 w-full bg-teal-400 absolute -right-10 top-2'></div>
                            <div className='h-1 w-full bg-red-600 absolute -right-14 top-0'></div>
                        </div>

                        <div className='flex flex-grow'>
                            <div className='w-full flex flex-col'>
                                <h1 className='text-teal-600 text-3xl font-bold'>
                                    Mr Jerome Byiringino
                                </h1>
                                <span className='flex items-center gap-2'>
                                    <p className='text-white px-4 bg-teal-500 py-0 text-lg'>Managing Director</p>
                                    <p className='text-2xl text-gray-400'>-</p>
                                    <p className='text-red-600 text-lg'>Co-Founder</p>
                                </span>

                                <span className='text-gray-500 flex flex-col gap-2 mt-5 text-sm md:text-[16px]'>
                                    <p>Mr Jerome Byiringino is the Co-founder at Health Scope Medical Tourism and the 
    managing director. Mr. Jerome has a bachelor’s degree in Microbiology 
    from India. </p>
                                    <p>He is experienced in the field of medical tourism and hospital 
    admissions.</p>
                                    <p>From June 2022- May 2023, he worked on a scientific research in DNA 
    Recombinant Technology at National Centre for Biotechnology in India.</p>
                                </span>
                            </div>
                        </div>
                    </div>


                    
                    <div className='w-full gap-10 sm:gap-40 flex flex-col md:flex-row justify-between'>

                        <div className='flex order-1 md:order-0 flex-grow'>
                            <div className='w-full flex flex-col'>
                                <h1 className='text-teal-600 text-3xl font-bold'>
                                    Dr. Nelson Rudasingwa
                                </h1>
                                <span className='flex items-center gap-2'>
                                    <p className='text-white px-4 bg-teal-500 py-0 text-lg'>MEDICAL DIRECTOR</p>
                                    <p className='text-2xl text-gray-400'>-</p>
                                    <p className='text-red-600 text-lg'>Co-Founder</p>
                                </span>

                                <span className='text-gray-500 flex flex-col gap-2 mt-5 text-sm md:text-[16px]'>
                                    <p>Nelson is a Rwandan citizen and a specialist in Medical Laboratory 
Science, Immunology and biomedicine. 
    from India. </p>
                                    <p>Nelson has a BSc Microbiology degree from Marwadi University –
India. He is a constant researcher on viral out breaks and drug 
innovation. He is serving as the medical director and company head of 
secretary at HSMT.</p>
                                </span>
                            </div>
                        </div>


                        <div className='w-72 order-0 md:order-1 h-96 shrink-0 relative'>

                            <Image src='/images/pexels-gustavo-fring-4173168.jpg' alt='team' quality={100} objectFit="cover" fill />
                            
                            <div className='w-1 h-full bg-teal-400 absolute left-0 top-2'></div>
                            <div className='w-1 h-full bg-red-600 absolute -left-2 top-0'></div>
                            <div className='h-1 w-full bg-teal-400 absolute -left-10 top-2'></div>
                            <div className='h-1 w-full bg-red-600 absolute -left-14 top-0'></div>
                        </div>



                    </div>
                    


                </div>
            </div>
        </div>
    );
};

export default Team;