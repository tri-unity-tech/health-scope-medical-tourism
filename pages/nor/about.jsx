import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Cover from '../components/Cover';

const HeroCover = () => {
  return (
    <>
      <Layout>
        <Cover title='About Us' />
        <About />
        <Team />
      </Layout>
    </>
  );
};

export default HeroCover;
