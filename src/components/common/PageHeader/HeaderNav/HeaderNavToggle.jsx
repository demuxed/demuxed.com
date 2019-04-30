import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import showMenuIcon from '../../../../images/menu.svg';
import hideMenuIcon from '../../../../images/x.svg';
import { medLarge } from '../../../../styles/variables';
import { media } from '../../../../styles/mixins';

const Anchor = styled.a`
  background-image: url(${props => props.icon});
  width: 70px;
  height: 65px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 66%;
  display: block;
  position: absolute;
  top: 6px;
  right: 0px;
  z-index: 100;
  
  ${media(medLarge)`
    display: none;
  `}
`;

const HeaderNavToggle = ({ isNavVisible, onClick }) => (
  <Anchor
    icon={isNavVisible ? hideMenuIcon : showMenuIcon}
    onClick={onClick}
  />
);

HeaderNavToggle.propTypes = {
  isNavVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderNavToggle;
