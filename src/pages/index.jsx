import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Link from '../components/Link';
import Sponsors from '../components/Sponsors';
import Text from '../components/Text';
import logo from '../img/logo.svg';

const Hero = styled.div`
  margin-bottom: 5em;
`;

const HeroHeader = styled.h1`
  font-size: 80px;
  line-height: 1.15;
  margin-bottom: 0.1em;
  margin-top: 1em;
`;

const IndexPage = () => (
  <Grid>
    <Row center="xs">
      <Col xs={12}>
        <Hero>
          <HeroHeader>October 17th and 18th, 2018</HeroHeader>
          <p>The best damn technical video conference in the multiverse.<br />Now with <em>2 days</em> of awesome.</p>
          <p>
            <Link href="http://www.bespokesf.co/">Bespoke</Link> | San Francisco, CA
          </p>
        </Hero>
      </Col>
    </Row>

    <Row center="xs">
      <Col xs={12}>
        <Sponsors />
      </Col>
    </Row>
  </Grid>
);

export default IndexPage;
