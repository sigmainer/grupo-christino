import { createGlobalStyle } from 'styled-components';

import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px "Roboto", sans-serif;
    background:
      linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => shade(0.02, theme.colors.background)}
      );
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }
`;
