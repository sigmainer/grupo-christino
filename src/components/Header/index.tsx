import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

import { Button, Link } from '~/components/Button';

import { Navigation, ImageContainer, Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <ImageContainer to="/">
      <img src="assets/christino-logo.png" alt="grupo-logo" />
    </ImageContainer>

    <Navigation>
      <Button>QUEM SOMOS</Button>
      <Button>PREÇOS</Button>
      <Button>BLOG</Button>
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
  </Container>
);

export default Header;
