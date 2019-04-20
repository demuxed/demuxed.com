import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize, media } from '../../../styles/mixins';
import {
  brandPurple,
  defaultSerif,
  large,
  medLarge,
} from '../../../styles/variables';

const H2 = styled.h2`
  ${fontSize('18px')};
  line-height: 1.6em;
  margin-bottom: 1.4em;
  color: ${brandPurple};
  text-align: center;
  font-family: ${defaultSerif};
  font-weight: 500;
  
  ${media(medLarge)`
    margin: 0 auto 2em auto;
    max-width: 75%;
  `}
  
  ${media(large)`
    ${fontSize('20px')};
    line-height: 1.6em;
    max-width: 65%;
    margin-bottom: 3em;
  `}
`;

const PageSectionSubHeading = ({ className, children }) => (
  <H2 className={className}>
    {children}
  </H2>
);

PageSectionSubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageSectionSubHeading;
