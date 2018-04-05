import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Button from '../components/Button';
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
  <div>
    <Row center="xs">
      <Col xs={12}>
        <Hero>
          <HeroHeader>October 17th and 18th, 2018</HeroHeader>
          <p>Save the date for your favorite video engineering conference in the multiverse.<br />Now with <Text underline>2 days</Text> of awesome.</p>

          <p>
            <Row center="sm">
              <Col xs={12} sm={4} md={4} lg={3} style={{marginBottom: '1em'}}>
                <Link href="https://demuxed.typeform.com/to/A5fsto">
                  <Button large block>Submit a talk</Button>
                </Link>
              </Col>

              <Col xs={12} sm={4} md={4} lg={3}>
                <Link href="http://tickets.demuxed.com">
                  <Button large block>Tickets</Button>
                </Link>
              </Col>
            </Row>
          </p>

          <p>
            <Link href="http://www.bespokesf.co/">Bespoke</Link> | San Francisco, CA
          </p>
        </Hero>
      </Col>
    </Row>

    <Row center="xs">
      <Col xs={12}>
        <h2>The 2018 conference is supported by these <Text underline>amazing</Text> companies:</h2>
      </Col>
      <Col xs={12}>
        <Sponsors />
      </Col>
    </Row>
  </div>
);

export default IndexPage;
