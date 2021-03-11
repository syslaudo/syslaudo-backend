import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${colors.darkBackground};
    color: ${colors.text};
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-top: 1rem;
    line-height: 1.5rem;
  }

  .svgImg {
    fill: ${colors.primary};
  }
`;
