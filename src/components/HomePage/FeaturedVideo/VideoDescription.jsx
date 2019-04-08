import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../common/Button';
import Link from '../../common/Link';
import PageSection from '../../common/PageSection';
import { media } from '../../../styles/mixins';
import {
  brandPink,
  brandPurpleLight,
  brandPurple,
  medium,
  xlLarge,
} from '../../../styles/variables';

const VideoDescriptionWrapper = styled.div`
  text-align: left;
  margin-bottom: 3em;
  
  ${media(medium)`
    max-width: 36em;
    margin: 0 auto 4em auto;
  `}

  ${media(xlLarge)`
    float: right;
    max-width: 30em;
    margin-bottom: 0;
  `}
`;

const StyledSectionHeading = styled(PageSection.Heading)`
  ${media(xlLarge)`
    text-align: left;

    &:after {
      margin: 0.3em 0;
    }
  `}
`;

const Paragraph = styled.p`
  margin-bottom: 1.6em;
`;

const StyledButton = styled(Button)`
  padding: 0.5em 2em;
  margin: 0 1.5em 1em 0;
`;

const MoreButton = styled(StyledButton)`
  background-color: ${brandPurpleLight};
  color: ${brandPink};
  
  &:hover {
    background-color: ${brandPink};
    color: ${brandPurple};
  }
`;

const VideoDescription = ({ description, tags, url }) => (
  <VideoDescriptionWrapper>
    <StyledSectionHeading>Featured video</StyledSectionHeading>
    <Paragraph>{description}</Paragraph>
    <StyledButton as={Link} to={url} target="_blank">
      View full video
    </StyledButton>
    <MoreButton as={Link} to={`/videos/?tag=${tags[0]}`}>
      See more like this
    </MoreButton>
  </VideoDescriptionWrapper>
);

VideoDescription.propTypes = {
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoDescription;
