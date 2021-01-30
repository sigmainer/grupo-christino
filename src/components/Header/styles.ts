import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-styled-flexboxgrid';
import styled, { css } from 'styled-components';

export const Container = styled(Grid)`
  height: 70px;

  color: ${({ theme }) => theme.colors.text};

  ${Row} {
    height: 100%;
  }
`;

export const ImageContainer = styled(Link)`
  margin-top: 5px;

  display: flex;
  align-items: center;

  img {
    height: 60px;
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
