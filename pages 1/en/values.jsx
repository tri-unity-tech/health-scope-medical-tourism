import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import Values from '../components/Values';

const valuesSection = () => (
  <>
    <Layout>
      <HeroAll title='Values' content="Heathscope Medical Tourism is dedicated to providing compassionate, honest, and excellent care to patients worldwide. Read about our values:" />
      <Values />
    </Layout>
  </>
);

export default valuesSection;
