import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media, fontSize } from '../../../styles/mixins';
import { brandPink, medium } from '../../../styles/variables';

const H1 = styled.h1`
  ${fontSize('20px')};
  line-height: 1.4em;
  margin-bottom: 1em;
  text-align: center;
  text-transform: uppercase;

  &:after {
    content: "";
    height: 2px;
    width: 50px;
    display: block;
    background-color: ${brandPink};
    margin: 0.3em auto 0 auto;
  }

  ${media(medium)`
    ${fontSize('20px')};
    line-height: 1.4em;
    margin-bottom: 2em;
  `}
`;

const PageSectionHeading = ({ className, children }) => (
  <H1 className={className}>
    {children}
  </H1>
);

PageSectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageSectionHeading;
