import { css } from 'styled-components';

import { baseFontSize, baseLineHeight, transitionSpeed } from './variables';

export const animateIn = () => css`
  animation: fadein 0.5s ease-in;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const clearfix = () => css`
  zoom: 1;

  &:before,
  &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export const fontSize = size => {
  const fontSizeNum = parseInt(size, 10);
  const baseFontSizeNum = parseInt(baseFontSize, 10);
  const baseLineHeightNum = parseInt(baseLineHeight, 10);

  return css`
    font-size: ${fontSizeNum}px;
    font-size: ${fontSizeNum / baseFontSizeNum}rem;
    line-height: ${Math.ceil(fontSizeNum / baseLineHeightNum) *
      (baseLineHeightNum / fontSizeNum)};
  `;
};

export const media = (point, feature = 'min-width') => (...content) => css`
  @media (${feature}: ${point / 16}em) {
    ${css(...content)};
  }
`;

export const transitionAll = () => css`
  -webkit-transition: ${transitionSpeed};
  -moz-transition: ${transitionSpeed};
  -ms-transition: ${transitionSpeed};
  -o-transition: ${transitionSpeed};
  transition: ${transitionSpeed};
`;
