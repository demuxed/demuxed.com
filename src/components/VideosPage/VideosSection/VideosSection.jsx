import React from 'react';
import PropTypes from 'prop-types';

import PageSection from '../../common/PageSection';
import VideosList from '../../common/VideosList';

const filterByTag = (tag, videos) =>
  videos.filter(video => !!video.frontmatter.tags && video.frontmatter.tags.includes(tag))

const VideosSection = ({ tag, videos }) => {
  const filteredVideos = tag ? filterByTag(tag, videos) : videos;
  
  return (
    <PageSection>
      <PageSection.Heading>Featured Video</PageSection.Heading>
      <VideosList videos={filteredVideos} />
    </PageSection>
  );
};

VideosSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  tag: PropTypes.string,
};

export default VideosSection;
