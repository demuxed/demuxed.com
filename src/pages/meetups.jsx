import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import Link from '../components/Link';

const MeetupList = styled.ul`
  list-style: none;
  margin: 0 0 3em 0;
`;

const SecondPage = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>Video Tech Meetups Around the World</h1>

        <MeetupList>
          <li><Link href="http://sfvideo.org">San Francisco</Link></li>
          <li><Link href="http://www.meetup.com/London-Video-Technology/">London</Link></li>
          <li><Link href="http://www.meetup.com/BOS-Video-Technology/">Boston</Link></li>
          <li><Link href="https://www.meetup.com/Sydney-Video-Technology/">Sydney</Link></li>
          <li><Link href="http://www.meetup.com/Paris-Video-Tech/">Paris</Link></li>
          <li><Link href="http://www.meetup.com/Video-Tech-NYC/">New York</Link></li>
          <li><Link href="https://www.meetup.com/SeattleVideoTech/">Seattle</Link></li>
          <li><Link href="https://www.meetup.com/TLV-Video-Technology/">Tel Aviv</Link></li>
        </MeetupList>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2>Video Tech Slack Channel</h2>

        <Link href="http://video-dev.org/">Video Dev Slack</Link>
      </Col>
    </Row>
  </Grid>
)

export default SecondPage
