import React from 'react';
import qs from 'qs';

import Layout from '../components/common/Layout';
import VideosSection from '../components/VideosPage/VideosSection';

const VideosPage = ({ location }) => {
  const { tag } = qs.parse(location.search.replace('?', ''));

  return (
    <Layout>
      <VideosSection tag={tag} />
    </Layout>
  );
};

export default VideosPage;
