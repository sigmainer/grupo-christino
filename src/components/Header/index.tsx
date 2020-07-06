import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Row, Col } from 'react-styled-flexboxgrid';

import { Link } from '~/components/Button';

import useWindowSize from '~/utils/useWindowSize';

import { Container, Navigation, ImageContainer } from './styles';

const Header: React.FC = () => {
  const windowSize = useWindowSize();

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <ImageContainer to="/">
              <img src="logo.svg" alt="grupo-logo" />
              <h3>CHRISTINO CONSULTORIA</h3>
            </ImageContainer>
          </Col>

          {windowSize.hideOn('xs') && (
          <Col xs={false} sm={6} md={8}>
            <Navigation>
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
          )}
        </Row>
      </Container>
    </>
  );
};

export default Header;
