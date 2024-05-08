import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import OurServices from '../components/Services';

const Services = () => (
  <>
    <Layout>
      <HeroAll title='Services' content="Our services span medical consultations, personalized treatment plans, travel arrangements, accommodation, transportation, and attentive post-treatment care. We are committed to ensuring your well-being knows no borders. Read more below" />

      <OurServices />
    </Layout>
  </>
);

export default Services;
