import { Grid, Row } from 'react-styled-flexboxgrid';
import styled, { css } from 'styled-components';

export const Container = styled(Grid)`
  height: 60px;

  color: ${({ theme }) => theme.colors.text};

  ${Row} {
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 5px;
  }

  ${({ theme }) => (css`
    @media screen and (max-width: ${theme.flexboxgrid.breakpoints.md}rem) {
      justify-content: center;  
    }
  `)}
`;

export const Navigation = styled.nav`
  height: 100%;

  display:flex;
  align-items: center;
  justify-content: flex-end;
`;
