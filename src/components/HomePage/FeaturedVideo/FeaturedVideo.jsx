import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageSection from '../../common/PageSection';
import VideoDescription from './VideoDescription';
import { media } from '../../../styles/mixins';
import { xlLarge } from '../../../styles/variables';

const VideoWrapper = styled.div`
  height: 360px;
  width: 100%;
  max-width: 706px;
  display: inline-block;
  
  ${media(xlLarge)`
    float: left;
  `}
`;

const FeaturedVideo = ({
  frontmatter, html,
}) => (
  <PageSection clearfix>
    <VideoDescription
      description={frontmatter.description}
      tags={frontmatter.tags}
      url={frontmatter.url}
    />
    <VideoWrapper dangerouslySetInnerHTML={{ __html: html }} />
  </PageSection>
);

FeaturedVideo.propTypes = {
  frontmatter: PropTypes.shape({
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
};

export default FeaturedVideo;
