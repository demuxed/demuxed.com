import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../../../common/Link';
import { fontSize } from '../../../../styles/mixins';
import { brandPink, defaultSerif, fontColor } from '../../../../styles/variables';

const H3 = styled.h3`
  ${fontSize('13px')};
  font-family: ${defaultSerif};
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 0.8em;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  color: ${fontColor};

  &:hover {
    color: ${brandPink};
  }
`;

const EventTitle = ({ children, url }) => (
  <H3>
    <StyledLink to={url}>
      {children}
    </StyledLink>
  </H3>
);

EventTitle.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventTitle;
