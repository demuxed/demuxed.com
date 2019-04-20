import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../../../common/Link';

const StyledLink = styled(Link)`
  &:hover {
    opacity: 0.8;
  }
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const EventPhotoLink = ({ url, photoUrl }) => (
  <StyledLink to={url}>
    <Img src={photoUrl} />
  </StyledLink>
);

EventPhotoLink.propTypes = {
  url: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default EventPhotoLink;
