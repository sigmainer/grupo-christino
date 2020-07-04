import { createGlobalStyle } from 'styled-components';

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

  body, #root {
    font: 14px "Roboto", sans-serif;
    background: ${({ theme }) => theme.colors.background};
    
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }
`;
