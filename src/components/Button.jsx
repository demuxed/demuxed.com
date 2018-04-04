import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import Link from './Link';

const Button = styled.button`
  display: inline-block;
  padding: 0 1em;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background-color: ${props => props.theme.accentBg};
  border-radius: 100px;
  letter-spacing: 0.2em;
  font-family: ${props => props.theme.fonts.default};
  font-weight: 600;
  transition: background-color 0.1s ease-in;
  cursor: pointer;
  border: none;

  &:hover {
    color: #fff;
    background-color: ${props => darken(0.2, props.theme.accentBg)};
  }

  ${props => props.block &&
    css`
      width: 100%;
    `}

  ${props => props.large &&
    css`
      font-size: 14px;
      padding: 1em 2em;
    `}
`;

export default Button;
