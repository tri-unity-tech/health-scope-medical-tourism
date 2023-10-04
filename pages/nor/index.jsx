import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import CAA from '../components/caa';
import CAB from '../components/cab';
import CAC from '../components/cac';
import CAD from '../components/cad';

const HeroCover = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <CAA />
        <CAB />
        <CAC />
        <CAD />
      </Layout>
    </>
  );
};

export default HeroCover;
