import React from 'react'
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { Col, Row } from 'react-styled-flexboxgrid';

import Link from './Link';
import logo from '../img/logo-white.svg';

const FooterContainer = styled.div`
  margin-left: -1em;
  margin-right: -1em;
  background-color: ${props => props.theme.primaryText};
  padding: 4em 2em;

  color: ${props => props.theme.secondaryBg};

  ul {
    list-style: none;
    margin: 0;
  }

  a {
    font-weight: 300;
    font-size: 12px;
    text-transform: none;
    color: ${props => lighten(0.66, props.theme.primaryText)};
  }
`;

const Footer = props => (
  <FooterContainer>
    <Row>
      <Col xs={2}>
        <h4>Contact</h4>
        <ul>
          <li><Link href="mailto:info@demuxed.com">info@demuxed.com</Link></li>
        </ul>
      </Col>

      <Col xs={2}>
        <h4>Legal Stuff</h4>
        <ul>
          <li><Link href="http://confcodeofconduct.com/">Code of Conduct</Link></li>
        </ul>
      </Col>

      <Col xs={2}>
        <h4>Follow Us</h4>
        <ul>
          <li><Link href="https://twitter.com/demuxed">Twitter</Link></li>
          <li><Link href="https://www.youtube.com/channel/UCIc_DkRxo9UgUSTvWVNCmpA">YouTube</Link></li>
          <li><Link href="https://www.facebook.com/demuxed/">Facebook</Link></li>
        </ul>
      </Col>

      <Col xsOffset={4} xs={2}>
        <Link to="/"><img src={logo} alt="Demuxed" /></Link>
      </Col>
    </Row>
  </FooterContainer>
);

export default Footer;
