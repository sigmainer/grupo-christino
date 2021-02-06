import { createGlobalStyle } from 'styled-components';

import { lighten, shade, transparentize } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: ${({ theme }) => lighten(0.2, theme.primary.main)}; }
    ::-webkit-scrollbar-thumb { background: ${({ theme }) => transparentize(0.75, theme.secondary.main)}; }
    ::-webkit-scrollbar-thumb:hover { background: ${({ theme }) => transparentize(0.50, theme.secondary.main)}; }
  }

  html, body, #root {
    height: 100%;
  }

  body, #root {
    font: 14px "Roboto", sans-serif;
    background: ${({ theme }) => theme.background};
    
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased !important;
  }

  main {
    width: 100%;
    margin: 0 auto;

    @media (min-width:320px) { max-width: 320px; }
    @media (min-width:480px) { max-width: 480px; }
    @media (min-width:600px) { max-width: 600px; }
    @media (min-width:801px) { max-width: 801px; }
    @media (min-width:1025px) { max-width: 1025px; }
    @media (min-width:1281px) { max-width: 1281px; }
  }

  a {
    text-decoration: none;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    transition: color .2s;

    :hover,
    :focus {
      color: ${({ theme }) => shade(0.5, theme.primary.main)};
    } 
  }
`;
