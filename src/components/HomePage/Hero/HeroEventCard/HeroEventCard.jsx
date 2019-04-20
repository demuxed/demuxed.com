/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EventPhotoLink from './EventPhotoLink';
import EventTitle from './EventTitle';
import defaultEventImage from '../../../../images/event.jpg';
import { fontSize, media } from '../../../../styles/mixins';
import { brandPink, brandTextGrey, xlLarge } from '../../../../styles/variables';

const ContentWrapper = styled.div`
  background-color: #fff; 
  padding: 0;

  ${media(xlLarge)`
    min-height: 11.8em;
  `}
`;

const LeftContent = styled.div`
  padding: 1.5em;
      
  ${media(xlLarge)`
    width: 49%;
    display: inline-block;
    vertical-align: top;
    padding: 2em;
  `}
`;

const RightContent = styled.div`
  display: none;
  min-height: 160px;
  position: relative;
  background-color: ${brandPink};
      
  ${media(xlLarge)`
    min-height: 11.8em;
    display: inline-block;
    width: 51%;
    vertical-align: top;
  `}
`;

const EventDate = styled.h4`
  ${fontSize('12px')};
  color: ${brandPink};
`;

const EventLocation = styled.p`
  ${fontSize('12px')};
  color: ${brandTextGrey};
  margin-bottom: 1em;
`;

const EventLogo = styled.img`
  max-width: 60px;
`;

const HeroEventCard = ({
  className,
  location,
  startDate,
  type,
  url,
  logos,
}) => (
  <ContentWrapper className={className}>
    <LeftContent>
      <EventTitle url={url}>{type}</EventTitle>
      <EventDate>{startDate}</EventDate>
      {location && location[0] ? (
        <EventLocation>{location[0].city}</EventLocation>
      ) : null}
      {logos.map((logo, i) => <EventLogo key={i} src={logo} />)}
    </LeftContent>
    <RightContent>
      <EventPhotoLink url={url} photoUrl={defaultEventImage} />
    </RightContent>
  </ContentWrapper>
);

HeroEventCard.defaultProps = {
  className: '',
  logos: [],
};

HeroEventCard.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
  })).isRequired,
  startDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default HeroEventCard;
