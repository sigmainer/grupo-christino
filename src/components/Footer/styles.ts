import { Grid, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

export const Container = styled(Grid)`
  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    height: 60px;
    margin-top: 20px;
  }

  color: ${({ theme }) => theme.colors.text};

  ${Row} {
    height: 100%;
  }
`;

export const Text = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
