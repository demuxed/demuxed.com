import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  text-transform: ${props => props.uppercase && 'uppercase'};
  font-family: ${props => props.sans && props.theme.fonts.sans};
  text-decoration: ${props => props.underline && 'underline'}
`;

export default Text;
