import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import CAA from '../components/caa';
import CAB from '../components/cab';
import CAC from '../components/cac';
import CAD from '../components/cad';
import CAE from '../components/cae';

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
        <CAE />
      </Layout>
    </>
  );
};

export default HeroCover;
