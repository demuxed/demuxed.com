import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

import Button from '../Button';
import Link from '../Link';
import List from '../List';
import defaultEventImage from '../../../images/event.jpg';
import { fontSize, media } from '../../../styles/mixins';
import { medLarge, small } from '../../../styles/variables';

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

const CommunityImage = styled(Link)`
  width: 100%;
  height: 215px;
  overflow: hidden;
  display: flex;

  img {
    align-self: center;
  }
`;

const Details = styled.div`
  padding: 2em;
  position: relative;
`;

const CommunityName = styled.h3`
  ${fontSize('16px')};
  line-height: 1.2em;
  margin-bottom: 0.6em;
`;

const StyledButton = styled(Button)`
  padding: 0.5em 3em;
`;

const communityImage = logo =>
  get(logo, 'localFiles[0].childImageSharp.fixed.src', defaultEventImage);

const EventCard = ({ name, logo, url }) => (
  <StyledListItem>
    <CommunityImage to={url}>
      <img src={communityImage(logo)} alt={name} />
    </CommunityImage>
    <Details>
      <CommunityName>{name}</CommunityName>
      <StyledButton as={Link} to={url}>
        Join
      </StyledButton>
    </Details>
  </StyledListItem>
);

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventCard;
