import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from '../List';
import { fontSize, media } from '../../../styles/mixins';
import {
  brandGrey, brandPink, brandTextGrey, defaultSerif, medLarge, small,
} from '../../../styles/variables';

const StyledListItem = styled(List.Item)`
  list-style-type: none;
  text-align: left;
  background-color: #fff; 
  margin-bottom: 1em;

  ${media(small)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}

  ${media(medLarge)`
    width: 28%;
    margin-right: 2%;
    margin-left: 2%;
  `}
`;

const VideoWrapper = styled.div`
  height: 216px;
  width: 100%;
`;

const VideoDetails = styled.div`
  padding: 2em;
  position: relative;
`;

const VideoTitle = styled.h3`
  ${fontSize('16px')};
  line-height: 1.4em;
  margin-bottom: 0.6em;
`;

const VideoAuthor = styled.h4`
  ${fontSize('14px')};
  font-family: ${defaultSerif};
  font-weight: 500;
  color: ${brandTextGrey};
  line-height: 1.3em;
`;

const VideoDate = styled.span`
  ${fontSize('13px')};
  color: ${brandPink};
  line-height: 1.6em;
  margin-bottom: 0.8em;
  display: block;
`;

const VideoDesc = styled.p`
  ${fontSize('13px')};
  line-height: 1.6em;
  padding-top: 1em;
  border-top: solid 2px ${brandGrey};
`;

const VideoCard = ({
  title, author, date, description, html,
}) => (
  <StyledListItem>
    <VideoWrapper dangerouslySetInnerHTML={{ __html: html }} />
    <VideoDetails>
      <VideoTitle>{title}</VideoTitle>
      <VideoAuthor>{author}</VideoAuthor>
      <VideoDate>{date}</VideoDate>
      <VideoDesc>{description}</VideoDesc>
    </VideoDetails>
  </StyledListItem>
);

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default VideoCard;
