import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  padding-top: 5px;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-areas: 'IC';
  margin: 0 auto;

  @media (min-width:320px) { max-width: 320px; }
  @media (min-width:480px) { max-width: 480px; }
  @media (min-width:600px) { max-width: 600px; }
  @media (min-width:801px) { max-width: 801px; }
  @media (min-width:1025px) { max-width: 1025px; }
  @media (min-width:1281px) { max-width: 1281px; }

  @media (min-width:801px) {
    grid-template-columns: 243px 1fr;
    grid-template-areas: 'IC NV';
  }
`;

export const ImageContainer = styled(Link)`
  grid-area: IC;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 60px;
    margin-right: 5px;
  }
`;

export const Navigation = styled.nav`
  grid-area: NV;

  display: none;
  @media (min-width:801px) { display: flex; }

  height: 100%;

  align-items: center;
  justify-content: flex-end;
`;
