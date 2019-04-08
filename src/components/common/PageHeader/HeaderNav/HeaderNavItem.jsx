import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../../Link';
import { defaultSerif, large, medLarge } from '../../../../styles/variables';
import { fontSize, media, transitionAll } from '../../../../styles/mixins';

const Li = styled.li`
  ${media(medLarge)`
    border: 0;
    display: inline-block;
    margin-left: 1em;
    
    &:first-child {
      margin-left: 0;
    }
  `}
  
  ${media(large)`
    margin-left: 2em;
    
    &:first-child {
      margin-left: 0;
    }
  `}
`;

const StyledLink = styled(Link)`
  ${transitionAll};
  ${fontSize('18px')};
  font-family: ${defaultSerif};
  font-weight: 400;
  display: block;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1em;
        
  ${media(medLarge)`
    ${fontSize('12px')};
    padding: 0;
    color: ${props => props.theme.medLargeColor};
  `}

  &:hover,
  &.selected {
    text-decoration: none;
    background: rgba(225,225,225,0.1);
    
    ${media(medLarge)`
      opacity: 1;
      text-decoration: none;
      background: 0;
      color: ${props => props.theme.medLargeHoverColor};
    `}
  }
`;

const HeaderNavItem = ({ to, children }) => (
  <Li>
    <StyledLink to={to} activeClassName="selected">
      {children}
    </StyledLink>
  </Li>
);

HeaderNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeaderNavItem;
