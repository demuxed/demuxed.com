import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Link from '../../Link';
import FooterNavItem from './FooterNavItem';
import { brandPurple } from '../../../../styles/variables';
import { fontSize, transitionAll } from '../../../../styles/mixins';

const StyledLink = styled(Link)`
  ${fontSize('11px')};
  font-weight: 300;
  text-transform: none;
  color: #fff;
  color: ${lighten(0.66, brandPurple)};

  &:hover {
    color: #fff;
  }

  ${props => !!props.icon && css`
    ${transitionAll};
    background-image: url(${props.icon});
    background-repeat: no-repeat;
    background-position: left;
    display: block;
    height: 22px;
    padding-left: 2.6em;

    &:hover {
      opacity: 0.5;
    }
  `}
`;

const FooterNavLink = ({ children, to, icon }) => (
  <FooterNavItem>
    <StyledLink icon={icon} to={to}>
      {children}
    </StyledLink>
  </FooterNavItem>
);

FooterNavLink.defaultProps = {
  icon: '',
};

FooterNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default FooterNavLink;
