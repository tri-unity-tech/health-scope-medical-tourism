import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import OurServices from '../components/Services';

const Services = () => (
  <>
    <Layout>
      <HeroAll title='Services' />

      <OurServices />
    </Layout>
  </>
);

export default Services;
