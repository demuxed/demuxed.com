import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';

const StyledLogo = styled(Logo)`
  background-image: url(${props => props.theme.logoIcon});
`;

const HeaderLogo = () => (
  <StyledLogo url="/" />
);

export default HeaderLogo;
