import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  `;
