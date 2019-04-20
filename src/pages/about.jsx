import React from 'react';

import Layout from '../components/common/Layout';
import AboutUsSection from '../components/AboutUsPage/AboutUsSection';
import GuidingPrinciplesSection from '../components/AboutUsPage/GuidingPrinciplesSection';

const AboutPage = () => (
  <Layout>
    <AboutUsSection />
    <GuidingPrinciplesSection />
  </Layout>
);

export default AboutPage;
