import React from 'react';
import PropTypes from 'prop-types';

import NewsList from '../../common/NewsList';
import PageSection from '../../common/PageSection';

const NewsSection = ({ news }) => (
  <PageSection>
    <PageSection.Heading>In the news</PageSection.Heading>
    <NewsList news={news} />
  </PageSection>
);

NewsSection.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsSection;
