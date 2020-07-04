import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-styled-flexboxgrid';

import Link from '~/components/Link';
import RouterLink from '~/components/RouterLink';

import { Container, Navigation, ImageContainer } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <ImageContainer>
            <img src="logo.svg" alt="grupo-logo" />
            <h1>CHRISTINO CONSULTORIA</h1>
          </ImageContainer>
        </Col>

        <Col xs={false} md={6}>
          <Navigation>
            {false && (
              <>
                <RouterLink to="/" selected={location.pathname === '/'}>
                  INÍCIO
                </RouterLink>
                <RouterLink to="/contabilidade" selected={location.pathname === '/contabilidade'}>
                  CONTABILIDADE
                </RouterLink>
                <RouterLink to="/despachante" selected={location.pathname === '/despachante'}>
                  DESPACHANTE
                </RouterLink>
                <RouterLink to="/seguros" selected={location.pathname === '/seguros'}>
                  SEGUROS
                </RouterLink>
                <RouterLink to="/seguros" selected={location.pathname === '/seguros'}>
                  SEGUROS
                </RouterLink>
              </>
            )}

            <Link href="https://www.instagram.com/christino_consultoria/" target="_blank">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.facebook.com/christinoconsultoria/" target="_blank">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://wa.me/5514997068240" target="_blank">
              <FaWhatsapp size={20} />
            </Link>
          </Navigation>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
