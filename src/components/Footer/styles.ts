import { Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 60px;
  margin-top: 20px;

  color: ${({ theme }) => theme.colors.text};

  ${Row} {
    height: 60px;
    @media (max-height: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
      height: auto;
    }
  }
`;

export const Text = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-height: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    margin: 5px 0;
  }
`;
