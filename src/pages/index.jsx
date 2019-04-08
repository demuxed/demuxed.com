import React from 'react';

import Layout from '../components/common/Layout';
import Hero from '../components/HomePage/Hero';
// import NewsSection from '../components/HomePage/NewsSection';
import HomePageEventsSection from '../components/HomePage/EventsSection';
// import TweetsSection from '../components/HomePage/TweetsSection';
// import FeaturedVideo from '../components/HomePage/FeaturedVideo';
// import HomePageJobsSection from '../components/HomePage/JobsSection';
import InvolvementSection from '../components/HomePage/InvolvementSection';

const IndexPage = () => (
  <Layout headerProps={{ dark: true }}>
    <Hero />
    {/* <NewsSection /> */}
    <HomePageEventsSection />
    {/* <TweetsSection /> */}
    {/* <FeaturedVideo /> */}
    {/* <HomePageJobsSection /> */}
    <InvolvementSection />
  </Layout>
);

export default IndexPage;
