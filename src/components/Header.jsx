import React from 'react'
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Link from './Link';
import Text from './Text';
import Logo from '../img/logo.svg';
import { hexToRgba, transitionAll } from '../shared-styles';

const NavLinks = styled(props =>
  <ul className={props.className}>
    {props.children}
  </ul>
)`
  list-style: none;
  margin: 0;
  text-align: right;

  li:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(({ children, className, mainText, ...props }) =>
  <li className={className}>
    <Link {...props}>
      <Text sans uppercase>{mainText || children}</Text>
    </Link>

    {mainText &&
      <div className="dropdown-container">
        {React.Children.map(children, child =>
          <div className="dropdown">
            {child}
          </div>)}
      </div>}
  </li>
)`
  display: inline-block;
  margin: 0 40px 0 0;
  position: relative;

  a {
    text-decoration: none;
    letter-spacing: 0.1em;
    font-size: 18px;
    font-weight: 400;

    ${transitionAll}

    &, &:visited {
      color: ${props => props.theme.primaryText}
    }

    &:hover {
      color: ${props => props.theme.secondaryText}
    }
  }

  .dropdown-container {
    position: absolute;
    top: 100%;
    background-color: #fff;
    padding: 5px 0;
    display: none;
    width: 100%;
    text-align: center;
    border-radius: 20px 20px 0px 20px;
  }

  .dropdown {
    padding: 5px 0;
  }

  &:hover .dropdown-container {
    display: block;
  }
`;

const Header = styled(( { className }) =>
  <div className={className}>
    <Grid>
      <Row middle="xs">
        <Col>
          <img className="logo" src={Logo} />
        </Col>

        <Col lg={true} md={false}>
          <NavLinks>
            <NavLink to="/meetups">Meetups</NavLink>
            <NavLink href="https://www.heavybit.com/library/podcasts/demuxed/">Podcast</NavLink>
            <NavLink href="https://medium.com/@demuxed">Blog</NavLink>
            <NavLink href="https://2018.demuxed.com" mainText="2018 Conference">
              <Link href="https://2017.demuxed.com">2017</Link>
              <Link href="https://2016.demuxed.com">2016</Link>
              <Link href="https://2015.demuxed.com">2015</Link>
            </NavLink>
          </NavLinks>
        </Col>
      </Row>
    </Grid>
  </div>
)`
  padding: 2.8em 0;

  .logo {
    height: 25px;
    margin: 0;
    vertical-align: middle;
  }
`;

export default Header;
