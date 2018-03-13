import { css } from 'styled-components';

const transitionSpeed = 'all 0.2s ease-out';

export const transitionAll = css`
  -webkit-transition: ${transitionSpeed};
  -moz-transition: ${transitionSpeed};
  -ms-transition: ${transitionSpeed};
  -o-transition: ${transitionSpeed};
  transition: ${transitionSpeed};
`;

export function hexToRgba(hex, alpha) {
  hex   = hex.replace('#', '');
  var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
  var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
  var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
  if ( alpha ) {
     return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }
  else {
     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};
