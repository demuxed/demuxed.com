import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Link from './Link';

import comcast from '../img/sponsors/comcast.svg';

import netflix from '../img/sponsors/netflix.svg';
import bitmovin from '../img/sponsors/bitmovin.svg';
import google from '../img/sponsors/google.svg';

import wowza from '../img/sponsors/wowza.svg';
import cbsi from '../img/sponsors/cbsi.svg';
import fastly from '../img/sponsors/fastly.svg';
import peer5 from '../img/sponsors/peer5.svg';
import jwplayer from '../img/sponsors/jwplayer.svg';

import unifiedStreaming from '../img/sponsors/unifiedStreaming.svg';
import hulu from '../img/sponsors/hulu.svg';

import brightcove from '../img/sponsors/brightcove.svg';

const GroupTitle = styled.h5`
  font-size: 12px;
  line-height: 1.4375;
  margin-bottom: 2em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const GroupSpacer = styled.div`
  width: 100%;
  height: 3em;
`

const Sponsors = styled(({ className }) =>
  <div className={className}>
    <Grid>
      <Row center="xs">
        <GroupTitle>Platinum</GroupTitle>
      </Row>

      <Row center="xs">
        <Col lg={5} md={7} xs={10}>
          <Link href="https://comcast.com">
            <img src={comcast} alt="Comcast" />
          </Link>
        </Col>
      </Row>

      <GroupSpacer />

      <Row center="xs">
        <GroupTitle>Gold</GroupTitle>
      </Row>

      <Row center="xs" middle="xs" around="md">
        <Col lg={3} md={4} xs={8}>
          <Link href="https://netflix.com">
            <img src={netflix} alt="Netflix" />
          </Link>
        </Col>

        <Col lg={3} md={4} xs={8}>
          <Link href="https://bitmovin.com">
            <img src={bitmovin} alt="Bitmovin" />
          </Link>
        </Col>

        <Col lg={3} md={4} xs={8}>
          <Link href="https://google.com">
            <img src={google} alt="Google" />
          </Link>
        </Col>
      </Row>

      <GroupSpacer />

      <Row center="xs">
        <GroupTitle>Silver</GroupTitle>
      </Row>

      <Row center="xs" middle="md" around="md">
        <Col lg={2} md={3} xs={7}>
          <Link href="https://wowza.com">
            <img src={wowza} alt="Wowza" />
          </Link>
        </Col>

        <Col lg={2} md={3} xs={7}>
          <Link href="https://cbsinteractive.com">
            <img src={cbsi} alt="CBS Interactive" />
          </Link>
        </Col>

        <Col lg={2} md={3} xs={7}>
          <Link href="https://fastly.com">
            <img src={fastly} alt="Fastly" />
          </Link>
        </Col>

        <Col lg={2} md={3} xs={7}>
          <Link href="https://peer5.com">
            <img src={peer5} alt="Peer5" />
          </Link>
        </Col>

        <Col lg={2} md={3} xs={7}>
          <Link href="https://jwplayer.com">
            <img src={jwplayer} alt="JW Player" />
          </Link>
        </Col>
      </Row>

      <GroupSpacer />

      <Row center="xs">
        <GroupTitle>Bronze</GroupTitle>
      </Row>

      <Row center="xs" middle="md">
        <Col lg={2} md={2} xs={5}>
          <Link href="https://unified-streaming.com">
            <img src={unifiedStreaming} alt="Unified Streaming" />
          </Link>
        </Col>

        <Col lg={2} md={2} xs={5} mdOffset={1}>
          <Link href="https://hulu.com">
            <img src={hulu} alt="Hulu" />
          </Link>
        </Col>
      </Row>

      <GroupSpacer />

      <Row center="xs">
        <GroupTitle>Party</GroupTitle>
      </Row>

      <Row center="xs">
        <Col lg={3} md={4} xs={8}>
          <Link href="https://brightcove.com">
            <img src={brightcove} alt="Brightcove" />
          </Link>
        </Col>
      </Row>
    </Grid>
  </div>
)`
  a {
    display: block;
  }
  img {
    width: 100%;
  }
`;

export default Sponsors;
