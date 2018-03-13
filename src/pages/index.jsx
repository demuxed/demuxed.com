import React from 'react';
import Link from 'gatsby-link';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Text from '../components/Text';
import logo from '../img/logo.svg';

const HeroHeader = styled.h1`
  font-size: 80px;
  line-height: 1.15;
  margin-bottom: 0.1em;
  margin-top: 1em;
`;

const IndexPage = () => (
  <Grid>
    <Row center="xs">
      <Col>
        <HeroHeader>October 17th and 18th, 2018</HeroHeader>
        <p>
          <Link href="http://www.bespokesf.co/">Bespoke</Link> | San Francisco, CA
        </p>
      </Col>
    </Row>
  </Grid>
);

export default IndexPage;
