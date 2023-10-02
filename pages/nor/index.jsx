import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import CAA from '../components/caa';
import CAB from '../components/cab';

const HeroCover = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <CAA />
        <CAB />
      </Layout>
    </>
  );
};

export default HeroCover;
