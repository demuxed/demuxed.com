/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import Container from '../../common/Container';
import HeroBanner from './HeroBanner';
import HeroEventCard from './HeroEventCard';
import bannerImage from '../../../images/hero-banner.jpg';
import {
  brandBlue, large, medLarge, medium,
} from '../../../styles/variables';
import { fontSize, media } from '../../../styles/mixins';

const Section = styled.section`
  background-color: ${brandBlue};
  text-align: center;
`;

const H1 = styled.h1`
  ${fontSize('20px')};
  color: #fff;
  line-height: 1.4em;
  margin-bottom: 1em;
  text-align: center;
  text-transform: uppercase;
  
  ${media(medLarge)`
    ${fontSize('24px')};
  `}

  ${media(large)`
    ${fontSize('26px')};
    margin-bottom: 2em;
  `}
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const LeftContent = styled.div`
  ${media(large)`
    vertical-align: top;
    display: inline-block;
    width: 32%;
    margin-right: 2%;
  `}
`;

const StyledEventCard = styled(HeroEventCard)`
  list-style-type: none;
  margin-bottom: 1em;

  ${media(medium)`
    display: inline-block;
    vertical-align: top;
    width: 44%;
    margin: 0 2.5%;
    margin-bottom: 2em;
  `}

  ${media(large)`
    width: 100%;
  `}
`;

const RightContent = styled.div`
  ${media(large)`
    vertical-align: top;
    width: 64%;
    display: inline-block;
  `}
`;

const StyledBanner = styled(HeroBanner)`
  list-style-type: none;
  margin-bottom: 1em;
`;

const Hero = ({ events }) => (
  <Section>
    <Container>
      <H1>The Community for Engineers Working with Video</H1>
      <ContentWrapper>
        {events.length ? (
          <LeftContent>
            {events.map((event, i) => <StyledEventCard key={i} {...event} />)}
          </LeftContent>
        ) : null}
        <RightContent>
          <StyledBanner url="#" imageUrl={bannerImage} />
        </RightContent>
      </ContentWrapper>
    </Container>
  </Section>
);

export default Hero;
