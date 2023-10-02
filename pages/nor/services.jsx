import React from 'react';
import Layout from '../components/layout';
import Cover from '../components/Cover';
import OurServices from '../components/Services';


const HeroCover = () => {
  return (
    <>
      <Layout>
        <Cover title='Our Services' />
        <OurServices />
      </Layout>
    </>
  );
};

export default HeroCover;
