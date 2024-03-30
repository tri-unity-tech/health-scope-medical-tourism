import React from 'react';
import Layout from '../components/layout';
import HeroAll from '../components/HeroAll';
import Team from '../components/Team';

const TeamSection = () => (
  <>
    <Layout>
      <HeroAll title='Team' content="Our diverse team of specialists works harmoniously to provide personalized care, ensuring your health knows no borders." />
      <Team />
    </Layout>
  </>
);

export default TeamSection;
