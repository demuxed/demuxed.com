import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Link from '../../common/Link';
import { brandBlue } from '../../../styles/variables';

const ContentWrapper = styled.div`
  background-color: ${brandBlue};
  padding: 0;
`;

const Img = styled(GatsbyImage)`
  display: block;
        
  &:hover {
    box-shadow: 0px 0px 52px -6px rgba(252,123,251,0.6);
  }
`;

const HeroBanner = ({ className, imageSharpFluid, url }) => (
  <ContentWrapper className={className}>
    <Link to={url}>
      <Img
        fluid={imageSharpFluid}
        alt="Hero Banner"
      />
    </Link>
  </ContentWrapper>
);

HeroBanner.defaultProps = {
  className: '',
};

HeroBanner.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HeroBanner;
