/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import VideoCard from './VideoCard';

const VideosList = ({ videos }) => (
  <List>
    {videos.map((item, i) => (
      <VideoCard
        key={i}
        title={item.frontmatter.title}
        author={item.frontmatter.author}
        date={item.frontmatter.date}
        description={item.frontmatter.description}
        html={item.html}
      />
    ))}
  </List>
);

VideosList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideosList;
