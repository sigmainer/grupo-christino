import { Grid, Col } from 'react-styled-flexboxgrid';
import styled, { css } from 'styled-components';

import Text from '~/components/Text';

export const Container = styled(Grid)`
  margin-top: 20px;
  min-height: calc(100% - 140px);

  ${Text}.title {
    margin-bottom: 20px;
  }

  #nosImportamos {
    
    ${({ theme }) => css`
      @media (max-width: ${theme.flexboxgrid.breakpoints.sm}em) {
        margin: 0 -${theme.flexboxgrid.outerMargin}rem;
        padding: 5px ${theme.flexboxgrid.outerMargin}rem;
        color: ${theme.colors.primaryText};
        background: ${theme.colors.primary};
      }
    `};
  }
`;

export const SobreContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => css`
    @media (min-width: ${theme.flexboxgrid.breakpoints.sm}em) {
      padding-right: 40px;
    }
  `}

  #slogan {
    margin: 50px 0;
  }
`;

export const NosImportamosContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.flexboxgrid.breakpoints.sm}em) {
      padding-left: 40px;
    }
  `}
`;

export const ObjetivoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.flexboxgrid.breakpoints.sm}em) {
      padding-right: 40px;
    }
  `}
`;

export const ImgContainer = styled.div`
  width: 100%;
  animation: entry .4s;

  img {
    width: 100%;
  }

  @keyframes entry {
    from {
      display: absolute;
      transform: translateY(50px);
      opacity: 0;
    } to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
