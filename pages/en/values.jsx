import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import Values from '../components/Values';

const valuesSection = () => (
  <>
    <Layout>
      <HeroAll title='Values' />
      <Values />
    </Layout>
  </>
);

export default valuesSection;
