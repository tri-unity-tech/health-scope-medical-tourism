import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

const Layout = ({ title, content, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='icon' type='image/svg+xml' href='/public/logo/logo.png' />
    </Head>

    <div className='w-screen bg-white'>
      <Header />

      <div className='fixed bottom-10 text-white right-10 z-40 w-14 h-14 rounded-full bg-green-700 opacity-70 hover:opacity-100 text-3xl flex items-center justify-center rounded'>
        <span>
          <AiOutlineWhatsApp />
        </span>
      </div>

      {children}
      <Footer />
    </div>
  </>
);

Layout.defaultProps = {
  title: 'Medical Tourism',
  content: '',
};

export default Layout;
