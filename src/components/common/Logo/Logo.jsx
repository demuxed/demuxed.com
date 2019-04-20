import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../Link';
import { medLarge } from '../../../styles/variables';
import { media } from '../../../styles/mixins';

const StyledLink = styled(Link)`
  width: 147px;
  height: 25px;
  margin: 1.6em 0 1em 1em;
  display: block;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 147px;
  
  &:hover {
    opacity: 0.8;
  }
  
  ${media(medLarge)`
    margin: 0;
    float: left;
  `}
`;

const Logo = ({ className, url }) => (
  <StyledLink className={className} to={url} />
);

Logo.defaultProps = {
  className: '',
  url: '#',
};

Logo.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
};

export default Logo;
