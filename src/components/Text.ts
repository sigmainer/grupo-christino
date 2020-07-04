import styled, { css } from 'styled-components';

interface ITextProps {
  size?: number;
  center?: 'xs' | 'sm' | 'md' | true;
  fontFamily?: string;
  bold?: boolean;
  asTitle?: boolean;
  entryAnimation?:boolean;
}

const Text = styled.p<ITextProps>`
  width: 100%;
  margin: 5px 0;

  ${({ fontFamily }) => fontFamily && css`font-family: "${fontFamily}", "Roboto", sans-serif;`}
  ${({ size }) => size && css`font-size: ${size}px;`}

  ${({ asTitle }) => asTitle && css`margin: 20px 0;`}
  ${({ bold, asTitle }) => (bold || asTitle) && css`font-weight: 800;`}

  ${({ entryAnimation }) => entryAnimation && css`
      animation: textEntry .6s ;

      @keyframes textEntry {
        0% {
          transform: scale(.99);
          opacity: 0;
        }
        50% {
          transform: scale(1.01);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}

  ${({ center, theme }) => {
    switch(center) {
      case 'xs': return css`
        @media (max-width: ${theme.flexboxgrid.breakpoints.sm}em) {
          text-align: center;
        }
      `;
      case 'sm': return css`
        @media (max-width: ${theme.flexboxgrid.breakpoints.md}em) {
          text-align: center;
        }
      `;
      case 'md': return css`
        @media (max-width: ${theme.flexboxgrid.breakpoints.lg}em) {
          text-align: center;
        }
      `;
      default: return css`
        text-align: center;
      `;
    }
  }}
`;

export default Text;
