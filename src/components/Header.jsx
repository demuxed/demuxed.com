import React from 'react'
import styled, { css } from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import Button from './Button';
import Link from './Link';
import Text from './Text';

import close from '../img/close.svg';
import hamburger from '../img/hamburger.svg';
import logo from '../img/logo.svg';
import { hexToRgba, transitionAll } from '../shared-styles';

const Hamburger = styled(({ className, onClick }) =>
  <div className={className}>
    <img src={hamburger} alt="Menu" className={className} onClick={onClick} />
  </div>
)`
  text-align: right;
  cursor: pointer;

  img {
    margin-bottom: 0;
    vertical-align: middle;
  }
`;

const NavLinks = styled(props =>
  <ul className={props.className}>
    <NavLink to="/meetups">Meetups</NavLink>
    <NavLink href="https://www.heavybit.com/library/podcasts/demuxed/">Podcast</NavLink>
    <NavLink href="https://medium.com/@demuxed">Blog</NavLink>
    <NavLink to="/" mainText="2018 Conference">
      <Link href="https://2017.demuxed.com">2017</Link>
      <Link href="https://2016.demuxed.com">2016</Link>
      <Link href="https://2015.demuxed.com">2015</Link>
    </NavLink>
  </ul>
)`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.center ? 'center' : 'flex-end'};
  align-items: center;
  list-style: none;
  margin: 0;
  text-align: right;

  ${props => !props.column && `li { margin: 0 40px 0 0 }`}

  li {
    a {
      &, &:visited {
        color: ${props => props.theme.primaryText}
      }

      &:hover {
        color: ${props => props.altHover ? props.theme.secondaryBg : props.theme.secondaryText};
      }
    }

    &:last-child {
      margin-right: 0;
    }
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
  position: relative;

  a {
    text-decoration: none;
    letter-spacing: 0.1em;
    font-size: 18px;
    font-weight: 400;

    ${transitionAll}
  }

  .dropdown-container {
    position: absolute;
    top: 100%;
    background-color: #fff;
    padding: 5px 0;
    display: none;
    width: 100%;
    text-align: center;
    border-radius: 20px 0px 20px 20px;
  }

  .dropdown {
    padding: 5px 0;
  }

  &:hover .dropdown-container {
    display: block;
  }
`;

const MobileMenu = styled(props =>
  <div className={props.className}>
    <img className="close" src={close} alt="close" onClick={props.close} />
    <NavLinks column center altHover />
  </div>
)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 0.725rem;
  background-color: ${props => props.theme.accentBg};

  .close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  padding: 2.8em 1em;

  .logo {
    height: 25px;
    margin: 0;
    vertical-align: middle;
  }
`;

class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      menuShowing: false,
    }
  }

  toggleMenu = () => this.setState({ menuShowing: !this.state.menuShowing });

  render () {
    return (
      <HeaderContainer>
        <Grid>
          <Row middle="xs">
            <Col>
              <img className="logo" src={logo} />
            </Col>

            <Col lg md xs={false}>
              <NavLinks />
            </Col>

            <Col lg={false} md={false} xs>
              <Hamburger onClick={this.toggleMenu} />
            </Col>
          </Row>
        </Grid>

        {this.state.menuShowing &&
          <MobileMenu close={this.toggleMenu} />}
      </HeaderContainer>
    );
  }
};

export default Header;
