/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import SynopsisCard from '../SynopsisCard';

const NewsList = ({ news }) => (
  <List>
    {news.map((item, i) => (
      <SynopsisCard
        key={i}
        heading={item.frontmatter.title}
        subHeading={item.frontmatter.date}
        html={item.html}
        url={item.frontmatter.url}
      />
    ))}
  </List>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
