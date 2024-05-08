'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { menuData, subData } from './menuData';

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 250) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <nav
        className={`text-gray-700 duration-500 transition-all top-0 left-0 z-40 flex justify-center w-full items-center fixed left-0 top-0 z-50 ${
          sticky ? 'bg-black/70 bg-blurr' : 'bg-black/20'
        }
          `}
      >
        <div className='container px-5'>
          <div className='relative -mx-4 flex items-center justify-between'>
            <div className='w-72 truncate text-gray-700 text-3xl font-bold max-w-full px-4 xl:mx-12'>
              <Link
                href='/'
                className={`block text-gray-600 w-full ${
                  sticky ? 'py-5' : 'py-4'
                } `}
              >
                <div className='w-14 h-14 overflow-hidden rounded relative'>
                  <Image alt='logo' src='/images/logo/logo.jpeg' fill />
                </div>
              </Link>
            </div>

            <div className='flex w-max items-center justify-between px-4'>
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id='navbarToggler'
                  aria-label='Mobile Menu'
                  className='absolute right-4 top-1/2 block translate-y-[-50%] rounded-md px-3 py-[6px] ring-primary focus:ring-2 md:hidden'
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? ' top-[7px] rotate-45' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? 'opacity-0 ' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-gray-100 ${
                      navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                    }`}
                  />
                </button>
                <nav
                  id='navbarCollapse'
                  className={`navbar absolute right-0 z-30 border-body-color/50 bg-sky-600 w-screen md:h-max h-[100svh] py-4 px-6 duration-300 md:visible md:static md:w-auto md:border-none md:!bg-transparent md:p-0 md:opacity-100 ${
                    navbarOpen
                      ? 'visibility top-full opacity-100 -left-1'
                      : 'invisible top-0 opacity-0'
                  }`}
                >
                  <ul className='block md:flex items-center'>
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className='group border-b md:border-none relative'
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex text-[35px] md:text-[16px] py-4 2xl:text-[30px] py-2 text-base md:mr-0 md:inline-flex md:py-0 md:px-5 text-gray-100 ${
                              menuItem.title === 'Contact'
                                ? 'md:border-l-2'
                                : ''
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <span
                              onClick={() => handleSubmenu(index)}
                              className='flex flex-col text-[35px] md:text-[16px] py-4 2xl:text-[30px] cursor-pointer items-center justify-between py-2 text-base text-white md:mr-0 md:inline-flex md:py-6 md:px-0'
                            >
                              <div className='flex w-full md:w-max flex justify-between items-center'>
                                {menuItem.title}
                                <span className='pl-3'>
                                  <svg
                                    width='20'
                                    height='18'
                                    viewBox='0 0 15 14'
                                  >
                                    <path
                                      d='M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z'
                                      fill='currentColor'
                                    />
                                  </svg>
                                </span>
                              </div>

                              <div
                                className={`h-max w-full md:w-52 py-7 md:shadow-xl rounded left-0 relative md:absolute py-2 ${
                                  openIndex === 1 ? 'flex' : 'hidden'
                                }  ${
                                  sticky
                                    ? 'bg-black/70 md:top-24 bg-blurr'
                                    : 'md:bg-black/50 md:top-24 bg-blurr'
                                }`}
                              >
                                <div className='text-slate-100 flex flex-col w-full md:border-b border-sky-200'>
                                  {subData.map((d, i) => (
                                    <Link key={i} href={d.path ? `${d.path}` : `#`}>
                                      <div className='hover:bg-black/90 text-lg w-full hover:text-slate-100 px-5'>
                                        {d.title}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* <div className={`md:top-14 h-max w-full md:w-32 py-5 md:shadow-xl md:border border-sky-400 rounded left-0 relative md:absolute bg-sky-600 py-1 ${ openIndex === 1 ? 'flex'
                      : 'hidden'}`}>
                                <li className='text-slate-100 md:border-b border-sky-200'>
                                  { subData.map((d, i) => (
                                  <ul className='hover:bg-green-200 hover:text-slate-700 px-5'>
                                    <Link href='#'>
                                      { d.title }
                                    </Link>
                                  </ul>

                                    ))}
                                </li>
                              </div> */}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
