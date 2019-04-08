import { createGlobalStyle } from 'styled-components';

import { fontSize } from '../../../styles/mixins';
import {
  brandGrey,
  brandTextGrey,
  defaultSerif,
  fontColor,
  headlineFont,
  lineHeightRatio,
  linkColor,
  selectionColor,
} from '../../../styles/variables';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  dl, dd, ol, ul,
  form, fieldset, legend,
  table, th, td, caption,
  hr {
    margin: 0;
    padding: 0;
  }

  abbr[title], dfn[title]{
    cursor: help;
  }

  a, u, ins {
    text-decoration: none;
  }

  u {
    text-decoration: underline;
  }

  ins {
    border-bottom: 1px solid;
  }

  object, img {
    font-style: italic;
    vertical-align: middle;
    max-width: 100%;
  }

  label,
  input,
  textarea,
  button,
  select,
  option {
    cursor: pointer;
  }

  .text-input:active,
  .text-input:focus,
  textarea:active,
  textarea:focus {
    cursor: text;
    outline: none;
  }

  ::-moz-selection {
    background-color: ${selectionColor};
    color: #000;
  }

  ::selection {
    background-color: ${selectionColor};
    color: #000;
  }

  .hidden {
    display: none;
  }

  html {
    font-family: ${defaultSerif};
    font-size: 100%;
    font-weight: 400;
    line-height: ${lineHeightRatio};
    color: ${fontColor};
    background-color: ${brandGrey};
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;    
  }

  html,
  body {
    height: 100%;
  }

  a {
    color: ${linkColor};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${headlineFont};
    font-weight: 100;  
  }

  p {
    ${fontSize('14px')};
    color: ${brandTextGrey};
    line-height: 1.9em;
  }
`;

export default GlobalStyles;
