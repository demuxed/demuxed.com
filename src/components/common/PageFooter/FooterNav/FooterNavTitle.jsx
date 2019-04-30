import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FooterNavItem from './FooterNavItem';

const H4 = styled.h4`
  font-weight: 500;
`;

const FooterNavTitle = ({ children }) => (
  <FooterNavItem>
    <H4>{children}</H4>
  </FooterNavItem>
);

FooterNavTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterNavTitle;
