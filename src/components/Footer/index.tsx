import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import { useTheme } from 'styled-components';

import { pixels } from '@pacote/pixels';

import useWindowSize from '~/utils/useWindowSize';

import { Container, Text } from './styles';

const Footer: React.FC = () => {
  const windowSize = useWindowSize();
  const theme = useTheme();

  return (
    <Container>
      {windowSize.width > pixels(`${theme.flexboxgrid.breakpoints.sm}em`) && (
        <Row>
          <Col xs={4}>
            <Text>
              Desenvolvido por
              &nbsp;
              <a href="https://furlansoftware.com" target="_balnk">Furlan Software</a>
            </Text>
          </Col>

          <Col xs={4}>
            <Text>
              Grupo Christino 2020 &copy; Todos os diretos reservados.
            </Text>
          </Col>

          <Col xs={4}>
            <Text>
              Imagens criadas por
              &nbsp;
              <a href="https://www.freepik.com/popular" target="_balnk">freepik</a>
            </Text>
          </Col>
        </Row>
      )}

      {windowSize.width <= pixels(`${theme.flexboxgrid.breakpoints.sm}em`) && (
        <>
          <Row>
            <Col xs={12}>
              <Text>
                Grupo Christino 2020 &copy; Todos os diretos reservados.
              </Text>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Text>
                Desenvolvido por
                &nbsp;
                <a href="https://furlansoftware.com" target="_balnk">Furlan Software</a>
              </Text>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Text>
                Imagens criadas por
                &nbsp;
                <a href="https://www.freepik.com/popular" target="_balnk">freepik</a>
              </Text>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Footer;
