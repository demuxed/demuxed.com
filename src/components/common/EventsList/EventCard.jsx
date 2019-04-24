import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import Img from 'gatsby-image';

import Button from '../Button';
import Link from '../Link';
import List from '../List';
import defaultEventImage from '../../../images/event.jpg';
import { fontSize, media } from '../../../styles/mixins';
import {
  brandPink,
  brandTextGrey,
  defaultSerif,
  medLarge,
  small,
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

const EventImageLink = styled(Link)`
  width: 100%;
  height: 215px;
  overflow: hidden;
  display: flex;

  img {
    align-self: center;
  }
`;

const EventDetails = styled.div`
  padding: 2em;
  position: relative;
`;

const EventCommunity = styled.h3`
  ${fontSize('16px')};
  line-height: 1.2em;
  margin-bottom: 0.6em;
`;

const EventType = styled.h4`
  ${fontSize('14px')};
  font-family: ${defaultSerif};
  font-weight: 500;
  color: ${brandTextGrey};
  line-height: 1.3em;
`;

const EventDate = styled.span`
  ${fontSize('13px')};
  line-height: 1.6em;
  margin-bottom: 0.8em;
  display: block;
  color: ${brandPink};
`;

const StyledButton = styled(Button)`
  padding: 0.5em 3em;
`;

const communityImage = community =>
  get(
    community,
    'Logo.localFiles[0].childImageSharp.fixed.src',
    defaultEventImage
  );

const EventCard = ({ community: [community], startDate, type, url }) => (
  <StyledListItem>
    <EventImageLink to={url}>
      <img src={communityImage(community)} alt={community.name} />
    </EventImageLink>
    <EventDetails>
      <EventCommunity>{community.name}</EventCommunity>
      <EventType>{type}</EventType>
      <EventDate>{startDate}</EventDate>
      <StyledButton as={Link} to={url}>
        Join
      </StyledButton>
    </EventDetails>
  </StyledListItem>
);

EventCard.propTypes = {
  community: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  startDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventCard;
