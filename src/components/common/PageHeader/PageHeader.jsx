import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Container from '../Container';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import { DarkTheme, DefaultTheme } from './themes';
import { medLarge, large } from '../../../styles/variables';
import { clearfix, media } from '../../../styles/mixins';

const navItems = [
  { caption: 'Home', path: '/' },
  { caption: 'Events', path: '/events' },
  // { caption: 'Jobs', path: '/jobs' },
  { caption: 'Videos', path: '/videos' },
  { caption: 'About', path: '/about' },
];

const Header = styled.header`
  background-color: ${props => props.theme.bgColor};
  width: 100%;
  z-index: 10;
`;

const StyledContainer = styled(Container)`
  ${clearfix}
  padding: 0;

  ${media(medLarge)`
    padding: 2em;
  `}

  ${media(large)`
    padding: 2.8em 2em;
  `}
`;

const PageHeader = ({ dark }) => (
  <ThemeProvider theme={dark ? DarkTheme : DefaultTheme}>
    <Header>
      <StyledContainer>
        <HeaderLogo />
        <HeaderNav items={navItems} />
      </StyledContainer>
    </Header>
  </ThemeProvider>
);

PageHeader.defaultProps = {
  dark: false,
};

PageHeader.propTypes = {
  dark: PropTypes.bool,
};

export default PageHeader;
