import React from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';

import Link from '~/components/Link';

import { Container, Navigation, ImageContainer } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <ImageContainer>
            <img src="logo.svg" alt="grupo-logo" />
            <h1>GRUPO CHRISTINO</h1>
          </ImageContainer>
        </Col>

        <Col xs={false} md={6}>
          <Navigation>
            <Link to="/" selected={location.pathname === '/'}>
              INÍCIO
            </Link>
            <Link to="/contabilidade" selected={location.pathname === '/contabilidade'}>
              CONTABILIDADE
            </Link>
            <Link to="/despachante" selected={location.pathname === '/despachante'}>
              DESPACHANTE
            </Link>
            <Link to="/seguros" selected={location.pathname === '/seguros'}>
              SEGUROS
            </Link>
          </Navigation>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
