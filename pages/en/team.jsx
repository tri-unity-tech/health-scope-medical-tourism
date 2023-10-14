import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import Team from '../components/Team';

const TeamSection = () => (
  <>
    <Layout>
      <HeroAll title='Team' />
      <Team />
    </Layout>
  </>
);

export default TeamSection;
